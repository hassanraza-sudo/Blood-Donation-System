import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Signup from "./Signup";
//css
import "../../assets/css/Donate.css";
import Signin from "./Signin";
const Donate = () => {
  return (
    <div className="donate">
      <Link to="/reg/usr">
        <button>REGISTER</button>
      </Link>
      <Link to="/login/usr">
        <button>LOGIN</button>
      </Link>

      <Routes>
        <Route path="/reg/usr" component={Signup} />
        <Route path="/login/usr" component={Signin} />
      </Routes>
    </div>
  );
};

export default Donate;
