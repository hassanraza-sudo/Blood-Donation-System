import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import Axios from "axios";

const UpdateStock = () => {
  const [unitUpdate, setUnitUpdate] = useState(0);
  const [bloodTable, setBloodTable] = useState([]);

  // Mock data for bloodTable (Replace with actual API call)
  useEffect(() => {
    const mockData = [
      { b_id: 1, blood_group: "A+", unit: 10 },
      { b_id: 2, blood_group: "B+", unit: 15 },
      { b_id: 3, blood_group: "AB+", unit: 20 },
      { b_id: 4, blood_group: "O+", unit: 12 },
    ];
    setBloodTable(mockData);
  }, []);

  // Update blood stock
  const updateBloodStock = (b_id) => {
    // API call to update blood stock
    console.log(`Updating blood stock for blood group with ID ${b_id} to ${unitUpdate} units.`);
    // Reset input after update
    setUnitUpdate(0);
  };

  return (
    <div className="dashboard p-20 md:p-8 lg:p-12">
<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Update <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">Blood stock</span></h1>
            
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
                  onClick={() => updateBloodStock(val.b_id)}
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
