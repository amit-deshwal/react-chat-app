const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="w-full absolute bottom-0 p-2">
      <form action="">
        <input
          placeholder="Type your text here"
          type="text"
          value={message}
          className="w-9/12 sm:w-10/12 px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:ring focus:border-indigo-800"
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
        <button className="w-max ml-2 px-4 md:ml-2 md:px-6 py-2 rounded-lg bg-indigo-600 text-white" onClick={(event)=> sendMessage(event)}>Send</button>
      </form>
    </div>
  );
};

export default Input;