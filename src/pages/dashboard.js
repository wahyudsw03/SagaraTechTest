import React, { useState, useEffect, useRef} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
<div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64 p-6 bg-gray-100 min-h-screen">
        {/* Main Content */}
        <h1 className="text-2xl font-bold">Main Content Area</h1>
      </div>
    </div>
  );
}

export default Dashboard;
