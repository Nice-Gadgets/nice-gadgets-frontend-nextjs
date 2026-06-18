import { type UIMessage, useChat as useAiChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { useRef } from 'react';

export const useChat = (productContext?: Record<string, unknown>) => {
  const {
    messages,
    setMessages,
    sendMessage: aiSendMessage,
    status,
  } = useAiChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      body: { productContext },
    }),
    onError: (err: Error) => {
      const isRateLimit =
        err.message.includes('429') || err.message.includes('RATE_LIMIT');

      const errorMessageText = isRateLimit
        ? '⚠️ Вичерпано денний ліміт запитів до ШІ. Спробуйте пізніше 😔'
        : '❌ Сталась помилка сервера. Спробуйте ще раз.';

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: errorMessageText,
          parts: [{ type: 'text', text: errorMessageText }],
        } as UIMessage,
      ]);
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = (text: string) => {
    aiSendMessage({ text });
  };

  return {
    messages,
    sendMessage,
    isLoading: status === 'submitted' || status === 'streaming',
    inputRef,
  };
};
