import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const UserDashboard = () => {
  // Initialize useNavigate hook
  const navigate = useNavigate();

  // donate function
  const donate = () => {
    alert("WE WILL GET IN TOUCH WITH YOU!");
  };

  const request = () => {
    // Use useNavigate to go to the request page
    navigate("/login/usr/dash/req");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-8">User Dashboard</h1>
      <div className="space-x-4">
        <button 
          onClick={donate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          DONATE
        </button>
        <button 
          onClick={request}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          REQUEST
        </button>
        {/* <button 
          onClick={update}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          UPDATE
        </button> */}
      </div>
    </div>
  );
};

export default UserDashboard;
