import React, { useEffect, useState } from "react";
import axios from "axios";
import DonationProcess from "../../elements/DonationProcess"
import HeroSection from "../../elements/HeroSection"
//css
import "../../assets/css/Dashboard.css";

//background image
//import bfImg from '../../assets/img/bg.png'

const Dashboard = () => {
  //array of blood unit availbility
  const [bloodTable, setbloodTable] = useState([]);

  //useEffect call
  useEffect(() => {
    axios
      .get("http://localhost:2000/login/emp/ub")
      .then(function (response) {
        console.log(response);
        setbloodTable(response.data)
      });
  }, []);

  return (


    <>
    <HeroSection/>
<DonationProcess/> 

    </>);
};

export default Dashboard;
