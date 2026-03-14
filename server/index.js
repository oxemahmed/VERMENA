const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
  console.log('New player connected:', socket.id);
  socket.on('join-game', ({ playerName }) => {
    // منطق الانضمام
  });
  socket.on('play-card', ({ gameId, card }) => {
    // منطق لعب الكارت
  });
});

server.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
