import React, { useState, useEffect } from "react";
import Axios from "axios";
import { motion } from "framer-motion";

const UpdateHealth = () => {
  const [userId, setUserId] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [userVitals, setUserVitals] = useState("");
  const [userHeight, setUserHeight] = useState("");
  const [userWeight, setUserWeight] = useState("");
  const [userStatus, setUserStatus] = useState("");

  // Search for blood
  useEffect(() => {
    Axios.post("http://localhost:3001/login/emp/uh", {
      userId: userId,
    }).then((response) => {
      setSearchList(response.data);
    });
  }, [userId]);

  // Update user data
  const updateUserData = () => {
    Axios.put("http://localhost:3001/login/emp/uh", {
      user_id: userId,
      userVitals: userVitals,
      userHeight: userHeight,
      userWeight: userWeight,
      userStatus: userStatus,
    }).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold mb-8">Update Health</h1>
        <input
          type="text"
          placeholder="USER ID"
          className="w-full px-4 py-2 mb-4 border rounded-md"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <div className="overflow-x-auto mb-8">
          <table className="w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">NAME</th>
                <th className="px-4 py-2">PHONE</th>
                <th className="px-4 py-2">PLACE</th>
                <th className="px-4 py-2">BLOODGROUP</th>
              </tr>
            </thead>
            <tbody>
              {searchList.map((val) => (
                <tr key={val.user_id}>
                  <td className="px-4 py-2">{val.userFName}</td>
                  <td className="px-4 py-2">{val.userPhone}</td>
                  <td className="px-4 py-2">{val.userPlace}</td>
                  <td className="px-4 py-2">{val.userBloodGroup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="VITALS"
            className="w-full px-4 py-2 border rounded-md"
            value={userVitals}
            onChange={(e) => setUserVitals(e.target.value)}
          />
          <input
            type="number"
            placeholder="HEIGHT"
            className="w-full px-4 py-2 border rounded-md"
            value={userHeight}
            onChange={(e) => setUserHeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="WEIGHT"
            className="w-full px-4 py-2 border rounded-md"
            value={userWeight}
            onChange={(e) => setUserWeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="DONOR STATUS"
            className="w-full px-4 py-2 border rounded-md"
            value={userStatus}
            onChange={(e) => setUserStatus(e.target.value)}
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={updateUserData}
        >
          UPDATE
        </motion.button>
      </div>
    </div>
  );
};

export default UpdateHealth;
