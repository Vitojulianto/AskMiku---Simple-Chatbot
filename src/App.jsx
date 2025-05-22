import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import mikuResponse from './data/mikuResponse';

function App() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (userInput) => {
    const userMessage = { sender: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);

    // Normalisasi input: trim + lowercase
    const key = userInput.trim().toLowerCase();
    const botReply = mikuResponse[key] 
      || "Ehehe~ Miku doesn't understand. Can you try with another word? 💭";

    const mikuMessage = { sender: 'miku', text: botReply };

    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, mikuMessage]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-extrabold text-white drop-shadow-lg mb-6 tracking-wide select-none">
        AskMiku 💬
      </h1>
      <ChatWindow messages={messages} isTyping={isTyping} />
      <ChatInput onSend={handleSendMessage} />
      <footer className="mt-6 text-sm text-white/80 select-none">Made with 💙 by You & Miku</footer>
    </div>
  );
}

export default App;
