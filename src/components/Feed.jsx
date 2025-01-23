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

import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedslice";
import { useEffect, useCallback } from "react";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = useCallback(async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err);
    }
  }, [feed, dispatch]);

  useEffect(() => {
    getFeed();
  }, [getFeed]);

  if (!feed) return null;

  if (feed.length <= 0)
    return <h1 className="flex justify-center my-10">No new users found!</h1>;

  return (
    feed && (
      <div className="flex justify-center bg-[url(https://media.istockphoto.com/id/1208738316/photo/abstract-geometric-network-polygon-globe-graphic-background.jpg?s=612x612&w=0&k=20&c=VSOKbWwGXOiCncdyoJi2xC0vNkyWLciqkHpv17F9d6E=)] bg-cover">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};
export default Feed;
