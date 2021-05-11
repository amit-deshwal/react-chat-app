import { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const URL = "localhost:8000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(URL);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      
      socket.off();
    };
  }, [URL, location.search]);
  return <h2>hi</h2>;
};

export default Chat;
