import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import UserDashboard from "./components/user/UserDashboard";
import Donate from "./components/layout/Donate";
import Signup from "./components/layout/Signup";
import Signin from "./components/layout/Signin";
import './App.css'


function App() {

  return (
    <>
<div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/donate" element={<Donate />} />
        <Route exact path="/login/usr" element={<Signin/>} />
        <Route exact path="/reg/usr" element={<Signup />} />
        <Route exact path="/login/usr/dash" element={<UserDashboard />} />
       
        </Routes>
    </div>

    </>
  )
}

export default App
