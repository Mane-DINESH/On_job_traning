// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/js/Navbar";
// import Dashboard from "./components/js/Dashboard"
// import Students from "./components/js/Students";
// import Attendance from "./components/js/Attendance";
// import Reports from "./components/js/Reports";

// function App() {
//   const [students, setStudents] = useState(
//   JSON.parse(localStorage.getItem("attendanceData")) || []
// );

// useEffect(() => {
//   localStorage.setItem("attendanceData", JSON.stringify(students));
// }, [students]);
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/students" element={<Students />} />
//         <Route path="/attendance" element={<Attendance />} />
//         <Route path="/reports" element={<Reports />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/js/Navbar";
import Dashboard from "./components/js/Dashboard";
// import Students from "./components/js/Students";
import Attendance from "./components/js/Attendance";
import Reports from "./components/js/Reports";

function App() {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("attendanceData")) || []
  );

  useEffect(() => {
    localStorage.setItem("attendanceData", JSON.stringify(students));
  }, [students]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Pass students to Dashboard */}
        <Route path="/" element={<Dashboard students={students} />} />

        {/* Pass students & setStudents to Students */}
        {/* <Route
          path="/students"
          element={<Students students={students} setStudents={setStudents} />}
        /> */}

        {/* Pass students & setStudents to Attendance */}
        <Route
          path="/attendance"
          element={<Attendance students={students} setStudents={setStudents} />}
        />

        <Route path="/reports" element={<Reports students={students} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
