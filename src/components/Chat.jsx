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

//   const clearMessages = async () => {
//     try {
//       await axios.delete(BASE_URL + `/chat/${targetUserId}`, {
//         withCredentials: true,
//       });
//       setMessages([]);
//     } catch (error) {
//       console.error("Error clearing messages:", error);
//     }
//   };

//   // return (
//   //   <div className="w-1/2 mx-auto border-black bg-[url(https://img.freepik.com/free-vector/dialogue-chat-clouds-speech-bubble-icon-from-lines-triangles-particle-style-design-low-poly-technology-devices-people-communication-concept-blue-background_587448-471.jpg?semt=ais_hybrid)] bg-cover m-5 h-[70vh] flex flex-col">
//   //     <h1 className="p-5 border-b border-black text-white text-2xl">Chat</h1>
//   //     <div className="flex-grow overflow-y-auto">
//   //       {messages.map((msg, index) => (
//   //         <div
//   //           key={index}
//   //           className={
//   //             "chat " +
//   //             (user.firstName === msg.firstName ? "chat-end" : "chat-start")
//   //           }
//   //         >
//   //           <div className="chat-image avatar">
//   //             <div className="w-10 rounded-full">
//   //               <img
//   //                 alt="user Photo"
//   //                 src={
//   //                   msg.photourl ||
//   //                   "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//   //                 }
//   //               />
//   //             </div>
//   //           </div>
//   //           <div className="chat-header">
//   //             {msg.firstName && msg.lastName
//   //               ? `${msg.firstName} ${msg.lastName}`
//   //               : "User"}
//   //           </div>
//   //           <div className="chat-bubble bg-sky-300 text-black">{msg.text}</div>
//   //         </div>
//   //       ))}
//   //       <div ref={messagesEndRef} />
//   //     </div>
//   //     <form
//   //       className="p-5 border border-gray-600 flex items-center gap-2"
//   //       onSubmit={sendMessage}
//   //     >
//   //       <input
//   //         value={newMessage}
//   //         onChange={(e) => setNewMessage(e.target.value)}
//   //         className="flex-1 border-gray-500 text-white rounded p-2"
//   //       />
//   //       <button type="submit" className="btn btn-primary">
//   //         Send
//   //       </button>
//   //       <button
//   //         type="button"
//   //         onClick={clearMessages}
//   //         className="btn btn-secondary"
//   //       >
//   //         Clear
//   //       </button>
//   //     </form>
//   //   </div>
//   // );
//   return (
//     <div className="sm:w-full lg:w-1/2 mx-auto border-black bg-[url(https://img.freepik.com/free-vector/dialogue-chat-clouds-speech-bubble-icon-from-lines-triangles-particle-style-design-low-poly-technology-devices-people-communication-concept-blue-background_587448-471.jpg?semt=ais_hybrid)] bg-cover bg-opacity-75 mt-5 mb-20 h-[70vh] flex flex-col rounded-lg shadow-lg">
//       <h1 className="p-5 border-b border-gray-700 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-t-lg">
//         Chat
//       </h1>
//       <div className="flex-grow overflow-y-auto p-4 bg-black bg-opacity-40 rounded-b-lg">
//         {messages.length === 0 ? (
//           <div className="flex justify-center items-center h-full text-gray-300">
//             No messages yet. Start the conversation!
//           </div>
//         ) : (
//           messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`chat ${
//                 user.firstName === msg.firstName ? "chat-end" : "chat-start"
//               } my-2`}
//             >
//               <div className="chat-image avatar">
//                 <div className="w-12 rounded-full border-2 border-gray-400">
//                   <img
//                     alt="user Photo"
//                     src={
//                       msg.photourl ||
//                       "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="chat-header text-gray-200 text-sm font-medium">
//                 {msg.firstName && msg.lastName
//                   ? `${msg.firstName} ${msg.lastName}`
//                   : "User"}
//                 <span className="text-gray-400 text-xs ml-2">
//                   {new Date().toLocaleTimeString()}
//                 </span>
//               </div>
//               <div
//                 className={`chat-bubble ${
//                   user.firstName === msg.firstName
//                     ? "bg-blue-500 text-white"
//                     : "bg-gray-300 text-black"
//                 } shadow-md`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))
//         )}
//         <div ref={messagesEndRef} />
//       </div>
//       <form
//         className="p-5 border-t border-gray-700 bg-black bg-opacity-50 flex items-center gap-2 rounded-b-lg"
//         onSubmit={sendMessage}
//       >
//         <input
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           className="flex-1 rounded-lg border border-gray-600 bg-gray-800 text-white p-2"
//           placeholder="Type your message..."
//         />
//         <button
//           type="submit"
//           className="btn btn-primary rounded-lg shadow-md hover:bg-blue-700"
//         >
//           Send
//         </button>
//         <button
//           type="button"
//           onClick={clearMessages}
//           className="btn btn-secondary rounded-lg shadow-md hover:bg-gray-500"
//         >
//           Clear
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chat;

import { useEffect, useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../utils/socket";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { toast } from "react-toastify";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const socket = useRef(null);
  const messagesEndRef = useRef(null);

  const fetchChatMessages = useCallback(async () => {
    try {
      setLoading(true);
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
    } catch (error) {
      console.error("Error fetching chat messages:", error);
    } finally {
      setLoading(false);
    }
  }, [targetUserId]);

  useEffect(() => {
    fetchChatMessages();
  }, [fetchChatMessages]);

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
      toast.success("Messages deleted successfully");
    } catch (error) {
      toast.success("Messages deleted successfully");
      console.error("Error clearing messages:", error);
    }
  };

  return (
    <div className="sm:w-full lg:w-1/2 mx-auto border-black bg-[url(https://img.freepik.com/free-vector/dialogue-chat-clouds-speech-bubble-icon-from-lines-triangles-particle-style-design-low-poly-technology-devices-people-communication-concept-blue-background_587448-471.jpg?semt=ais_hybrid)] bg-cover bg-opacity-75 mt-5 mb-20 h-[70vh] flex flex-col rounded-lg shadow-lg">
      <h1 className="p-5 border-b border-gray-700 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-t-lg">
        Chat
      </h1>
      <div className="flex-grow overflow-y-auto p-4 bg-black bg-opacity-40 rounded-b-lg">
        {loading ? (
          <div className="flex justify-center items-center h-full text-gray-300">
            Loading chat...
          </div>
        ) : messages.length === 0 ? (
          <div className="flex justify-center items-center h-full text-gray-300">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`chat ${
                user.firstName === msg.firstName ? "chat-end" : "chat-start"
              } my-2`}
            >
              <div className="chat-image avatar">
                <div className="w-12 rounded-full border-2 border-gray-400">
                  <img
                    alt="user Photo"
                    src={
                      msg.photourl ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <div className="chat-header text-gray-200 text-sm font-medium">
                {msg.firstName && msg.lastName
                  ? `${msg.firstName} ${msg.lastName}`
                  : "User"}
                {/* <span className="text-gray-400 text-xs ml-2">
                  {new Date().toLocaleTimeString()}
                </span> */}
              </div>
              <div
                className={`chat-bubble ${
                  user.firstName === msg.firstName
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                } shadow-md`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="p-5 border-t border-gray-700 bg-black bg-opacity-50 flex items-center gap-2 rounded-b-lg"
        onSubmit={sendMessage}
      >
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 rounded-lg border border-gray-600 bg-gray-800 text-white p-2"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="btn btn-primary rounded-lg shadow-md hover:bg-blue-700"
        >
          Send
        </button>
        <button
          type="button"
          onClick={clearMessages}
          className="btn btn-secondary rounded-lg shadow-md hover:bg-gray-500"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default Chat;
