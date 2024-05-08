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
    <div className="dashboard">
      <h1>BLOOD STOCK</h1>

      <table className="blood-table">
        <thead>
          <tr>
            <th>BLOOD GROUP</th>
            <th>UNIT</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.length > 0 && bloodTable.map((val) => {
            return (
              <tr key={val.b_id}>
                <td>{val.blood_group}</td>
                <td>{val.unit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
    </div>
    <HeroSection/>
<DonationProcess/> 

    </>);
};

export default Dashboard;
