import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText } from 'ai';

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
});

export const maxDuration = 30;

export const POST = async (req: Request) => {
  const { messages, productContext } = await req.json();

  const customStream = new ReadableStream({
    async start(controller) {
      try {
        const result = await streamText({
          model: google('gemini-2.5-flash'),
          system: `Ти — привітний ШІ-консультант інтернет-магазину Nice Gadgets.
          Спирайся ТІЛЬКИ на цю інформацію про товар: ${productContext}.`,
          messages: messages,
          maxRetries: 0,
        });

        for await (const textChunk of result.textStream) {
          controller.enqueue(new TextEncoder().encode(textChunk));
        }
      } catch (streamError) {
        console.error('Помилка стрімінгу:', streamError);

        const errString = String(streamError).toLowerCase();
        if (
          errString.includes('429') ||
          errString.includes('quota') ||
          errString.includes('exhausted')
        ) {
          controller.enqueue(
            new TextEncoder().encode('Вибачте, мій денний ліміт вичерпано 😔.'),
          );
        } else {
          controller.enqueue(
            new TextEncoder().encode("Сталася помилка з'єднання."),
          );
        }
      } finally {
        controller.close();
      }
    },
  });

  return new Response(customStream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
