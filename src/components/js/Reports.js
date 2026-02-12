// import React, { useState } from "react";
// import "../css/Reports.css";

// const Reports = ({ students }) => {
//   const [selectedMonth, setSelectedMonth] = useState(
//     new Date().toISOString().slice(0, 7)
//   );

//   // ✅ Get number of days in selected month
//   const getDaysInMonth = (month) => {
//     const [year, monthIndex] = month.split("-");
//     return new Date(year, monthIndex, 0).getDate();
//   };

//   const totalDaysInMonth = getDaysInMonth(selectedMonth);

//   const getDateString = (day) => {
//     return `${selectedMonth}-${String(day).padStart(2, "0")}`;
//   };

//   const calculateSummary = (student) => {
//     let present = 0;
//     let total = 0;

//     for (let day = 1; day <= totalDaysInMonth; day++) {
//       const dateKey = getDateString(day);
//       if (student.records?.[dateKey]) {
//         total++;
//         if (student.records[dateKey] === "Present") {
//           present++;
//         }
//       }
//     }

//     const percentage =
//       total === 0 ? 0 : ((present / total) * 100).toFixed(0);

//     return { present, percentage };
//   };

//   return (
//     <div className="reports-container">
//       <h1>Monthly Attendance Detailed Report</h1>

//       <div className="month-selector">
//         <input
//           type="month"
//           value={selectedMonth}
//           onChange={(e) => setSelectedMonth(e.target.value)}
//         />
//       </div>

//       <div className="table-wrapper">
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>

//               {/* Dynamic Date Headers */}
//               {[...Array(totalDaysInMonth)].map((_, index) => (
//                 <th key={index + 1}>{index + 1}</th>
//               ))}

//               <th>Present</th>
//               <th>%</th>
//             </tr>
//           </thead>

//           <tbody>
//             {students.map((student) => {
//               const summary = calculateSummary(student);

//               return (
//                 <tr key={student.id}>
//                   <td>{student.name}</td>

//                   {[...Array(totalDaysInMonth)].map((_, index) => {
//                     const day = index + 1;
//                     const dateKey = getDateString(day);
//                     const status =
//                       student.records?.[dateKey];

//                     return (
//                       <td
//                         key={day}
//                         className={
//                           status === "Present"
//                             ? "present"
//                             : status === "Absent"
//                             ? "absent"
//                             : "no-record"
//                         }
//                       >
//                         {status === "Present"
//                           ? "P"
//                           : status === "Absent"
//                           ? "A"
//                           : "-"}
//                       </td>
//                     );
//                   })}

//                   <td>{summary.present}</td>
//                   <td>{summary.percentage}%</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Reports;




import React, { useState, useMemo } from "react";
import "../css/Reports.css";

const Reports = ({ students = [] }) => {
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toISOString().slice(0, 7)
  );

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  /* ===============================
     Get Total Days in Selected Month
  ==================================*/
  const getDaysInMonth = (month) => {
    const [year, monthIndex] = month.split("-");
    return new Date(year, monthIndex, 0).getDate();
  };

  const totalDays = useMemo(
    () => getDaysInMonth(selectedMonth),
    [selectedMonth]
  );

  /* ===============================
     Format Date (YYYY-MM-DD)
  ==================================*/
  const getDateKey = (day) => {
    return `${selectedMonth}-${String(day).padStart(2, "0")}`;
  };

  /* ===============================
     Calculate Monthly Summary
  ==================================*/
  const calculateSummary = (student) => {
    let present = 0;
    let recordedDays = 0;

    for (let day = 1; day <= totalDays; day++) {
      const dateKey = getDateKey(day);
      const status = student.records?.[dateKey];

      if (status) {
        recordedDays++;
        if (status === "Present") present++;
      }
    }

    const percentage =
      recordedDays === 0
        ? 0
        : ((present / recordedDays) * 100).toFixed(0);

    return { present, percentage };
  };

  /* ===============================
     Pagination Logic
  ==================================*/
  const totalPages = Math.ceil(
    students.length / studentsPerPage
  );

  const indexOfLast = currentPage * studentsPerPage;
  const indexOfFirst = indexOfLast - studentsPerPage;

  const currentStudents = students.slice(
    indexOfFirst,
    indexOfLast
  );

  const goToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  /* ===============================
     Render
  ==================================*/
  return (
    <div className="reports-container">
      <h1>Monthly Attendance Detailed Report</h1>

      {/* Month Selector */}
      <div className="month-selector">
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => {
            setSelectedMonth(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Name</th>

              {[...Array(totalDays)].map((_, index) => (
                <th key={index + 1}>{index + 1}</th>
              ))}

              <th>Present</th>
              <th>%</th>
            </tr>
          </thead>

          <tbody>
            {currentStudents.length === 0 ? (
              <tr>
                <td colSpan={totalDays + 4}>
                  No Students Found
                </td>
              </tr>
            ) : (
              currentStudents.map((student, index) => {
                const summary =
                  calculateSummary(student);

                return (
                  <tr key={student.id}>
                    {/* ✅ Auto Roll Number */}
                    <td>
                      {indexOfFirst + index + 1}
                    </td>

                    <td>{student.name}</td>

                    {[...Array(totalDays)].map(
                      (_, dayIndex) => {
                        const day =
                          dayIndex + 1;
                        const dateKey =
                          getDateKey(day);
                        const status =
                          student.records?.[
                            dateKey
                          ];

                        return (
                          <td
                            key={day}
                            className={
                              status === "Present"
                                ? "present"
                                : status === "Absent"
                                ? "absent"
                                : "no-record"
                            }
                          >
                            {status ===
                            "Present"
                              ? "P"
                              : status ===
                                "Absent"
                              ? "A"
                              : "-"}
                          </td>
                        );
                      }
                    )}

                    <td>{summary.present}</td>
                    <td>{summary.percentage}%</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={goToPrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of{" "}
          {totalPages || 1}
        </span>

        <button
          onClick={goToNext}
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Reports;
