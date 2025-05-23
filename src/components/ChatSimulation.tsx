
import React, { useEffect, useState } from 'react';
import { User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'soko' | 'user';
  avatar?: string;
}

const ChatSimulation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatSequence: Message[] = [
    {
      id: 1,
      text: "Hola Ana, hoy es día de Mercado. ¿Quieres agregar algo más de lo habitual?",
      sender: 'soko'
    },
    {
      id: 2,
      text: "Genial, me encanta. Quiero pasta sin gluten",
      sender: 'user'
    },
    {
      id: 3,
      text: "Perfecto! He encontrado pasta sin gluten orgánica con 20% de descuento. ¿Te parece bien?",
      sender: 'soko'
    }
  ];

  useEffect(() => {
    const typeMessage = async (message: Message, delay: number) => {
      await new Promise(resolve => setTimeout(resolve, delay));
      
      setIsTyping(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsTyping(false);

      const text = message.text;
      setCurrentMessage('');
      
      for (let i = 0; i <= text.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setCurrentMessage(text.slice(0, i));
      }

      setMessages(prev => [...prev, { ...message, text }]);
      setCurrentMessage('');
    };

    const runSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      for (let i = 0; i < chatSequence.length; i++) {
        await typeMessage(chatSequence[i], i === 0 ? 0 : 2000);
      }
    };

    runSequence();
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200 hover-lift">
        {/* Chat Header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent-interactive rounded-full flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-brand-primary">SOKO</h3>
              <p className="text-xs text-green-500">En línea</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-3 min-h-[200px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`chat-bubble ${
                message.sender === 'soko' ? 'chat-bubble-soko' : 'chat-bubble-user'
              }`}>
                {message.text}
              </div>
            </div>
          ))}
          
          {/* Current typing message */}
          {currentMessage && (
            <div className="flex justify-start">
              <div className="chat-bubble chat-bubble-soko">
                {currentMessage}
                <span className="animate-pulse">|</span>
              </div>
            </div>
          )}

          {/* Typing indicator */}
          {isTyping && !currentMessage && (
            <div className="flex justify-start">
              <div className="chat-bubble chat-bubble-soko">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
              <p className="text-sm text-gray-500">Escribe un mensaje...</p>
            </div>
            <button className="w-8 h-8 bg-accent-interactive rounded-full flex items-center justify-center">
              <span className="text-white text-sm">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulation;
