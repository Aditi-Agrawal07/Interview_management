import React from "react";
import { useNavigate } from 'react-router-dom';

const CountCards = () => {

    const navigate = useNavigate();

    const handleViewClick = () => {
      navigate('/ViewTable'); // Replace '/target-page' with your desired route
    };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 px-4 py-8">
      {/* Card 1 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 p-6">
       <div className="flex justify-between">
       <h2 className="text-xl font-bold mb-4">Level 1A</h2>
       <button className="text-sm font-semibold mb-4 bg-orange-400 p-1 px-2 text-white rounded-md"
       onClick={handleViewClick}
       >View</button>
       </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Total Students:</span>
          <span className="text-xl font-semibold text-blue-500">120</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Passed Students:</span>
          <span className="text-xl font-semibold text-green-500">90</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Failed Students:</span>
          <span className="text-xl font-semibold text-red-500">30</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 p-6">
        <h2 className="text-xl font-bold mb-4">Level 1B</h2>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Total Students:</span>
          <span className="text-xl font-semibold text-blue-500">110</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Passed Students:</span>
          <span className="text-xl font-semibold text-green-500">85</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Failed Students:</span>
          <span className="text-xl font-semibold text-red-500">25</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/3 p-6">
        <h2 className="text-xl font-bold mb-4">Level 1C</h2>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Total Students:</span>
          <span className="text-xl font-semibold text-blue-500">130</span>
        </div>

        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Passed Students:</span>
          <span className="text-xl font-semibold text-green-500">95</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Failed Students:</span>
          <span className="text-xl font-semibold text-red-500">35</span>
        </div>
      </div>
    </div>
  );
};

export default CountCards;
