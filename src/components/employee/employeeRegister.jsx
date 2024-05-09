import React, { useState } from 'react';
import axios from 'axios';

const EmployeeRegister = () => {
  const [formData, setFormData] = useState({
    empUserName: '',
    empPassword: '',
    empName: '',
    empMail: '',
    empPhone: '',
    empAddress: '',
  });

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2000/reg/emp', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="empName" className="block mb-1">Fullname</label>
          <input
            type="text"
            id="empName"
            value={formData.empName}
            onChange={(e) => handleChange('empName', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="empMail" className="block mb-1">Email</label>
          <input
            type="email"
            id="empMail"
            value={formData.empMail}
            onChange={(e) => handleChange('empMail', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="empPhone" className="block mb-1">Cell No</label>
          <input
            type="tel"
            id="empPhone"
            value={formData.empPhone}
            onChange={(e) => handleChange('empPhone', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="empAddress" className="block mb-1">Address</label>
          <input
            type="text"
            id="empAddress"
            value={formData.empAddress}
            onChange={(e) => handleChange('empAddress', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="empUserName" className="block mb-1">Username</label>
          <input
            type="text"
            id="empUserName"
            value={formData.empUserName}
            onChange={(e) => handleChange('empUserName', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="empPassword" className="block mb-1">Password</label>
          <input
            type="password"
            id="empPassword"
            value={formData.empPassword}
            onChange={(e) => handleChange('empPassword', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeRegister;
