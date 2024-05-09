import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios"; // Import Axios

const UpdateStock = () => {
  const [unitUpdate, setUnitUpdate] = useState(0);

  const [bloodTable, setBloodTable] = useState([]);


  // Update blood stock
  const updateBloodStock = (blood_group) => {
    // API call to update blood stock
    axios.patch(`http://localhost:2000/login/emp/ub/update`, {blood_group:blood_group, unit: unitUpdate })
      .then(response => {
        console.log(`Updated blood stock for blood group with ID ${blood_group} to ${unitUpdate} units.`);
        console.log(response.data);
        // Reset input after update
        setUnitUpdate(0);
      })
      .catch(error => {
        console.error("Error updating blood stock:", error);
      });
  };


  // Fetch blood stock data from the API
  useEffect(() => {
    // Make an API call to fetch blood stock data
    axios.get("http://localhost:2000/login/emp/ub")
      .then(response => {
        setBloodTable(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error("Error fetching blood stock:", error);
      });
  }, [updateBloodStock]);
  return (
    <div className="dashboard p-20 md:p-8 lg:p-12">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Update <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Blood stock</span>
      </h1>
            
      <table className="w-full mb-8">
        <thead>
          <tr>
            <th className="px-4 py-2">Blood Group</th>
            <th className="px-4 py-2">Unit</th>
            <th className="px-4 py-2">Update</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.map((val) => (
            <tr key={val.b_id}>
              <td className="px-4 py-2 text-center">{val.blood_group}</td>
              <td className="px-4 py-2 text-center">{val.unit}</td>
              <td className="px-4 py-2 flex items-center justify-center">
                <input
                  type="number"
                  className="w-20 px-2 py-1 border rounded-md mr-2 text-center"
                  value={unitUpdate}
                  onChange={(e) => setUnitUpdate(e.target.value)}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  onClick={() => updateBloodStock(val.blood_group)}

                >
                  UPDATE
                </motion.button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateStock;
