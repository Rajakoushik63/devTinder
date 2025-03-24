import { useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const connections = useSelector((store) => store.connections); // Access connections from the store
  const [searchQuery, setSearchQuery] = useState("");

  // Filter connections based on search query
  const filteredConnections = connections.filter((connection) => {
    const fullName =
      `${connection.firstName} ${connection.lastName}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-sky-500 to-gray-800 p-6">
      <h1 className="text-bold text-2xl bg-black bg-opacity-40 text-white p-4 rounded-md shadow-md text-center">
        Friend Feed
      </h1>

      {/* Search Input */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
          placeholder="Search friends..."
          className="rounded-lg border border-gray-600 bg-gray-800 text-white p-2 w-3/4 lg:w-1/2"
        />
      </div>

      {/* Display Filtered Friends */}
      <div className="mt-8">
        {filteredConnections.length > 0 ? (
          filteredConnections.map((friend) => {
            const { _id, firstName, lastName, photourl, about } = friend;
            return (
              <div
                key={_id}
                className="flex flex-col lg:flex-row m-6 p-6 rounded-lg bg-gradient-to-r from-gray-500 via-gray-300 to-gray-400 shadow-lg w-11/12 lg:w-3/4 mx-auto gap-6"
              >
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    alt="profile"
                    className="w-28 h-28 lg:w-24 lg:h-24 rounded-full border-4 border-gray-300 shadow-md object-cover"
                    src={photourl}
                  />
                </div>

                {/* Friend Details */}
                <div className="flex flex-col items-center lg:items-start text-left mx-4">
                  <h2 className="font-bold text-lg lg:text-xl text-gray-800">
                    {firstName} {lastName}
                  </h2>
                  <p className="text-sm lg:text-base text-gray-700 my-2">
                    {about}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-white text-lg mt-10">
            {searchQuery.trim()
              ? "No friends found matching your search."
              : "No friends to display."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
