import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import DefaultHome from "./Home";
import UserHome from "./User/js/UserHome";
import LoginRegister from "./Login";
import Courses from "./User/js/Courses";
import About from "./User/js/about";
import Footer from "./Footer";
import AdminDashboard from "./Admin/js/AdminDashboard";
import Courses1 from "./Admin/js/courses";
import Offers from "./Admin/js/Offers";
import Users from "./Admin/js/Users";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Example: check login from localStorage
  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");
    if (user === "true") setIsLoggedIn(true);
  }, []);

  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <UserHome /> : <DefaultHome />}
        />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admincourses" element={<Courses1 />} />
        <Route path="/adminoffers" element={<Offers />} />
        <Route path="/adminusers" element={<Users />} />
        {/* Add other routes like /courses etc */}
      </Routes>
    </Router>
  );
}

export default App;
