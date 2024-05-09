import React from "react";
import bloodDonationImage from "../../assets/img/donate (8).jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:px-8 md:py-12 mt-8">
      <div className="flex flex-col md:flex-row items-center justify-center">
        {/* Description */}
        <motion.div className="md:w-1/2 md:mr-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
         
         
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> <mark class="px-2 text-white bg-red-600 rounded dark:bg-red-500">BLOOD</mark> Donation System</h1>

          <p className="text-lg mb-4 text-justify">
            The <span className="font-semibold">Blood Donation System</span> is dedicated to <span className="font-semibold">saving lives</span> by facilitating the process of blood donation. Our system connects donors with recipients in need of blood transfusions, ensuring a seamless and efficient process for all involved.
          </p>
          <p className="text-lg mb-4 text-justify">
            Our mission is to increase awareness about the importance of blood donation and to make the donation process convenient and accessible to everyone. Through our platform, donors can easily find donation centers, schedule appointments, and track their donation history.
          </p>
          <p className="text-lg mb-4 text-justify">
            Thank you for supporting our cause and helping to <span className="font-semibold">save lives</span> through blood donation!
          </p>
        </motion.div>
        {/* Image */}
        <motion.div className="md:w-1/2 mt-4 md:mt-0" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <img src={bloodDonationImage} alt="Blood Donation" className="w-full h-auto rounded-lg shadow-lg" style={{ maxWidth: "100%" }} />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
