import React, { useEffect, useState } from "react";
import CandidateList from "./CandidateList";

const Candidates = () => {
    const [allUsers, setAllUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://study-monk-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Perform the search action here
      handleSearch();
    }
  };

  const handleSearch = () => {
    fetch(
      `https://study-monk-server.vercel.app/searchTitle/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
  };

  return (
    <div >
        {/* <p className="ml-5">{allUsers.length}</p> */}
      <div class="max-w-md mx-auto my-5">
        <div class="flex items-center">
          <input
            type="text"
            onKeyDown={handleKeyPress}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search"
            class="w-full px-4 py-2 mr-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            class="px-4 py-2  text-white rounded-lg bg-[#ee5253] hover:bg-[#ff7979]"
          >
            Search
          </button>
        </div>
      </div>


      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="text-base">
            <tr>
              <th className="font-bold text-base">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {
                allUsers.map((singleUser, index) => <CandidateList
                    key={singleUser._id}
                    singleUser={singleUser}
                    index={index}
                ></CandidateList>)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Candidates;
