import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

const Messages = ({ messages, name }) => {
  return (
      <ScrollToBottom className="h-4/5 relative z-10">
        {messages.map((message, i) => (
          <div key={i} className="mx-4 relative leading-tight my-2">
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
  );
};

export default Messages;
