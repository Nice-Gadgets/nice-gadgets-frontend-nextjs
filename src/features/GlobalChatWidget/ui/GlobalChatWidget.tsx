'use client';

import { useState } from 'react';

import { BodyText } from '@/shared/ui/Typography';

export const GlobalChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { id: string; role: string; content: string }[]
  >([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          productContext: 'Ти — загальний консультант магазину Nice Gadgets.',
        }),
      });

      if (!res.ok) throw new Error('Server error');
      if (!res.body) throw new Error('Немає відповіді');

      const aiMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        { id: aiMessageId, role: 'assistant', content: '' },
      ]);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiText = '';
      let receivedData = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        receivedData = true;
        aiText += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].content = aiText;
          return updated;
        });
      }

      if (!receivedData) {
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].content =
            "Вибачте, ліміти API вичерпано або помилка з'єднання.";
          return updated;
        });
      }
    } catch (error) {
      console.error('Помилка чату:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: "Помилка з'єднання. Перевірте інтернет.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed z-50 bottom-[140px] right-4 md:bottom-[160px] md:right-4
          flex flex-col bg-brand-surface-1 rounded-lg border border-brand-elements shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5
          w-[calc(100vw-1.5rem)] h-[250px]
          sm:w-[400px] sm:h-[500px]"
        >
          <div className="bg-brand-surface-2 p-4 border-b border-brand-elements flex justify-between items-center">
            <BodyText className="text-brand-white font-bold">
              Nice Gadgets AI
            </BodyText>
            <button
              onClick={() => setIsOpen(false)}
              className="text-brand-secondary hover:text-brand-white p-1"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {messages.length === 0 && (
              <BodyText className="text-brand-secondary text-center mt-auto mb-auto">
                Привіт! Я ШІ-асистент. Чим можу допомогти?
              </BodyText>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`p-3 rounded-lg max-w-[90%] sm:max-w-[85%] ${
                  m.role === 'user'
                    ? 'bg-brand-accent text-brand-white self-end rounded-br-none'
                    : 'bg-brand-surface-2 text-brand-white self-start rounded-bl-none'
                }`}
              >
                <BodyText>{m.content}</BodyText>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-brand-elements bg-brand-surface-1 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишіть повідомлення..."
              className="flex-1 bg-brand-black border border-brand-elements rounded px-3 py-2 text-brand-white focus:outline-none focus:border-brand-accent text-sm sm:text-base"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-brand-accent hover:bg-brand-accent-600 text-brand-white px-4 py-2 rounded transition-colors disabled:opacity-50"
            >
              {isLoading ? '...' : '➤'}
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 right-4 bottom-[78px] md:right-4 md:bottom-[78px] w-14 h-14 bg-brand-accent hover:bg-brand-accent-600 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-105"
      >
        {isOpen ? '✕' : '💬'}
      </button>
    </>
  );
};
