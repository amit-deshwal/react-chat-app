const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router");
const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  try {
    socket.on("join", ({ name, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, name, room });

      if (error) return callback(error);

      socket.emit("message", {
        user: "admin",
        text: `${user.name.charAt(0).toUpperCase() + user.name.slice(1)}, welcome to room ${user.room}`,
      });

      socket.broadcast.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name.charAt(0).toUpperCase() + user.name.slice(1)} has entered the chat...`,
      });

      socket.emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
        callback,
      });

      socket.join(user.room);
      callback();
    });

    socket.on("sendMessage", (message, callback) => {
      const user = getUser(socket.id);
      io.to(user.room).emit("message", { user: user.name, text: message });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
      callback();
    });

    socket.on("disconnect", () => {
      const user = removeUser(socket.id);
      if (user) {
        io.to(user.room).emit("message", {
          user: "admin",
          text: `${user.name.charAt(0).toUpperCase() + user.name.slice(1)} left...`,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

const PORT = process.env.PORT || 8000;

app.use(router);
server.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}`);
});
