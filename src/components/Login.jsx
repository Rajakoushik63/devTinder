// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

// const Login = () => {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/login",
//         {
//           emailId,
//           password,
//         },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data));
//       return navigate("/");
//     } catch (error) {
//       setError(error?.response?.data || "Something went wrong");
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/signup",
//         { firstName, lastName, emailId, password },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data.data));
//       return navigate("/profile");
//     } catch (error) {
//       setError(error?.response?.data || "Something went wrong");
//     }
//   };

//   return (
//     <div className="flex justify-center my-10 pb-20">
//       <div className="card bg-base-300 w-96 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title flex justify-center">
//             {isLoginForm ? "Login" : "SignUp"}
//           </h2>
//           <div>
//             {!isLoginForm && (
//               <>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">First Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={firstName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Last Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={lastName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </label>
//               </>
//             )}
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Email ID</span>
//               </div>
//               <input
//                 type="text"
//                 placeholder=""
//                 value={emailId}
//                 className="input input-bordered w-full max-w-xs"
//                 onChange={(e) => setEmailId(e.target.value)}
//               />
//             </label>
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Password</span>
//               </div>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder=""
//                   value={password}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 px-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </label>
//             {error && <p className="text-red-500">{error}</p>}
//           </div>
//           <div className="card-actions justify-center">
//             <button
//               className="btn btn-primary"
//               onClick={isLoginForm ? handleLogin : handleSignUp}
//             >
//               {isLoginForm ? "Login" : "SignUp"}
//             </button>
//           </div>
//           <p className="m-auto cursor-pointer py-2">
//             {isLoginForm ? (
//               <span>
//                 New User?
//                 <button
//                   onClick={() => setIsLoginForm((value) => !value)}
//                   className="text-blue-500 ml-1"
//                 >
//                   SignUp Here
//                 </button>
//               </span>
//             ) : (
//               <span>
//                 Existing User?
//                 <button
//                   onClick={() => setIsLoginForm((value) => !value)}
//                   className="text-blue-500 ml-1"
//                 >
//                   Login Here
//                 </button>
//               </span>
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

// const Login = () => {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/login",
//         {
//           emailId,
//           password,
//         },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data));
//       return navigate("/");
//     } catch (error) {
//       setError(error?.response?.data || "Something went wrong");
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/signup",
//         { firstName, lastName, emailId, password },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data.data));
//       return navigate("/profile");
//     } catch (error) {
//       setError(error?.response?.data || "Something went wrong");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage: "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')"
//       }}>
//       <div className="card bg-base-300 w-96 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title flex justify-center">
//             {isLoginForm ? "Login" : "SignUp"}
//           </h2>
//           <div>
//             {!isLoginForm && (
//               <>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">First Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={firstName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Last Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={lastName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </label>
//               </>
//             )}
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Email ID</span>
//               </div>
//               <input
//                 type="text"
//                 placeholder=""
//                 value={emailId}
//                 className="input input-bordered w-full max-w-xs"
//                 onChange={(e) => setEmailId(e.target.value)}
//               />
//             </label>
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Password</span>
//               </div>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder=""
//                   value={password}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 px-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </label>
//             {error && <p className="text-red-500">{error}</p>}
//           </div>
//           <div className="card-actions justify-center">
//             <button
//               className="btn btn-primary"
//               onClick={isLoginForm ? handleLogin : handleSignUp}
//             >
//               {isLoginForm ? "Login" : "SignUp"}
//             </button>
//           </div>
//           <p className="m-auto cursor-pointer py-2">
//             {isLoginForm ? (
//               <span>
//                 New User?
//                 <button
//                   onClick={() => setIsLoginForm((value) => !value)}
//                   className="text-blue-500 ml-1"
//                 >
//                   SignUp Here
//                 </button>
//               </span>
//             ) : (
//               <span>
//                 Existing User?
//                 <button
//                   onClick={() => setIsLoginForm((value) => !value)}
//                   className="text-blue-500 ml-1"
//                 >
//                   Login Here
//                 </button>
//               </span>
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

// const Login = () => {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isLoginForm, setIsLoginForm] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/login",
//         {
//           emailId,
//           password,
//         },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data));
//       return navigate("/");
//     } catch (error) {
//       setError(error?.response?.data || "Something went wrong");
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/signup",
//         { firstName, lastName, emailId, password },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data.data));
//       return navigate("/profile");
//     } catch (error) {
//       setError(error?.response?.data || "Something went wrong");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')",
//       }}
//     >
//       <div className="card bg-base-300 w-96 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title flex justify-center">
//             {isLoginForm ? "Login" : "SignUp"}
//           </h2>
//           <div>
//             {!isLoginForm && (
//               <>
//                 <label className="form-control w-full max-w-xs my-2 ">
//                   <div className="label">
//                     <span className="label-text">First Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={firstName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Last Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={lastName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </label>
//               </>
//             )}
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Email ID</span>
//               </div>
//               <input
//                 type="text"
//                 placeholder=""
//                 value={emailId}
//                 className="input input-bordered w-full max-w-xs"
//                 onChange={(e) => setEmailId(e.target.value)}
//               />
//             </label>
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Password</span>
//               </div>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder=""
//                   value={password}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 px-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </label>
//             {error && <p className="text-red-500">{error}</p>}
//           </div>
//           <div className="card-actions justify-center">
//             <button
//               className="btn btn-primary"
//               onClick={isLoginForm ? handleLogin : handleSignUp}
//             >
//               {isLoginForm ? "Login" : "SignUp"}
//             </button>
//           </div>
//           <p className="m-auto cursor-pointer py-2">
//             {isLoginForm ? (
//               <span>
//                 New User?
//                 <button
//                   onClick={() => setIsLoginForm((value) => !value)}
//                   className="text-blue-500 ml-1"
//                 >
//                   SignUp Here
//                 </button>
//               </span>
//             ) : (
//               <span>
//                 Existing User?
//                 <button
//                   onClick={() => setIsLoginForm((value) => !value)}
//                   className="text-blue-500 ml-1"
//                 >
//                   Login Here
//                 </button>
//               </span>
//             )}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://tinder.com/static/build/8ad4e4299ef5e377d2ef00ba5c94c44c.webp')",
      }}
    >
      <div className="card bg-black w-96 shadow-xl bg-opacity-75 ">
        <div className="card-body">
          <h2 className="card-title flex justify-center">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div>
            {!isLoginForm && (
              <>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">First Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={firstName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full max-w-xs my-2">
                  <div className="label">
                    <span className="label-text">Last Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder=""
                    value={lastName}
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                placeholder=""
                value={emailId}
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs my-2">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder=""
                  value={password}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 px-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p className="m-auto cursor-pointer py-2">
            {isLoginForm ? (
              <span>
                New User?
                <button
                  onClick={() => setIsLoginForm((value) => !value)}
                  className="text-blue-500 ml-1"
                >
                  SignUp Here
                </button>
              </span>
            ) : (
              <span>
                Existing User?
                <button
                  onClick={() => setIsLoginForm((value) => !value)}
                  className="text-blue-500 ml-1"
                >
                  Login Here
                </button>
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
