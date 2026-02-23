
// import '../css/adminlayout.css'
// export default function AdminLayout() {
//   return (
//     <div className="admin-dashboard">
//       <Sidebar />

//       <div className="dashboard-main">
//         <Navbar />

//         <div className="dashboard-content">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// }



import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../css/AdminDashboard.css";

export default function AdminLayout() {
  const navigate = useNavigate();

  /* 🔐 Protect admin routes */
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!loggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="admin-dashboard">
      <Sidebar />

      <div className="dashboard-main">
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
