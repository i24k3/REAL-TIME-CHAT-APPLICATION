---
COMPANY NAME : CODETECH IT SOLUTIONS
NAME : ARSALAN KHAN
INTERN ID : CT08IXO
DOMAIN NAME : REACT
BATCH DURATION : JANUARY 5th, 2025 to FEBRUARY 5th, 2025
MENTOR NAME : NEELA SANTHOSH
---

TASK DESCRIPTION : This task involved creating a real-time chat application using React and Socket.IO, with features such as group chat and typing indicators. The application enables users to send and receive messages in real time, allowing them to participate in group conversations and see when others are typing.

I used React for building the user interface and Socket.IO to establish a WebSocket connection for real-time communication between clients. The app allows users to join different chat rooms (group chats), send messages, and see new messages appear in real time without needing to refresh the page.

In addition to the basic messaging functionality, I implemented typing indicators to notify users when someone is typing a message. This was achieved by emitting events from the client to the server using Socket.IO and updating the UI accordingly, so users can see the indicator when another participant is typing.

To manage the state of the app, I used React’s `useState` and `useEffect` hooks. The `useState` hook tracks the current message input, list of messages, and typing status. The `useEffect` hook is used to manage the socket connection and listen for incoming events, ensuring that the app responds to messages and typing updates in real time.

The UI is designed to be user-friendly, with a clean chat window displaying messages and input fields for sending messages. I made sure the app is responsive, adapting its layout to work well on mobile and desktop screens. The chat window updates dynamically, displaying messages as soon as they are sent and showing typing indicators when others are typing.

One of the challenges I faced was managing the real-time interaction between multiple clients, ensuring that each user sees messages and typing updates without delays. By using Socket.IO’s event-based communication model, I was able to synchronize messages and typing events efficiently.

The application also supports group chat, allowing multiple users to join a room and chat together. The chat rooms can be dynamically created, and users can leave or switch between rooms during a conversation. This adds a layer of flexibility to the app, making it suitable for various use cases.

Through this project, I gained valuable experience in building real-time applications with React and Socket.IO, working with event-driven communication, and implementing interactive features like typing indicators and group chats. It was a great way to deepen my understanding of full-stack real-time applications and WebSocket-based communication.

