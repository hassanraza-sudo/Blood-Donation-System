import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const BloodStock = () => {
  const [bloodTable, setBloodTable] = useState([]);

  // Mock data for bloodTable (Replace with act
  useEffect(() => {
    // Fetch blood stock data from the server
    axios.get("http://localhost:2000/bloodstock")
      .then(response => {
        setBloodTable(response.data);
        console.log("Results got in blood Stock")
      })
      .catch(error => {
        console.error("Error fetching blood stock data:", error);
      });
  }, []);

  

  return (
    <div className="dashboard p-20 md:p-12 lg:p-12">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Blood stock</span>
      </h1>
            
      <table className="w-full md:w-1/2 m-8 p-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-lg font-semibold border border-gray-300">Blood Group</th>
            <th className="px-4 py-2 text-lg font-semibold border border-gray-300">Unit</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.map((val) => (
            <tr key={val.b_id} className="border border-gray-300">
              <td className="px-4 py-2 text-lg text-center border border-gray-300">{val.blood_group}</td>
              <td className="px-4 py-2 text-lg text-center border border-gray-300">{val.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BloodStock;
  