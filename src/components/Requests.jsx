// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addRequests, removeRequest } from "../utils/requestSlice";
// import { useEffect, useCallback } from "react";

// const Requests = () => {
//   const dispatch = useDispatch();
//   const requests = useSelector((store) => store.requests);

//   const reviewRequest = async (status, _id) => {
//     try {
//       axios.post(
//         BASE_URL + "/request/review/" + status + "/" + _id,
//         {},
//         { withCredentials: true }
//       );
//       dispatch(removeRequest(_id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchRequests = useCallback(async () => {
//     try {
//       const res = await axios.get(BASE_URL + "/user/requests/received", {
//         withCredentials: true,
//       });
//       dispatch(addRequests(res.data.data));
//     } catch (err) {
//       console.log(err);
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     fetchRequests();
//   }, [fetchRequests]);

//   if (!requests) return null;
//   if (requests.length === 0)
//     return (
//       <div className="min-h-screen flex flex-col pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-700">
//         <h1 className=" bg-black bg-opacity-50 flex justify-center text-bold text-2xl font-extrabold text-white p-4">
//           Requests Not Found !
//         </h1>
//       </div>
//     );

//   return (
//     <div className="text-center  min-h-screen flex flex-col pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
//       <h1 className="text-bold text-2xl text-white p-2 bg-black bg-opacity-40 rounded-md">
//         Connection Requests
//       </h1>
//       {requests.map((request) => {
//         const { _id, firstName, lastName, photourl, age, gender, about } =
//           request.fromUserId;
//         return (
//           <div
//             className="flex items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
//             key={_id}
//           >
//             <div>
//               <img
//                 alt="photo"
//                 className="w-20 h-20 rounded-lg"
//                 src={photourl}
//               />
//             </div>
//             <div className="text-left mx-4">
//               <h2 className="font-blod text-xl">
//                 {firstName + " " + lastName}
//               </h2>
//               {age && gender && <p>{age + ", " + gender}</p>}
//               <p>{about}</p>
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 className="btn btn-primary"
//                 onClick={() => reviewRequest("rejected", request._id)}
//               >
//                 Reject
//               </button>
//               <button
//                 className="btn btn-secondary"
//                 onClick={() => reviewRequest("accepted", request._id)}
//               >
//                 Accept
//               </button>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Requests;

// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addRequests, removeRequest } from "../utils/requestSlice";
// import { useEffect, useCallback } from "react";

// const Requests = () => {
//   const dispatch = useDispatch();
//   const requests = useSelector((store) => store.requests);

//   const reviewRequest = async (status, _id) => {
//     try {
//       await axios.post(
//         `${BASE_URL}/request/review/${status}/${_id}`,
//         {},
//         { withCredentials: true }
//       );
//       dispatch(removeRequest(_id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchRequests = useCallback(async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/user/requests/received`, {
//         withCredentials: true,
//       });
//       dispatch(addRequests(res.data.data));
//     } catch (err) {
//       console.log(err);
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     fetchRequests();
//   }, [fetchRequests]);

//   if (!requests) return null;
//   if (requests.length === 0)
//     return (
//       <div className="min-h-screen flex flex-col pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-700">
//         <h1 className=" bg-black bg-opacity-50 flex justify-center text-bold text-2xl font-extrabold text-white p-4">
//           Requests Not Found!
//         </h1>
//       </div>
//     );

//   return (
//     <div className="text-center min-h-screen flex flex-col pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
//       <h1 className="text-bold text-2xl bg-black bg-opacity-40 text-white p-4 rounded-md shadow-md">
//         Connection Requests
//       </h1>
//       <div className="flex flex-col gap-6 p-4">
//         {requests.map((request) => {
//           const { _id, firstName, lastName, photourl, age, gender, about } =
//             request.fromUserId;
//           return (
//             <div
//               className="flex flex-col lg:flex-row m-6 p-6 rounded-lg bg-gradient-to-r from-gray-500 via-gray-300 to-gray-400 shadow-lg w-11/12 lg:w-3/4 mx-auto gap-6"
//               key={_id}
//             >
//               {/* Image Section */}
//               <div className="flex-shrink-0">
//                 <img
//                   alt="profile"
//                   className="w-28 h-28 lg:w-24 lg:h-24 rounded-full border-4 border-gray-300 shadow-md object-cover"
//                   src={
//                     photourl || "https://via.placeholder.com/150?text=No+Image"
//                   }
//                 />
//               </div>

//               {/* Text Section */}
//               <div className="flex flex-col items-center lg:items-start text-left mx-4">
//                 <h2 className="font-bold text-lg lg:text-xl text-gray-800">
//                   {firstName + " " + lastName}
//                 </h2>
//                 {age && gender && (
//                   <p className="text-sm lg:text-base text-gray-600">
//                     {age + " years old, " + gender}
//                   </p>
//                 )}
//                 <p className="text-sm lg:text-base text-gray-700 my-2">
//                   {about}
//                 </p>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 self-center lg:self-start">
//                 <button
//                   className="btn bg-red-600 px-6 py-2 rounded-lg shadow-md hover:bg-primary-focus transition"
//                   onClick={() => reviewRequest("rejected", request._id)}
//                 >
//                   Reject
//                 </button>
//                 <button
//                   className="btn bg-green-600 px-6 py-2 rounded-lg shadow-md hover:bg-secondary-focus transition"
//                   onClick={() => reviewRequest("accepted", request._id)}
//                 >
//                   Accept
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Requests;

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useCallback, useState } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);
  const [loading, setLoading] = useState(false); // State for general loading
  const [actionLoading, setActionLoading] = useState(null); // State for button-specific loading

  const reviewRequest = async (status, _id) => {
    setActionLoading(_id); // Show loader for specific action
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    } finally {
      setActionLoading(null); // Hide loader after action
    }
  };

  const fetchRequests = useCallback(async () => {
    setLoading(true); // Show loading spinner
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  }, [dispatch]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-sky-500 to-gray-700">
        <span className="loading loading-spinner loading-lg text-white"></span>
      </div>
    );

  if (!requests || requests.length === 0)
    return (
      <div className="min-h-screen flex flex-col pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-700">
        <h1 className=" bg-black bg-opacity-50 flex justify-center text-bold text-2xl font-extrabold text-white p-4">
          Requests Not Found!
        </h1>
      </div>
    );

  return (
    <div className="text-center min-h-screen flex flex-col pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
      <h1 className="text-bold text-2xl bg-black bg-opacity-40 text-white p-4 rounded-md shadow-md">
        Connection Requests
      </h1>
      <div className="flex flex-col gap-6 p-4">
        {requests.map((request) => {
          const { _id, firstName, lastName, photourl, age, gender, about } =
            request.fromUserId;
          return (
            <div
              className="flex flex-col lg:flex-row m-6 p-6 rounded-lg bg-gradient-to-r from-gray-500 via-gray-300 to-gray-400 shadow-lg w-11/12 lg:w-3/4 mx-auto gap-6"
              key={_id}
            >
              {/* Image Section */}
              <div className="flex-shrink-0">
                <img
                  alt="profile"
                  className="w-28 h-28 lg:w-24 lg:h-24 rounded-full border-4 border-gray-300 shadow-md object-cover"
                  src={
                    photourl || "https://via.placeholder.com/150?text=No+Image"
                  }
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col items-center lg:items-start text-left mx-4">
                <h2 className="font-bold text-lg lg:text-xl text-gray-800">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="text-sm lg:text-base text-gray-600">
                    {age + " years old, " + gender}
                  </p>
                )}
                <p className="text-sm lg:text-base text-gray-700 my-2">
                  {about}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0 self-center lg:self-start">
                <button
                  className={`btn bg-red-600 px-6 py-2 rounded-lg shadow-md hover:bg-primary-focus transition ${
                    actionLoading === request._id ? "loading" : ""
                  }`}
                  onClick={() => reviewRequest("rejected", request._id)}
                  disabled={actionLoading === request._id} // Disable button when loading
                >
                  {actionLoading === request._id ? "" : "Reject"}
                </button>
                <button
                  className={`btn bg-green-600 px-6 py-2 rounded-lg shadow-md hover:bg-secondary-focus transition ${
                    actionLoading === request._id ? "loading" : ""
                  }`}
                  onClick={() => reviewRequest("accepted", request._id)}
                  disabled={actionLoading === request._id} // Disable button when loading
                >
                  {actionLoading === request._id ? "" : "Accept"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
