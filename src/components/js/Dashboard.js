import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  const today = new Date().toISOString().split("T")[0];

  // Load students from localStorage
  const loadData = () => {
    const saved = JSON.parse(localStorage.getItem("attendanceData")) || [];
    setStudents(saved);
  };

  useEffect(() => {
    loadData();

    // Listen for changes in localStorage
    window.addEventListener("storage", loadData);

    return () => {
      window.removeEventListener("storage", loadData);
    };
  }, []);

  const totalStudents = students.length;

  const presentToday = students.filter(
    (s) => s.records && s.records[today] === "Present"
  ).length;

  const absentToday = totalStudents - presentToday;

  const overallPercentage =
    totalStudents === 0
      ? 0
      : ((presentToday / totalStudents) * 100).toFixed(0);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Attendance Dashboard</h1>

      <div className="card-grid">
        <div className="dashboard-card">
          <h3>Total Students</h3>
          <p>{totalStudents}</p>
        </div>

        <div className="dashboard-card present-card">
          <h3>Present Today</h3>
          <p>{presentToday}</p>
        </div>

        <div className="dashboard-card absent-card">
          <h3>Absent Today</h3>
          <p>{absentToday}</p>
        </div>

        <div className="dashboard-card percentage-card">
          <h3>Attendance %</h3>
          <p>{overallPercentage}%</p>
        </div>
      </div>

      <div className="dashboard-info">
        <h2>System Overview</h2>
        <p>
          Manage student attendance efficiently. Track daily records and monitor performance.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

