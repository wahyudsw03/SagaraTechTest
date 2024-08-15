import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#1C1C1C] text-white h-screen fixed top-0 left-0 flex flex-col">
      {/* Logo */}
      <div className="flex items-center justify-center p-6">
        <img src="./logo.png" alt="Sagara Tech Logo" className="w-32" />
      </div>

      {/* Menu */}
      <nav className="flex flex-col p-4">
        <h3 className="text-gray-400 mb-4">Menu</h3>
        <a href="#dashboard" className="text-white py-2 px-4 hover:bg-gray-700 rounded-md">Dashboard</a>
        <a href="#students" className="text-white py-2 px-4 hover:bg-gray-700 rounded-md">Students</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
