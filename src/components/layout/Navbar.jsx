import React from "react";
import bdrop from "../../assets/img/bdrop.png";
import SearchPage from "./SearchPage";
import { Link } from "react-router-dom";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
    < Link to="/"><img src={bdrop} alt="bdroplogo" /></Link>
        
    < Link to="/donate">DONATE/REQUEST </Link>
    
      
      {/* <Search /> */}
      <SearchPage />
    </nav>
  );
};

export default Navbar;
