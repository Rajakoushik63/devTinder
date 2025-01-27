// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addFeed } from "../utils/feedslice";
// import { useEffect } from "react";
// import UserCard from "./UserCard";

// const Feed = () => {
//   const feed = useSelector((store) => store.feed);
//   const dispatch = useDispatch();

//   const getFeed = async () => {
//     if (feed) return;
//     try {
//       const res = await axios.get(BASE_URL + "/feed", {
//         withCredentials: true,
//       });
//       dispatch(addFeed(res?.data?.data));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     getFeed();
//   }, []);
//   if (!feed) return;

//   if (feed.length <= 0)
//     return <h1 className="flex justify-center my-10">No new users founds!</h1>;

//   return (
//     feed && (
//       <div className="flex justify-center my-10">
//         <UserCard user={feed[0]} />
//       </div>
//     )
//   );
// };
// export default Feed;

// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addFeed } from "../utils/feedslice";
// import { useEffect, useCallback } from "react";
// import UserCard from "./UserCard";

// const Feed = () => {
//   const feed = useSelector((store) => store.feed);
//   const dispatch = useDispatch();

//   const getFeed = useCallback(async () => {
//     if (feed) return;
//     try {
//       const res = await axios.get(BASE_URL + "/feed", {
//         withCredentials: true,
//       });
//       dispatch(addFeed(res?.data?.data));
//     } catch (err) {
//       console.log(err);
//     }
//   }, [feed, dispatch]);

//   useEffect(() => {
//     getFeed();
//   }, [getFeed]);

//   if (!feed) return null;

//   if (feed.length <= 0)
//     return <h1 className="flex justify-center my-10">No new users found!</h1>;

//   return (
//     feed && (
//       <div className="min-h-screen flex  justify-center bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
//         <UserCard user={feed[0]} />
//       </div>
//     )
//   );
// };
// export default Feed;

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedslice";
import { useEffect, useCallback, useState } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const getFeed = useCallback(async () => {
    if (feed) {
      setLoading(false); // If feed is already available, stop loading
      return;
    }
    try {
      setLoading(true); // Start loading
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
      setLoading(false); // Stop loading after successful fetch
    } catch (err) {
      console.log(err);
      setError("Failed to load data!"); // Set error state
      setLoading(false); // Stop loading
    }
  }, [feed, dispatch]);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  // Show loading spinner while loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <button className="btn btn-ghost loading">Loading...</button>
      </div>
    );
  }

  // Show error message if an error occurs
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-red-500  font-bold ">{error}</h1>
      </div>
    );
  }

  // Show message if no feed is found
  if (feed.length <= 0) {
    return (
      <div className="min-h-screen flex flex-col pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-700">
        <h1 className=" bg-black bg-opacity-50 flex justify-center text-bold text-2xl font-extrabold text-white p-4">
          No New Users Found...
        </h1>
      </div>
    );
  }

  // Show feed data
  return (
    feed && (
      <div className="min-h-screen flex justify-center bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
