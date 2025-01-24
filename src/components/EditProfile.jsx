// import { useState } from "react";
// import PropTypes from "prop-types";
// import EditUserCard from "./EditUserCard";
// import { BASE_URL } from "../utils/constants";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";

// const EditProfile = ({ user }) => {
//   const [firstName, setFirstName] = useState(user.firstName || "");
//   const [lastName, setLastName] = useState(user.lastName || "");
//   const [age, setAge] = useState(user.age || "");
//   const [gender, setGender] = useState(user.gender || "");
//   const [about, setAbout] = useState(user.about || "");
//   const [photourl, setPhotourl] = useState(user.photourl || "");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const [showToast, setShowToast] = useState(false);

//   const saveProfile = async () => {
//     setError("");
//     try {
//       const res = await axios.patch(
//         `${BASE_URL}/profile/edit`,
//         {
//           firstName,
//           lastName,
//           photourl,
//           age,
//           gender,
//           about,
//         },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res?.data?.data));
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//       }, 3000);
//     } catch (err) {
//       let errorMessage = err.response.data;
//       setError(errorMessage);
//     }
//   };

//   return (
//     <>
//       <div className="justify-center min-h-screen flex pb-20 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
//         <div className="flex justify-center mx-10">
//           <div className="card bg-base-300 w-96 shadow-xl mb-12 mt-10">
//             <div className="card-body">
//               <h2 className="card-title flex justify-center">Edit Profile</h2>
//               <div>
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
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">PhotoUrl</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={photourl}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setPhotourl(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Age</span>
//                   </div>
//                   <input
//                     type="text"
//                     placeholder=""
//                     value={age}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setAge(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Gender</span>
//                   </div>
//                   <select
//                     value={gender}
//                     className="select select-bordered w-full max-w-xs"
//                     onChange={(e) => setGender(e.target.value)}
//                   >
//                     <option value="" disabled>
//                       Select Gender
//                     </option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="others">Others</option>
//                   </select>
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">About</span>
//                   </div>
//                   <textarea
//                     placeholder=""
//                     value={about}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setAbout(e.target.value)}
//                   />
//                 </label>
//                 {error && <p className="text-red-500">{error}</p>}
//               </div>
//               <div className="card-actions justify-center">
//                 <button className="btn btn-primary" onClick={saveProfile}>
//                   Save Profile
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <EditUserCard
//           user={{ firstName, lastName, photourl, age, gender, about }}
//         />
//         {showToast && (
//           <div className="toast toast-top toast-center">
//             <div className="alert alert-success">
//               <span>Profile Saved successfully.</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// EditProfile.propTypes = {
//   user: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     firstName: PropTypes.string,
//     lastName: PropTypes.string,
//     age: PropTypes.number,
//     gender: PropTypes.string,
//     about: PropTypes.string,
//     photourl: PropTypes.string,
//   }).isRequired,
// };

// export default EditProfile;

import { useState } from "react";
import PropTypes from "prop-types";
import EditUserCard from "./EditUserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [photourl, setPhotourl] = useState(user.photourl || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        `${BASE_URL}/profile/edit`,
        {
          firstName,
          lastName,
          photourl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      let errorMessage = err.response.data;
      setError(errorMessage);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800 gap-6 p-4">
        {/* Edit Profile Form */}
        <div className="bg-base-300 w-full lg:w-1/2 max-w-md shadow-xl rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Edit Profile</h2>
          <form className="space-y-4">
            <label className="form-control w-full">
              <span className="label-text">First Name</span>
              <input
                type="text"
                value={firstName}
                className="input input-bordered w-full"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Last Name</span>
              <input
                type="text"
                value={lastName}
                className="input input-bordered w-full"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Photo URL</span>
              <input
                type="text"
                value={photourl}
                className="input input-bordered w-full"
                onChange={(e) => setPhotourl(e.target.value)}
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Age</span>
              <input
                type="text"
                value={age}
                className="input input-bordered w-full"
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Gender</span>
              <select
                value={gender}
                className="select select-bordered w-full"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </label>
            <label className="form-control w-full">
              <span className="label-text">About</span>
              <textarea
                value={about}
                className="textarea textarea-bordered w-full"
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
            {error && <p className="text-red-500">{error}</p>}
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary w-full"
                onClick={saveProfile}
              >
                Save Profile
              </button>
            </div>
          </form>
        </div>

        {/* EditUserCard Component */}
        <div className="w-full lg:w-1/2 max-w-md">
          <EditUserCard
            user={{ firstName, lastName, photourl, age, gender, about }}
            className="shadow-lg bg-base-100 p-4 rounded-lg"
          />
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile Saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

EditProfile.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    about: PropTypes.string,
    photourl: PropTypes.string,
  }).isRequired,
};

export default EditProfile;
