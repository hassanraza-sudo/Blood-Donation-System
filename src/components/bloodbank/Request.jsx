import React, { useState } from "react";

const Request = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [requestUnit, setRequestUnit] = useState(0);

  const handleChange = (e) => {
    setBloodGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blood Group:", bloodGroup);
    console.log("Units:", requestUnit);
    // You can perform further actions like making API requests here
  };

  return (
    <div className="request">
      <h3>REQUEST BLOOD</h3>
      <form onSubmit={handleSubmit}>
        <select value={bloodGroup} onChange={handleChange}>
          <option value="A+ve">A+ve</option>
          <option value="A-ve">A-ve</option>
          <option value="B+ve">B+ve</option>
          <option value="B-ve">B-ve</option>
          <option value="AB+ve">AB+ve</option>
          <option value="AB-ve">AB-ve</option>
          <option value="O+ve">O+ve</option>
          <option value="O-ve">O-ve</option>
          <option value="PNUll">P Null</option>
        </select>
        <input
          type="number"
          placeholder="UNITS"
          value={requestUnit}
          onChange={(e) => setRequestUnit(e.target.value)}
        />
        <button type="submit">REQUEST</button>
      </form>
    </div>
  );
};

export default Request;
