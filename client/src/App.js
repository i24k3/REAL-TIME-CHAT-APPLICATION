import React, { useState } from 'react';
import Chat from './components/Chat';

const App = () => {
    const [room, setRoom] = useState('');
    const [username, setUsername] = useState('');
    const [joined, setJoined] = useState(false);

    return (
        <div>
            {!joined ? (
                <div>
                    <h1>Join a Chat Room</h1>
                    <input
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter room name"
                        onChange={(e) => setRoom(e.target.value)}
                    />
                    <button onClick={() => setJoined(true)}>Join</button>
                </div>
            ) : (
                <Chat room={room} username={username} />
            )}
        </div>
    );
};

export default App;
