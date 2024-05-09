import React from "react";
import { Link } from "react-router-dom";

const EmpDashBoard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link to="/login/emp/uh">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          UPDATE HEALTH
        </button>
      </Link>
      <Link to="/login/emp/ub">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          UPDATE BLOOD STOCK
        </button>
      </Link>
      {/* <Link to="/login/emp/hr">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
          HANDLE REQUEST
        </button>
      </Link> */}
    </div>
  );
};

export default EmpDashBoard;
