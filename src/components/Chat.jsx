// // import { useEffect, useState, useRef } from "react";
// // import { useSelector } from "react-redux";
// // import { useParams } from "react-router-dom";
// // import { createSocketConnection } from "../utils/socket";
// // import axios from "axios";
// // import { BASE_URL } from "../utils/constants";

// // const Chat = () => {
// //   const { targetUserId } = useParams();
// //   const [messages, setMessages] = useState([]);
// //   const [newMessage, setNewMessage] = useState("");
// //   const user = useSelector((store) => store.user);
// //   const userId = user?._id;
// //   const socket = useRef(null);

// //   const fetchChatMessages = async () => {
// //     const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
// //       withCredentials: true,
// //     });
// //     console.log(chat.data.messages);

// //     const chatMessages = chat?.data?.messages.map((msg) => {
// //       const { senderId, text } = msg;
// //       return {
// //         firstName: senderId?.firstName,
// //         lastName: senderId?.lastName,
// //         photourl: senderId?.photourl,
// //         text,
// //       };
// //     });
// //     setMessages(chatMessages);
// //   };
// //   useEffect(() => {
// //     fetchChatMessages();
// //   }, []);

// //   useEffect(() => {
// //     if (!userId) {
// //       return;
// //     }
// //     socket.current = createSocketConnection();
// //     if (socket.current) {
// //       socket.current.emit("joinChat", {
// //         firstName: user.firstName,
// //         photourl: user.photourl,
// //         userId,
// //         targetUserId,
// //       });

// //       socket.current.on(
// //         "messageReceived",
// //         ({ firstName, lastName, text, photourl }) => {
// //           console.log(firstName + " " + text);
// //           setMessages((messages) => [
// //             ...messages,
// //             { firstName, lastName, text, photourl },
// //           ]);
// //         }
// //       );
// //     }

// //     return () => {
// //       if (socket.current) {
// //         socket.current.disconnect();
// //       }
// //     };
// //   }, [userId, targetUserId, user]);

// //   const sendMessage = (e) => {
// //     e.preventDefault();
// //     if (newMessage.trim() === "" || !socket.current) return;
// //     socket.current.emit("sendMessage", {
// //       firstName: user.firstName,
// //       lastName: user.lastName,
// //       photourl: user.photourl,
// //       userId,
// //       targetUserId,
// //       text: newMessage,
// //     });
// //     setNewMessage("");
// //   };

// //   return (
// //     <div className="w-1/2 mx-auto border-gray-600 bg-base-200 m-5 h-[70vh] flex flex-col">
// //       <h1 className="p-5 border-b border-gray-600 bg-base-300">Chat</h1>
// //       <div className="flex-grow overflow-y-auto">
// //         {messages.map((msg, index) => (
// //           <div
// //             key={index}
// //             className={
// //               "chat " +
// //               (user.firstName === msg.firstName ? "chat-end" : "chat-start")
// //             }
// //           >
// //             <div className="chat-image avatar">
// //               <div className="w-10 rounded-full">
// //                 <img
// //                   alt="user Photo"
// //                   src={
// //                     msg.photourl ||
// //                     "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
// //                   }
// //                 />
// //               </div>
// //             </div>
// //             <div className="chat-header">
// //               {msg.firstName && msg.lastName
// //                 ? `${msg.firstName} ${msg.lastName}`
// //                 : "User"}
// //             </div>
// //             <div className="chat-bubble">{msg.text}</div>
// //           </div>
// //         ))}
// //       </div>
// //       <form
// //         className="p-5 border border-gray-600 flex items-center gap-2"
// //         onSubmit={sendMessage}
// //       >
// //         <input
// //           value={newMessage}
// //           onChange={(e) => setNewMessage(e.target.value)}
// //           className="flex-1 border-gray-500 text-white rounded p-2"
// //         />
// //         <button type="submit" className="btn btn-primary">
// //           Send
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Chat;

// import { useEffect, useState, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { createSocketConnection } from "../utils/socket";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";

// const Chat = () => {
//   const { targetUserId } = useParams();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const user = useSelector((store) => store.user);
//   const userId = user?._id;
//   const socket = useRef(null);
//   const messagesEndRef = useRef(null); // Add this line

//   const fetchChatMessages = async () => {
//     const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
//       withCredentials: true,
//     });
//     console.log(chat.data.messages);

//     const chatMessages = chat?.data?.messages.map((msg) => {
//       const { senderId, text } = msg;
//       return {
//         firstName: senderId?.firstName,
//         lastName: senderId?.lastName,
//         photourl: senderId?.photourl,
//         text,
//       };
//     });
//     setMessages(chatMessages);
//   };

//   useEffect(() => {
//     fetchChatMessages();
//   }, []);

//   useEffect(() => {
//     if (!userId) {
//       return;
//     }
//     socket.current = createSocketConnection();
//     if (socket.current) {
//       socket.current.emit("joinChat", {
//         firstName: user.firstName,
//         photourl: user.photourl,
//         userId,
//         targetUserId,
//       });

//       socket.current.on(
//         "messageReceived",
//         ({ firstName, lastName, text, photourl }) => {
//           console.log(firstName + " " + text);
//           setMessages((messages) => [
//             ...messages,
//             { firstName, lastName, text, photourl },
//           ]);
//         }
//       );
//     }

//     return () => {
//       if (socket.current) {
//         socket.current.disconnect();
//       }
//     };
//   }, [userId, targetUserId, user]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (newMessage.trim() === "" || !socket.current) return;
//     socket.current.emit("sendMessage", {
//       firstName: user.firstName,
//       lastName: user.lastName,
//       photourl: user.photourl,
//       userId,
//       targetUserId,
//       text: newMessage,
//     });
//     setNewMessage("");
//   };

//   return (
//     <div className="w-1/2 mx-auto border-gray-600 bg-base-200 m-5 h-[70vh] flex flex-col">
//       <h1 className="p-5 border-b border-gray-600 bg-base-300">Chat</h1>
//       <div className="flex-grow overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={
//               "chat " +
//               (user.firstName === msg.firstName ? "chat-end" : "chat-start")
//             }
//           >
//             <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="user Photo"
//                   src={
//                     msg.photourl ||
//                     "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                   }
//                 />
//               </div>
//             </div>
//             <div className="chat-header">
//               {msg.firstName && msg.lastName
//                 ? `${msg.firstName} ${msg.lastName}`
//                 : "User"}
//             </div>
//             <div className="chat-bubble">{msg.text}</div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} /> {/* Add this line */}
//       </div>
//       <form
//         className="p-5 border border-gray-600 flex items-center gap-2"
//         onSubmit={sendMessage}
//       >
//         <input
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="flex-1 border-gray-500 text-white rounded p-2"
//         />
//         <button type="submit" className="btn btn-primary">
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chat;

// import { useEffect, useState, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { createSocketConnection } from "../utils/socket";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";

// const Chat = () => {
//   const { targetUserId } = useParams();
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState("");
//   const user = useSelector((store) => store.user);
//   const userId = user?._id;
//   const socket = useRef(null);
//   const messagesEndRef = useRef(null);

//   const fetchChatMessages = async () => {
//     const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
//       withCredentials: true,
//     });
//     const chatMessages = chat?.data?.messages.map((msg) => {
//       const { senderId, text } = msg;
//       return {
//         firstName: senderId?.firstName,
//         lastName: senderId?.lastName,
//         photourl: senderId?.photourl,
//         text,
//       };
//     });
//     setMessages(chatMessages);
//   };

//   useEffect(() => {
//     fetchChatMessages();
//   }, []);

//   useEffect(() => {
//     if (!userId) {
//       return;
//     }
//     socket.current = createSocketConnection();
//     if (socket.current) {
//       socket.current.emit("joinChat", {
//         firstName: user.firstName,
//         photourl: user.photourl,
//         userId,
//         targetUserId,
//       });

//       socket.current.on(
//         "messageReceived",
//         ({ firstName, lastName, text, photourl }) => {
//           setMessages((messages) => [
//             ...messages,
//             { firstName, lastName, text, photourl },
//           ]);
//         }
//       );
//     }

//     return () => {
//       if (socket.current) {
//         socket.current.disconnect();
//       }
//     };
//   }, [userId, targetUserId, user]);

//   useEffect(() => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   const sendMessage = (e) => {
//     e.preventDefault();
//     if (newMessage.trim() === "" || !socket.current) return;
//     socket.current.emit("sendMessage", {
//       firstName: user.firstName,
//       lastName: user.lastName,
//       photourl: user.photourl,
//       userId,
//       targetUserId,
//       text: newMessage,
//     });
//     setNewMessage("");
//   };

//   const clearMessages = () => {
//     setMessages([]);
//   };

//   return (
//     <div className="w-1/2 mx-auto border-gray-600 bg-base-200 m-5 h-[70vh] flex flex-col">
//       <h1 className="p-5 border-b border-gray-600 bg-base-300">Chat</h1>
//       <div className="flex-grow overflow-y-auto">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={
//               "chat " +
//               (user.firstName === msg.firstName ? "chat-end" : "chat-start")
//             }
//           >
//             <div className="chat-image avatar">
//               <div className="w-10 rounded-full">
//                 <img
//                   alt="user Photo"
//                   src={
//                     msg.photourl ||
//                     "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                   }
//                 />
//               </div>
//             </div>
//             <div className="chat-header">
//               {msg.firstName && msg.lastName
//                 ? `${msg.firstName} ${msg.lastName}`
//                 : "User"}
//             </div>
//             <div className="chat-bubble">{msg.text}</div>
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>
//       <form
//         className="p-5 border border-gray-600 flex items-center gap-2"
//         onSubmit={sendMessage}
//       >
//         <input
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="flex-1 border-gray-500 text-white rounded p-2"
//         />
//         <button type="submit" className="btn btn-primary">
//           Send
//         </button>
//         <button
//           type="button"
//           onClick={clearMessages}
//           className="btn btn-secondary"
//         >
//           Clear
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chat;

import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const socket = useRef(null);
  const messagesEndRef = useRef(null);

  const fetchChatMessages = async () => {
    const chat = await axios.get(BASE_URL + "/chat/" + targetUserId, {
      withCredentials: true,
    });
    const chatMessages = chat?.data?.messages.map((msg) => {
      const { senderId, text } = msg;
      return {
        firstName: senderId?.firstName,
        lastName: senderId?.lastName,
        photourl: senderId?.photourl,
        text,
      };
    });
    setMessages(chatMessages);
  };

  useEffect(() => {
    fetchChatMessages();
  }, []);

  useEffect(() => {
    if (!userId) {
      return;
    }
    socket.current = createSocketConnection();
    if (socket.current) {
      socket.current.emit("joinChat", {
        firstName: user.firstName,
        photourl: user.photourl,
        userId,
        targetUserId,
      });

      socket.current.on(
        "messageReceived",
        ({ firstName, lastName, text, photourl }) => {
          setMessages((messages) => [
            ...messages,
            { firstName, lastName, text, photourl },
          ]);
        }
      );
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
      }
    };
  }, [userId, targetUserId, user]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "" || !socket.current) return;
    socket.current.emit("sendMessage", {
      firstName: user.firstName,
      lastName: user.lastName,
      photourl: user.photourl,
      userId,
      targetUserId,
      text: newMessage,
    });
    setNewMessage("");
  };

  const clearMessages = async () => {
    try {
      await axios.delete(BASE_URL + `/chat/${targetUserId}`, {
        withCredentials: true,
      });
      setMessages([]);
    } catch (error) {
      console.error("Error clearing messages:", error);
    }
  };

  return (
    <div className="w-1/2 mx-auto border-gray-600 bg-base-200 m-5 h-[70vh] flex flex-col">
      <h1 className="p-5 border-b border-gray-600 bg-base-300">Chat</h1>
      <div className="flex-grow overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              "chat " +
              (user.firstName === msg.firstName ? "chat-end" : "chat-start")
            }
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user Photo"
                  src={
                    msg.photourl ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>
            <div className="chat-header">
              {msg.firstName && msg.lastName
                ? `${msg.firstName} ${msg.lastName}`
                : "User"}
            </div>
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="p-5 border border-gray-600 flex items-center gap-2"
        onSubmit={sendMessage}
      >
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border-gray-500 text-white rounded p-2"
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
        <button
          type="button"
          onClick={clearMessages}
          className="btn btn-secondary"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Chat;
