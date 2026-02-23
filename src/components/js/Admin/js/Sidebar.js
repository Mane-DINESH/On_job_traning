import React from "react";
import { NavLink } from "react-router-dom";
import '../css/Sidebar.css'
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin" className={({ isActive }) => isActive ? "active" : ""}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminusers" className={({ isActive }) => isActive ? "active" : ""}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/admincourses" className={({ isActive }) => isActive ? "active" : ""}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/adminoffers" className={({ isActive }) => isActive ? "active" : ""}>
              Offers
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
