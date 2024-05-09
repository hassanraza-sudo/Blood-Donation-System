import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestFunction = () => {
  const [bloodGroup, setBloodGroup] = useState([]);
  const [reqBlood, setReqBlood] = useState("A+ve");
  const [reqUnit, setReqUnit] = useState(0);
  const [userId, setUserId] = useState(""); // Assuming you have userId stored somewhere

  useEffect(() => {
    setBloodGroup([
      { id: "A+", label: "A+" },
      { id: "A-", label: "A-" },
      { id: "B+", label: "B+" },
      { id: "B-", label: "B-" },
      { id: "AB+", label: "AB+" },
      { id: "AB-", label: "AB-" },
      { id: "O+", label: "O+" },
      { id: "O-", label: "O-" }
    ]);
  }, []);

  const handleChange = (e) => {
    setReqBlood(e.target.value);
  };

  const updateUnit = (e) => {
    setReqUnit(e.target.value);
  };

  const generateRequestId = () => {
    // Assuming you have a function to generate a unique request ID
    // Here, I'm just using a random number for demonstration purposes
    return Math.floor(Math.random() * 1000);
  };

  const request = () => {
    const requestId = generateRequestId();
    // Send request data with Axios
    axios.post("http://localhost:2000/login/usr/dash/req", {
      user_id: userId,
      req_id: requestId,
      blood_group: reqBlood,
      units: reqUnit
    })
    .then(response => {
      // Handle successful response
      // console.log("Request sent successfully:", response.data);
      alert("blood is available please collect it")
      // You can also navigate to another page or show a success message
    })
    .catch(error => {
      // Handle error
      console.error("Error sending request:", error);
    });
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center p-20"
      style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2015/07/02/10/12/blood-828726_1280.jpg')` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Blood Donation System</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="bloodGroup">
              Select Blood Group
            </label>
            <select
              id="bloodGroup"
              value={reqBlood}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              {bloodGroup.map((blood) => (
                <option key={blood.id} value={blood.id}>
                  {blood.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="unit">
              Number of Units
            </label>
            <input
              id="unit"
              type="number"
              placeholder="UNIT"
              onChange={updateUnit}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={request}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            REQUEST
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestFunction;
