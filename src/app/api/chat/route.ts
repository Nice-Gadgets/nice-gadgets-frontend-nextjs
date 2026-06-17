import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';
import { promises as fs } from 'fs';
import path from 'path';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export const maxDuration = 30;

interface IncomingMessage {
  role: 'system' | 'user' | 'assistant' | 'data';
  content?: string;
  parts?: Array<{ type: string; text?: string }>;
}

export const POST = async (req: Request) => {
  const { messages, productContext } = await req.json();

  let catalogData = '';
  try {
    const filePath = path.join(process.cwd(), 'public', 'api', 'products.json');
    catalogData = await fs.readFile(filePath, 'utf8');
  } catch {
    catalogData = 'Каталог тимчасово недоступний.';
  }

  const currentProductInfo =
    productContext && Object.keys(productContext).length > 0
      ? `Користувач зараз переглядає цей товар: ${JSON.stringify(productContext)}.`
      : '';

  const systemPrompt = `
    Ти — професійний, ввічливий та лаконічний ШІ-консультант інтернет-магазину "Nice Gadgets".
    Твоя головна мета — допомагати клієнтам обирати техніку.

    ОСЬ ПОВНИЙ КАТАЛОГ ТОВАРІВ МАГАЗИНУ:
    ${catalogData}

    ${currentProductInfo}

    ПРАВИЛА:
    1. Спирайся ТІЛЬКИ на дані з каталогу вище. Не вигадуй товари чи ціни.
    2. Якщо товару немає в JSON, скажи, що його зараз немає, та запропонуй альтернативу.
    3. Відповідай українською мовою лаконічно.
  `;

  const coreMessages = messages.map((m: IncomingMessage) => ({
    role: m.role,
    content: m.parts
      ? m.parts.map((p) => p.text || '').join('')
      : m.content || '',
  }));

  try {
    const result = await streamText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      messages: coreMessages.slice(-10),
      maxRetries: 0,
    });

    return result.toUIMessageStreamResponse();
  } catch (error: unknown) {
    console.error('AI SDK Error:', error);

    const statusCode =
      typeof error === 'object' && error !== null && 'statusCode' in error
        ? (error as Record<string, unknown>).statusCode
        : 500;

    if (statusCode === 429 || statusCode === 503) {
      return new Response('RATE_LIMIT', { status: 429 });
    }

    return new Response('SERVER_ERROR', { status: 500 });
  }
};
