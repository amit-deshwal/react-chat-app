const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("We have a new connection");

  socket.on("join", ({ name, room }, callback) => {
    console.log(name, room);
  });

  socket.on("disconnect", () => {
    console.log("User had left!!!");
  });
});

const PORT = process.env.PORT || 8000;

app.use(router);
server.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}`);
});
