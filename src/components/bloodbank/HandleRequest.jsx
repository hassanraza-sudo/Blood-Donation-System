// import React, { useState, useEffect } from "react";
// //import Axios from "axios";

// const HandleRequest = () => {
//   // Mock data for testing
//   // const mockData = [
//   //   {
//   //     req_id: 1,
//   //     name: "John Doe",
//   //     blood_group: "A+",
//   //     unit: 2,
//   //     location: "New York",
//   //     contacts: "123-456-7890",
//   //     request_status: "Pending",
//   //     selected: false // Add selected field for tracking checkbox status
//   //   },
//   //   {
//   //     req_id: 2,
//   //     name: "Jane Smith",
//   //     blood_group: "B-",
//   //     unit: 1,
//   //     location: "Los Angeles",
//   //     contacts: "987-654-3210",
//   //     request_status: "Pending",
//   //     selected: false // Add selected field for tracking checkbox status
//   //   },
//   //   {
//   //     req_id: 3,
//   //     name: "Alice Johnson",
//   //     blood_group: "O+",
//   //     unit: 3,
//   //     location: "Chicago",
//   //     contacts: "555-123-4567",
//   //     request_status: "Approved", // Example of an approved request
//   //     selected: false
//   //   },
//   //   // Add more mock data entries
//   //   {
//   //     req_id: 4,
//   //     name: "Bob Brown",
//   //     blood_group: "AB+",
//   //     unit: 1,
//   //     location: "Houston",
//   //     contacts: "111-222-3333",
//   //     request_status: "Pending",
//   //     selected: false
//   //   },
//   //   {
//   //     req_id: 5,
//   //     name: "Emily Johnson",
//   //     blood_group: "O-",
//   //     unit: 2,
//   //     location: "Chicago",
//   //     contacts: "444-555-6666",
//   //     request_status: "Pending",
//   //     selected: false
//   //   },
//   //   {
//   //     req_id: 6,
//   //     name: "Michael Williams",
//   //     blood_group: "A-",
//   //     unit: 1,
//   //     location: "Los Angeles",
//   //     contacts: "777-888-9999",
//   //     request_status: "Pending",
//   //     selected: false
//   //   },
//   //   {
//   //     req_id: 7,
//   //     name: "Sarah Davis",
//   //     blood_group: "B+",
//   //     unit: 3,
//   //     location: "San Francisco",
//   //     contacts: "123-987-6543",
//   //     request_status: "Pending",
//   //     selected: false
//   //   },
//   //   {
//   //     req_id: 8,
//   //     name: "Chris Taylor",
//   //     blood_group: "AB-",
//   //     unit: 2,
//   //     location: "New York",
//   //     contacts: "789-321-6540",
//   //     request_status: "Pending",
//   //     selected: false
//   //   }
//   // ];

//   // Variables
//   const [RequestTable, setRequestTable] = useState();

//   useEffect(() => {
//    axios.get("http://localhost:2000/login/emp/hr", 
//     (req,res)=> setRequestTable(res.data)
//    )
//   }, []);

//   // Function to handle checkbox selection
//   const handleCheckboxChange = (req_id) => {
//     const updatedTable = RequestTable.map((request) => {
//       if (request.req_id === req_id) {
//         return { ...request, selected: !request.selected };
//       }
//       return request;
//     });
//     setRequestTable(updatedTable);
//   };

//   // Function to handle approval of selected requests
//   const handleApprove = () => {
//     const updatedTable = RequestTable.map((request) => {
//       if (request.selected) {
//         return { ...request, request_status: "Approved", selected: false }; // Mark request as approved and unselect
//       }
//       return request;
//     });
//     setRequestTable(updatedTable);
//   };

//   // Sort requests so that pending requests come first
//   const sortedRequests = [...RequestTable].sort((a, b) => {
//     if (a.request_status === "Pending" && b.request_status !== "Pending") {
//       return -1;
//     } else if (a.request_status !== "Pending" && b.request_status === "Pending") {
//       return 1;
//     }
//     return 0;
//   });

//   return (
//     <div className="p-4 p-16">
//       <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-red-500">REQUEST TABLE</h1>
      
//       {/* Approve Button */}
//       <button
//         className="bg-green-500 text-white px-4 py-2 mb-4 rounded"
//         onClick={handleApprove}
//       >
//         Approve
//       </button>
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-lg text-center rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//               <th scope="col" className="p-4">
//                 <div className="flex items-center">
//                   <label htmlFor="checkbox-all-search" className="sr-only">
//                     checkbox
//                   </label>
//                 </div>
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Request ID
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Name
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Blood Group
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Unit
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Location
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Contacts
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Request Status
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Map through the sorted data */}
//             {sortedRequests.map((request) => (
//               <tr key={request.req_id}>
//                 <td className="p-4">
//                   <input
//                     id={`checkbox-${request.req_id}`}
//                     type="checkbox"
//                     checked={request.selected}
//                     onChange={() => handleCheckboxChange(request.req_id)}
//                     disabled={request.request_status === "Approved"} // Disable checkbox for approved requests
//                     className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
//                   />
//                   <label htmlFor={`checkbox-${request.req_id}`} className="sr-only">
//                     checkbox
//                   </label>
//                 </td>
//                 <td className="px-6 py-4">{request.req_id}</td>
//                 <td className="px-6 py-4">{request.name}</td>
//                 <td className="px-6 py-4">{request.blood_group}</td>
//                 <td className="px-6 py-4">{request.unit}</td>
//                 <td className="px-6 py-4">{request.location}</td>
//                 <td className="px-6 py-4">{request.contacts}</td>
//                 <td className="px-6 py-4">{request.request_status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default HandleRequest;
