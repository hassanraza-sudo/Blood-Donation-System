import React from "react";
import vid from "../assets/img/homevideo1.mp4";

const HeroSection = () => {
  return (
    <div className="main h-screen bg-cover bg-center p-40 relative">
      <video id="video_background" preload="auto" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={vid} type="video/mp4" />
        Video not supported
      </video>
      <div className="absolute  inset-0 bg-black opacity-50"></div>
      <div className="container relative z-10 h-full flex flex-col justify-center items-center text-center">
        <h1 className="logo cursive text-7xl font-semibold text-white">Blood Link</h1>
        <div className="content mt-8">
          <h4 className="motto text-3xl font-semibold text-white font-sans hover:font-poppins">Donate Blood, save Life!</h4>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default HeroSection;
