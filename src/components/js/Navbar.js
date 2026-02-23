import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* ✅ Check login state */
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, [location.pathname]);

  /* ✅ Logout */
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    window.location.reload();   // 🔥 force refresh
  };

  /* ✅ Hide Navbar on Admin Pages */
  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">ShreeGeniusItHub</Link>

        <ul className={`nav-menu ${open ? "active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          <li>
            {isLoggedIn ? (
              <button className="nav-links logout-btn" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-links active" : "nav-links"
                }
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>

        <div className="nav-icon" onClick={() => setOpen(!open)}>
          {open ? "✖" : "☰"}
        </div>
      </div>
    </nav>
  );
}
  