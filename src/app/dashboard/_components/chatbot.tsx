'use client';

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';

export function ChatBot() {
  const [messages, setMessages] = useState<
    Array<{ text: string; isUser: boolean }>
  >([
    {
      text: "Hello, I'm KNAI Analyst, your virtual helper. I'm here to assist you with all your data-related questions, help generate SQL queries, and provide insights from your data. Feel free to ask me anything, and I'll do my best to guide you!",
      isUser: false,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    setMessages(prev => [...prev, { text: inputText, isUser: true }]);
    setInputText('');

    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://knai-backend.1s8eitm7mefn.us-east.codeengine.appdomain.cloud/natural_query',
        { query: inputText, conversation }
      );
      console.log(inputText);
      setMessages(prev => [
        ...prev,
        { text: response.data.response.final_answer, isUser: false },
      ]);
      setConversation(response.data.response.conversation_id);
      console.log(conversation);
      console.log(response);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [
        ...prev,
        {
          text: 'Error processing your message. Please try again.',
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Área do chat (rolável) */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 py-20">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-lg flex items-start gap-2 ${
                msg.isUser ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              <span>{msg.text}</span>
            </div>
          </div>
        ))}

        <div ref={messagesEndRef} />
        {isLoading && (
          <div className="flex space-x-2 justify-start items-center">
            <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 bg-black rounded-full animate-bounce"></div>
          </div>
        )}
      </div>

      <div className="sticky bottom-0 p-4 border-t border-gray-200 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 p-2 border border-gray-300 rounded-lg"
            placeholder="Write your message..."
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 disabled:bg-gray-400"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
