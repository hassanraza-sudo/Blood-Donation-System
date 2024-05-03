import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import UserDashboard from "./components/user/UserDashboard";
import Donate from "./components/layout/Donate";
import Signup from "./components/layout/Signup";
import Signin from "./components/layout/Signin";
import EmployeeLogin from "./components/employee/employeeLogin";
import EmployeRegister from "./components/employee/employeeRegister";
import EmpDashboard from "./components/employee/EmpDarshboard";
import UpdateStock from "./components/bloodbank/UpdateStock";
import UpdateHealth from "./components/bloodbank/UpdateHealth";
import Search from "./components/bloodbank/Search";
import HandleRequest from "./components/bloodbank/HandleRequest";

import RequestClass from "./components/bloodbank/RequestClass";
import Request from "./components/bloodbank/Request";

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
        <Route exact path="/login/emp/dash" element={<EmpDashboard />} />
        <Route exact path="/reg/emp" element={<EmployeRegister />} />
        <Route exact path="/login/emp" element={<EmployeeLogin />} />
        <Route exact path="/login/emp/ub" element={<UpdateStock />} />
        <Route exact path="/login/emp/uh" element={<UpdateHealth />} />
        <Route exact path="/home/search/blood" element={<Search />} />
        <Route exact path="/request" element={<RequestClass />} />
        <Route exact path="/login/emp/hr" element={<HandleRequest />} />
               <Route exact path="/login/usr/dash/req" element={Request}/> 
             
        </Routes>
    </div>

    </>
  )
}

export default App
