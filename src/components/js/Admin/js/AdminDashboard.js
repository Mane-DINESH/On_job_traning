import React from "react";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import UsersTable from "./UsersTable";
import { FaUserGraduate, FaBook, FaTags } from "react-icons/fa";

import '../css/AdminDashboard.css'
export default function AdminDashboard() {

  const handleLogout = () => {
    // Logic for logout
    console.log("Logout clicked");
  };

  return (
    <div className="admin-dashboard">
      <Sidebar onLogout={handleLogout}  />
      <div className="dashboard-main">
      
        {/* Cards */}
        <div className="dashboard-cards">
          <DashboardCard title="Total Users" value="1200" icon={<FaUserGraduate />} />
          <DashboardCard title="Courses" value="35" icon={<FaBook />} />
          <DashboardCard title="Active Offers" value="5" icon={<FaTags />} />
        </div>

        {/* Users Table */}
        <UsersTable />

        {/* Future Sections: Courses Table, Offers Table */}
      </div>
    </div>
  );
}
