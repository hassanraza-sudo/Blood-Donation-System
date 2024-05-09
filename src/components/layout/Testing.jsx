// App.js

import React, { useState } from 'react';
import userData from './userData'; // Assume user data is imported from a file

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('location'); // Default search type

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter users based on search term and type
  const filteredUsers = userData.filter((user) => {
    if (searchType === 'location') {
      return user.place.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return user.bloodGroup.toLowerCase() === searchTerm.toLowerCase();
    }
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Search</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder={`Search by ${searchType === 'location' ? 'Location' : 'Blood Group'}`}
          className="border border-gray-300 p-2 mr-2"
          onChange={handleSearch}
        />
        <select
          value={searchType}
          onChange={handleSearchTypeChange}
          className="border border-gray-300 p-2"
        >
          <option value="location">Location</option>
          <option value="blood">Blood Group</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Contact No</th>
              <th className="border border-gray-400 px-4 py-2">Place</th>
              <th className="border border-gray-400 px-4 py-2">Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-400 px-4 py-2">{user.name}</td>
                <td className="border border-gray-400 px-4 py-2">{user.contactNo}</td>
                <td className="border border-gray-400 px-4 py-2">{user.place}</td>
                <td className="border border-gray-400 px-4 py-2">{user.bloodGroup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
