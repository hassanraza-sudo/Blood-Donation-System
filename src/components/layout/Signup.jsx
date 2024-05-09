import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    Fullname: '',
    Age: '',
    BloodGroup: '',
    Emails: '',
    Address: '',
    Gender: '',
    PhoneNo: '',
    username: '',
    Passwords: '',
    Place: ''
  });
  const navigate = useNavigate();

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
  
      const response = await axios.post("http://localhost:2000/reg/usr", {
        userFName: formData.Fullname,
        userAge: formData.Age,
        userBloodGroup: formData.BloodGroup,
        userMail: formData.Emails,
        userAddress: formData.Address,
        userGender: formData.Gender,
        userPhone: formData.PhoneNo,
        userUserName: formData.username,
        userPassword: formData.Passwords,
        userPlace: formData.Place
      });
      console.log("here is the response", response.data);
      navigate("/login/usr");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <form onSubmit={handleSignup} className="max-w-lg w-full px-6 py-8 bg-gray-100 rounded shadow-lg">
        {/* Fullname */}
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Fullname</label>
          <input
            type="text"
            id="fullname"
            name="Fullname"
            value={formData.Fullname}
            onChange={(e) => handleChange('Fullname', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            name="Age"
            value={formData.Age}
            onChange={(e) => handleChange('Age', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Blood Group */}
        <div className="mb-4">
          <label htmlFor="bloodgroup" className="block text-sm font-medium text-gray-700">Blood Group</label>
          <input
            type="text"
            id="bloodgroup"
            name="BloodGroup"
            value={formData.BloodGroup}
            onChange={(e) => handleChange('BloodGroup', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Emails */}
        <div className="mb-4">
          <label htmlFor="emails" className="block text-sm font-medium text-gray-700">Emails</label>
          <input
            type="email"
            id="emails"
            name="Emails"
            value={formData.Emails}
            onChange={(e) => handleChange('Emails', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="Address"
            value={formData.Address}
            onChange={(e) => handleChange('Address', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="Gender"
            value={formData.Gender}
            onChange={(e) => handleChange('Gender', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          >
            <option value="">Select a gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="T">Not specifying</option>
          </select>
        </div>

        {/* PhoneNo */}
        <div className="mb-4">
          <label htmlFor="phoneno" className="block text-sm font-medium text-gray-700">Cell No</label>
          <input
            type="tel"
            id="phoneno"
            name="PhoneNo"
            value={formData.PhoneNo}
            onChange={(e) => handleChange('PhoneNo', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* username */}
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange('username', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Passwords */}
        <div className="mb-4">
          <label htmlFor="passwords" className="block text-sm font-medium text-gray-700">Passwords</label>
          <input
            type="password"
            id="passwords"
            name="Passwords"
            value={formData.Passwords}
            onChange={(e) => handleChange('Passwords', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Place */}
        <div className="mb-4">
          <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
          <input
            type="text"
            id="place"
            name="Place"
            value={formData.Place}
            onChange={(e) => handleChange('Place', e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button type="submit" className="mt-4 w-full bg-red-500 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-red-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Signup;
