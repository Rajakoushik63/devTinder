import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlelogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800">
      <div className="navbar bg-black bg-opacity-60">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost text-2xl font-extrabold text-white"
          >
            🧑‍💻 DevBook
          </Link>
        </div>
        {user && (
          <div className="flex-none gap-2">
            <div className="form-control font-bold text-white">
              Welcome,{user.firstName}
            </div>
            <div className="dropdown dropdown-end mx-5 ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="UserPhotoUrl" src={user.photourl} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="/">DevBook 👨‍💻</Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Connection Requests</Link>
                </li>
                <li>
                  <a onClick={handlelogout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
