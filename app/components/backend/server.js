const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// Simulated drone data
setInterval(() => {
  const data = {
  speed: Math.floor(Math.random() * 60),
  altitude: Math.floor(Math.random() * 500),
  battery: Math.floor(Math.random() * 100),
  temperature: Math.floor(Math.random() * 40),

  lat: 26.9124 + Math.random() * 0.01,  // Jaipur approx
  lng: 75.7873 + Math.random() * 0.01,
};

  io.emit("droneData", data);
}, 1000);

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});