import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    onSend(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex items-center space-x-3">
      <input
        type="text"
        placeholder="Ask Miku here..."
        className="flex-grow rounded-full px-4 py-2 text-lg border-2 border-cyan-400 focus:border-cyan-600 outline-none shadow-md transition"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-5 py-2 font-semibold shadow-lg transition"
      >
        Send
      </button>
    </form>
  );
};

export default ChatInput;
