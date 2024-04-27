import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";

import './App.css'

function App() {

  return (
    <>
<div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        </Routes>
    </div>

    </>
  )
}

export default App
