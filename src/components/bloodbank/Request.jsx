import React, { useState, useEffect } from "react";

const RequestFunction = () => {
  const [bloodGroup, setBloodGroup] = useState([]);
  const [reqBlood, setReqBlood] = useState("A+ve");
  const [reqUnit, setReqUnit] = useState(0);

  useEffect(() => {
    setBloodGroup([
      { id: "A+ve", label: "A+ve" },
      { id: "A-ve", label: "A-ve" },
      { id: "B+ve", label: "B+ve" },
      { id: "B-ve", label: "B-ve" },
      { id: "AB+ve", label: "AB+ve" },
      { id: "AB-ve", label: "AB-ve" },
      { id: "O+ve", label: "O+ve" },
      { id: "O-ve", label: "O-ve" },
      { id: "PNull", label: "PNull" },
    ]);
  }, []);

  const handleChange = (e) => {
    setReqBlood(e.target.value);
  };

  const updateUnit = (e) => {
    setReqUnit(e.target.value);
  };

  const request = () => {
    // Instead of making an API call, you can handle the request locally
    alert(`Blood Group: ${reqBlood}, Units: ${reqUnit}`);
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
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
