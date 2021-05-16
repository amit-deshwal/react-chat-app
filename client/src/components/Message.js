const Message = ({ message: { user, text }, name }) => {
  let isSentByUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByUser = true;
  }

  return isSentByUser ? (
    <div className="flex flex-col w-full items-end mb-2">
      <div>
        <p>{text}</p>
      </div>
      <p className="text-xs text-gray-500">{trimmedName}</p>
    </div>
  ) : (
    <div className="w-4/6">
      <div>
        <p>{text}</p>
      </div>
      <p className="text-xs text-gray-500">{user}</p>
    </div>
  );
};

export default Message;
