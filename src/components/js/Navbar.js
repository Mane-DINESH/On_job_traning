import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Attendance System</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/attendance">Attendance</Link>
        <Link to="/reports">Reports</Link>
      </div>
    </nav>
  );
};

export default Navbar;
