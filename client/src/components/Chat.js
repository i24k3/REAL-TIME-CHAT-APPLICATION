import React, { useState, useEffect } from 'react';
import { socket } from '../socket';

const Chat = ({ room, username }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [typingUsers, setTypingUsers] = useState([]);

    useEffect(() => {
        socket.emit('joinRoom', room);

        socket.on('receiveMessage', (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        socket.on('userTyping', (users) => {
            setTypingUsers(users);
        });

        return () => {
            socket.off('receiveMessage');
            socket.off('userTyping');
        };
    }, [room]);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('sendMessage', { room, message: { username, text: message } });
            setMessage('');
        }
    };

    const handleTyping = (isTyping) => {
        socket.emit('typing', { room, username, isTyping });
    };

    return (
        <div>
            <h2>Room: {room}</h2>
            <div>
                {messages.map((msg, index) => (
                    <p key={index}><strong>{msg.username}:</strong> {msg.text}</p>
                ))}
                {typingUsers.length > 0 && <p>{typingUsers.join(', ')} is typing...</p>}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => handleTyping(true)}
                onBlur={() => handleTyping(false)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chat;
