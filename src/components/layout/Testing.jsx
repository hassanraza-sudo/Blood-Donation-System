  import React from 'react';

  function Testing() {
    return (
      <div className="relative p-2 py-16 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Request ID
              </th>
              <th scope="col" className="px-6 py-3">
              Name
              </th>
              <th scope="col" className="px-6 py-3">
              Blood Group
              </th>
              <th scope="col" className="px-6 py-3">
            Unit
              </th>
              <th scope="col" className="px-6 py-3">
            Location
              </th>
              <th scope="col" className="px-6 py-3">
          Contacts
              </th>
              <th scope="col" className="px-6 py-3">
          Request Status
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Insert your table rows here */}
          </tbody>
        </table>
      </div>
    );
  }

  export default Testing;
