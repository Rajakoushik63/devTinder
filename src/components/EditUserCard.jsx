// import axios from "axios";
// import PropTypes from "prop-types";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch } from "react-redux";
// import { removeUserFromFeed } from "../utils/feedslice";

// const EditUserCard = ({ user }) => {
//   const { _id, firstName, lastName, photourl, age, gender, about } = user;

//   const dispatch = useDispatch();
//   const handleSendRequest = async (status, userId) => {
//     try {
//       await axios.post(
//         BASE_URL + "/request/send/" + status + "/" + userId,
//         {},
//         {
//           withCredentials: true,
//         }
//       );
//       dispatch(removeUserFromFeed(userId));
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="card bg-base-300 w-96 shadow-xl mt-10 mb-20">
//       <figure className="w-full rounded-full">
//         <img src={photourl} className="w-full rounded-full" alt="user photo" />
//       </figure>
//       <div className="card-body ">
//         <h2 className="card-title">{firstName + " " + lastName}</h2>
//         {age && gender && <p>{age + ", " + gender}</p>}
//         <p>{about}</p>
//         <div className="card-actions justify-center my-4">
//           <button
//             className="btn btn-primary"
//             onClick={() => handleSendRequest("ignored", _id)}
//           >
//             Ignore
//           </button>
//           <button
//             className="btn btn-secondary"
//             onClick={() => handleSendRequest("interested", _id)}
//           >
//             Interested
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// EditUserCard.propTypes = {
//   user: PropTypes.object.isRequired,
// };

// export default EditUserCard;

import axios from "axios";
import PropTypes from "prop-types";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedslice";

const EditUserCard = ({ user }) => {
  const { _id, firstName, lastName, photourl, age, gender, about } = user;

  const dispatch = useDispatch();
  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl mt-10 mb-20">
      <figure className="w-[22rem] h-[22rem] rounded-full overflow-hidden mx-auto mt-6">
        <img
          src={photourl}
          className="w-full h-full object-cover"
          alt="user photo"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button
            className="btn btn-primary"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

EditUserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default EditUserCard;
