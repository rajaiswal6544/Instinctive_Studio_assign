import React from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Table from "./Components/Table";
import Sidebar from "./Components/Sidebar";

const StudentDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="p-4">
          <Filter />
          <Table />
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;