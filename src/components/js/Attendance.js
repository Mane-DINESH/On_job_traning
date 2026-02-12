// import React, { useState, useEffect } from "react";
// import "../css/Attendance.css";

// const Attendance = () => {
//   const today = new Date().toISOString().split("T")[0];

//   const [date, setDate] = useState(today);
//   const [students, setStudents] = useState(() => {
//     const saved = localStorage.getItem("attendanceData");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [name, setName] = useState("");
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   // ✅ Pagination States
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;

//   useEffect(() => {
//     localStorage.setItem("attendanceData", JSON.stringify(students));
//   }, [students]);

//   // ✅ Add Student
//   const addStudent = () => {
//     if (!name.trim()) return;

//     const newStudent = {
//       id: Date.now(),
//       name,
//       records: {
//         [date]: "Absent",
//       },
//     };

//     setStudents([...students, newStudent]);
//     setName("");
//   };

//   // ✅ Toggle Attendance
//   const toggleAttendance = (id) => {
//     const updated = students.map((student) => {
//       if (student.id === id) {
//         const currentStatus =
//           student.records?.[date] === "Present" ? "Absent" : "Present";

//         return {
//           ...student,
//           records: {
//             ...student.records,
//             [date]: currentStatus,
//           },
//         };
//       }
//       return student;
//     });

//     setStudents(updated);
//   };

//   // ✅ Get Status
//   const getStatus = (student) => {
//     return student.records?.[date] || "Absent";
//   };

//   // ✅ Calculate Percentage
//   const calculatePercentage = (student) => {
//     const values = Object.values(student.records || {});
//     if (values.length === 0) return 0;

//     const presentDays = values.filter((v) => v === "Present").length;
//     return ((presentDays / values.length) * 100).toFixed(0);
//   };

//   // ✅ Filtering
//   const filteredStudents = students
//     .filter((s) =>
//       s.name.toLowerCase().includes(search.toLowerCase())
//     )
//     .filter((s) => {
//       if (filter === "All") return true;
//       return getStatus(s) === filter;
//     });

//   // ✅ Pagination Logic
//   const indexOfLast = currentPage * recordsPerPage;
//   const indexOfFirst = indexOfLast - recordsPerPage;
//   const currentStudents = filteredStudents.slice(
//     indexOfFirst,
//     indexOfLast
//   );

//   const totalPages = Math.ceil(
//     filteredStudents.length / recordsPerPage
//   );

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   return (
//     <div className="attendance-container">
//       <h1>Shree Genus It Hub Attendance System</h1>

//       {/* Top Controls */}
//       <div className="top-controls">
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Search student"
//           value={search}
//           onChange={(e) => {
//             setSearch(e.target.value);
//             setCurrentPage(1);
//           }}
//         />

//         <select
//           onChange={(e) => {
//             setFilter(e.target.value);
//             setCurrentPage(1);
//           }}
//         >
//           <option>All</option>
//           <option>Present</option>
//           <option>Absent</option>
//         </select>
//       </div>

//       {/* Add Student */}
//       <div className="add-section">
//         <input
//           type="text"
//           placeholder="Enter student name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button onClick={addStudent}>Add Student</button>
//       </div>

//       {/* Table */}
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Status</th>
//             <th>Percentage</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentStudents.length === 0 ? (
//             <tr>
//               <td colSpan="4">No Records Found</td>
//             </tr>
//           ) : (
//             currentStudents.map((student) => (
//               <tr key={student.id}>
//                 <td>{student.name}</td>
//                 <td
//                   className={
//                     getStatus(student) === "Present"
//                       ? "present"
//                       : "absent"
//                   }
//                 >
//                   {getStatus(student)}
//                 </td>
//                 <td>{calculatePercentage(student)}%</td>
//                 <td>
//                   <button
//                     onClick={() =>
//                       toggleAttendance(student.id)
//                     }
//                   >
//                     Toggle
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="pagination">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>

//         <span>
//           Page {currentPage} of {totalPages || 1}
//         </span>

//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Attendance;



import React, { useState, useEffect } from "react";
import "../css/Attendance.css";

const Attendance = () => {
  const today = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(today);
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("attendanceData");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    localStorage.setItem("attendanceData", JSON.stringify(students));
  }, [students]);

  // ✅ Add Student
  const addStudent = () => {
    if (!name.trim()) return;

    const newStudent = {
      id: Date.now(),
      name,
      records: {
        [date]: "Absent",
      },
    };

    setStudents([...students, newStudent]);
    setName("");
  };

  // ✅ Remove Student
  const removeStudent = (id) => {
    const updatedStudents = students.filter(
      (student) => student.id !== id
    );

    setStudents(updatedStudents);

    // Adjust page if needed
    const newTotalPages = Math.ceil(
      updatedStudents.length / recordsPerPage
    );

    if (currentPage > newTotalPages) {
      setCurrentPage(newTotalPages || 1);
    }
  };

  // ✅ Toggle Attendance
  const toggleAttendance = (id) => {
    const updated = students.map((student) => {
      if (student.id === id) {
        const currentStatus =
          student.records?.[date] === "Present"
            ? "Absent"
            : "Present";

        return {
          ...student,
          records: {
            ...student.records,
            [date]: currentStatus,
          },
        };
      }
      return student;
    });

    setStudents(updated);
  };

  // ✅ Get Status
  const getStatus = (student) => {
    return student.records?.[date] || "Absent";
  };

  // ✅ Calculate Percentage
  const calculatePercentage = (student) => {
    const values = Object.values(student.records || {});
    if (values.length === 0) return 0;

    const presentDays = values.filter(
      (v) => v === "Present"
    ).length;

    return ((presentDays / values.length) * 100).toFixed(0);
  };

  // ✅ Filtering
  const filteredStudents = students
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((s) => {
      if (filter === "All") return true;
      return getStatus(s) === filter;
    });

  // ✅ Pagination Logic
  const indexOfLast = currentPage * recordsPerPage;
  const indexOfFirst = indexOfLast - recordsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredStudents.length / recordsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="attendance-container">
      <h1>Shree Genus It Hub Attendance System</h1>

      {/* Top Controls */}
      <div className="top-controls">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search student"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        <select
          onChange={(e) => {
            setFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option>All</option>
          <option>Present</option>
          <option>Absent</option>
        </select>
      </div>

      {/* Add Student */}
      <div className="add-section">
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addStudent}>
          Add Student
        </button>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Percentage</th>
            <th>Action</th>
            <th>Remove</th>
          </tr>
        </thead>

        <tbody>
          {currentStudents.length === 0 ? (
            <tr>
              <td colSpan="5">
                No Records Found
              </td>
            </tr>
          ) : (
            currentStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>

                <td
                  className={
                    getStatus(student) === "Present"
                      ? "present"
                      : "absent"
                  }
                >
                  {getStatus(student)}
                </td>

                <td>
                  {calculatePercentage(student)}%
                </td>

                <td>
                  <button
                    onClick={() =>
                      toggleAttendance(
                        student.id
                      )
                    }
                  >
                    Toggle
                  </button>
                </td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() =>
                      removeStudent(
                        student.id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of{" "}
          {totalPages || 1}
        </span>

        <button
          onClick={nextPage}
          disabled={
            currentPage === totalPages
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Attendance;
