// import { Outlet, useNavigate } from "react-router-dom";
// import NavBar from "./NavBar";
// import Footer from "./Footer";
// import axios from "axios";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useEffect } from "react";

// const Body = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userData = useSelector((store) => store.user);

//   const fetchUser = async () => {
//     if (userData) return;
//     try {
//       const res = await axios.get(BASE_URL + "/profile/view", {
//         withCredentials: true,
//       });
//       dispatch(addUser(res.data));
//     } catch (err) {
//       if (err.status === 401) {
//         navigate("/login");
//       }
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
//       <NavBar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };
// export default Body;

import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect, useCallback } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  const fetchUser = useCallback(async () => {
    if (userData) return;
    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) {
        navigate("/login");
      }
      console.error("Error fetching user:", err);
    }
  }, [userData, dispatch, navigate]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
