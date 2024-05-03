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
    <div className="request">
      <form>
        <select value={reqBlood} onChange={handleChange}>
          {bloodGroup.map((blood) => (
            <option key={blood.id} value={blood.id}>
              {blood.label}
            </option>
          ))}
        </select>
        <input type="number" placeholder="UNIT" onChange={updateUnit} />
        <button onClick={request}>REQUEST</button>
      </form>
    </div>
  );
};

export default RequestFunction;
