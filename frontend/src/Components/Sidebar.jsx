import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r">
      {/* Logo */}
      <div className="p-4 border-b flex items-center">
        <img src="quyl.png" alt="Quyl Logo" className="w-28 h-16 mr-3" />
        {/* <h1 className="text-2xl font-bold text-gray-800">Quyl.</h1> */}
      </div>

      {/* Menu */}
      <ul className="mt-6 space-y-1">
        {/* Dashboard */}
        <li className="flex items-center px-6 py-3 hover:bg-gray-100 cursor-pointer">
          <DashboardIcon className="mr-4 text-gray-500" />
          <span className="font-medium text-gray-500">Dashboard</span>
        </li>

        {/* Students (Active Item) */}
        <li className="flex items-center px-6 py-3 bg-gray-100 cursor-pointer">
          <PeopleIcon className="mr-4 text-black" />
          <span className="font-semibold text-black">Students</span>
        </li>

        {/* Chapter */}
        <li className="flex items-center px-6 py-3 hover:bg-gray-100 cursor-pointer">
          <MenuBookIcon className="mr-4 text-gray-500" />
          <span className="font-medium text-gray-500">Chapter</span>
        </li>

        {/* Help */}
        <li className="flex items-center px-6 py-3 hover:bg-gray-100 cursor-pointer">
          <HelpOutlineIcon className="mr-4 text-gray-500" />
          <span className="font-medium text-gray-500">Help</span>
        </li>

        {/* Reports */}
        <li className="flex items-center px-6 py-3 hover:bg-gray-100 cursor-pointer">
          <BarChartIcon className="mr-4 text-gray-500" />
          <span className="font-medium text-gray-500">Reports</span>
        </li>

        {/* Settings */}
        <li className="flex items-center px-6 py-3 hover:bg-gray-100 cursor-pointer">
          <SettingsIcon className="mr-4 text-gray-500" />
          <span className="font-medium text-gray-500">Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
