import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

// CSS
import "../../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/login/emp" style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: 'red', color: 'white' }}>Login</button>
      </Link>
      <Link to="/reg/emp" style={{ textDecoration: 'none', color: 'red' }}>Register</Link>
    </div>
  );
};

export default Footer;
