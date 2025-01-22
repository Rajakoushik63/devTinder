import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useCallback } from "react";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (status, _id) => {
    try {
      axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRequests = useCallback(async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  if (!requests) return null;
  if (requests.length === 0)
    return (
      <h1 className="flex justify-center text-bold text-2xl font-medium text-white">
        Requests Not Found!
      </h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-2xl text-white p-2 bg-slate-500 rounded-md">
        Connection Requests
      </h1>
      {requests.map((request) => {
        const { _id, firstName, lastName, photourl, age, gender, about } =
          request.fromUserId;
        return (
          <div
            className="flex items-center m-4 p-4 rounded-lg bg-base-300 w-1/2 mx-auto"
            key={_id}
          >
            <div>
              <img
                alt="photo"
                className="w-20 h-20 rounded-lg"
                src={photourl}
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="font-blod text-xl">
                {firstName + " " + lastName}
              </h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="btn btn-primary"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
