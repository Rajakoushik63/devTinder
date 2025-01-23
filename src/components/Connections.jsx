// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useEffect, useCallback, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addConnections } from "../utils/connectionSlice";
// import { Link } from "react-router-dom";

// const Connections = () => {
//   const connections = useSelector((store) => store.connections);
//   const dispatch = useDispatch();
//   const [error, setError] = useState("");

//   const fetchConnections = useCallback(async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/user/connections", {
//         withCredentials: true,
//       });
//       //   console.log(res.data.data);
//       dispatch(addConnections(res.data.data));
//     } catch (err) {
//       let errorMessage = err.response.data;
//       setError(errorMessage);
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     fetchConnections();
//   }, [fetchConnections]);

//   if (!connections) return null;
//   if (connections.length === 0)
//     return (
//       <h1 className="flex justify-center text-bold text-2xl font-medium text-white">
//         Connections Not Found
//       </h1>
//     );

//   return (
//     <div className="text-center my-10 pb-20">
//       <h1 className="text-bold text-2xl p-2 bg-slate-500 rounded-md">
//         Connections
//       </h1>
//       {error && <p className="text-red-500">{error}</p>}
//       {connections.map((connection) => {
//         const { _id, firstName, lastName, photourl, age, gender, about } =
//           connection;
//         return (
//           <div
//             className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto justify-between items-center"
//             key={_id}
//           >
//             <div className="flex items-center">
//               <img
//                 alt="photo"
//                 className="w-20 h-20 rounded-lg"
//                 src={photourl}
//               />
//               <div className="text-left mx-4">
//                 <h2 className="font-blod text-xl">
//                   {firstName + " " + lastName}
//                 </h2>
//                 {age && gender && <p>{age + ", " + gender}</p>}
//                 <p>{about}</p>
//               </div>
//             </div>
//             <Link to={"/chat/" + _id}>
//               <button className="btn btn-primary">Chat</button>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Connections;

import axios from "axios";
import { BASE_URL } from "../utils/constants"; // Import the background image URL from constants
import { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const fetchConnections = useCallback(async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      let errorMessage = err.response.data;
      setError(errorMessage);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchConnections();
  }, [fetchConnections]);

  if (!connections) return null;
  if (connections.length === 0)
    return (
      <h1 className="flex justify-center text-bold text-2xl font-medium text-white">
        Connections Not Found
      </h1>
    );

  return (
    <div className={`text-center pb-20`}>
      <h1 className="text-bold text-2xl text-white p-2 rounded-md">
        Connections
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      {connections.map((connection) => {
        const { _id, firstName, lastName, photourl, age, gender, about } =
          connection;
        return (
          <div
            className="flex m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto justify-between items-center"
            key={_id}
          >
            <div className="flex items-center">
              <img
                alt="photo"
                className="w-20 h-20 rounded-lg"
                src={photourl}
              />
              <div className="text-left mx-4">
                <h2 className="font-bold text-xl">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
              </div>
            </div>
            <Link to={`/chat/${_id}`}>
              <button className="btn btn-primary">Chat</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
