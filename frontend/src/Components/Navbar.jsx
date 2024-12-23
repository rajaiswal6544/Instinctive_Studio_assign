import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md p-4">
      {/* Search Bar */}
      <div className="flex-grow">
        <div className="relative w-2/3">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <span className="material-icons-outlined">search</span>
          </span>
          <input
            type="text"
            placeholder="Search your course"
            className="w-full pl-10 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Icons and User Info */}
      <div className="flex items-center space-x-6 ml-4">
        {/* Help Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100">
          <span className="material-icons-outlined">help_outline</span>
        </button>

        {/* Chat Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <span className="material-icons-outlined">chat</span>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Notifications Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <span className="material-icons-outlined">notifications</span>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Avatar and Name */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-yellow-400">
            <img
              src="girl-avatar.png"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-gray-800">Adeline H. Dancy</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
