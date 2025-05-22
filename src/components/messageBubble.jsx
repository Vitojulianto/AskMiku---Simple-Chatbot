const MessageBubble = ({ sender, text }) => {
  const isUser = sender === 'user';

  return (
    <div className={`flex items-end mb-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Miku's avatar on left */}
      {!isUser && (
        <img
          src="/miku.png"
          alt="Miku"
          className="w-10 h-10 rounded-full mr-3 shadow-lg"
        />
      )}

      <div
        className={`p-4 max-w-xs rounded-2xl shadow-lg break-words text-lg ${
          isUser
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-900 rounded-bl-none'
        }`}
        style={{ fontFamily: "'Comic Neue', cursive" }}
      >
        {text}
      </div>

      {/* User's avatar on right */}
      {isUser && (
        <img
          src="/vit.jpg"
          alt="You"
          className="w-10 h-10 rounded-full ml-3 shadow-md"
        />
      )}
    </div>
  );
};

export default MessageBubble;
