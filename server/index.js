const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

let usersTyping = {};

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`User ${socket.id} joined room ${room}`);
    });

    socket.on('sendMessage', ({ room, message }) => {
        io.to(room).emit('receiveMessage', message);
    });

    socket.on('typing', ({ room, username, isTyping }) => {
        if (isTyping) {
            usersTyping[socket.id] = username;
        } else {
            delete usersTyping[socket.id];
        }
        io.to(room).emit('userTyping', Object.values(usersTyping));
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
        delete usersTyping[socket.id];
    });
});

server.listen(5000, () => {
    console.log('Server running on port 5000');
});
