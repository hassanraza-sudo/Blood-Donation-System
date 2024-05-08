import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import axios from "axios"; // Import axios if not already imported

const Donate = () => {
  // Array of blood unit availability
  const [bloodTable, setBloodTable] = useState([]);

  // useEffect call to fetch data
  useEffect(() => {
    // Assuming you have an endpoint to fetch blood data
    axios.get("http://localhost:3001/bloodData").then((response) => {
      setBloodTable(response.data);
    });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className="donate flex flex-row items-start justify-center">
      {/* Left Section with Buttons */}
      <div className="left-section mr-2">
        <Link to="/reg/usr">
          <button className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            REGISTER
          </button>
        </Link>
        <Link to="/login/usr">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            LOGIN
          </button>
        </Link>
      </div>

      {/* Right Section with Blood Stock Table */}
      <div className="right-section ">
        <Routes>
          <Route path="/reg/usr" element={<Signup />} />
          <Route path="/login/usr" element={<Signin />} />
        </Routes>

        <div className="dashboard  p-4">
          <h1 className="text-xl font-bold mb-4">BLOOD STOCK</h1>

          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">BLOOD GROUP</th>
                <th className="border border-gray-400 px-4 py-2">UNIT</th>
              </tr>
            </thead>
            <tbody>
              {bloodTable.map((val) => (
                <tr key={val.b_id} className="bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2">{val.blood_group}</td>
                  <td className="border border-gray-400 px-4 py-2">{val.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donate;
