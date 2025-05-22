import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

const ChatWindow = ({ messages, isTyping }) => {
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div
      ref={chatRef}
      className="w-full max-w-md h-[480px] overflow-y-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 mb-6 border border-cyan-300"
    >
      {messages.map((msg, index) => (
        <MessageBubble key={index} sender={msg.sender} text={msg.text} />
      ))}

      {isTyping && (
        <div className="flex items-center space-x-3 mt-4 animate-pulse">
          <img
            src="/miku.png"
            alt="Miku"
            className="w-8 h-8 rounded-full shadow-md"
          />
          <span className="text-cyan-600 font-medium italic text-lg">Miku is typing...</span>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
