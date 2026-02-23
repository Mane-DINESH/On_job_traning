import React, { useState } from "react";

import "../css/Courses.css"
import Sidebar from './Sidebar';
const initialCourses = [
  { id: 1, title: "React JS", category: "Frontend", price: "1999", status: true },
  { id: 2, title: "Node JS", category: "Backend", price: "2499", status: true },
  { id: 3, title: "MongoDB", category: "Database", price: "1499", status: false },
];

export default function Courses() {
  const [courses, setCourses] = useState(initialCourses);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    price: "",
  });

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = () => {
    if (!formData.title || !formData.category || !formData.price) return;

    if (editCourse) {
      setCourses(courses.map(c =>
        c.id === editCourse.id ? { ...c, ...formData } : c
      ));
    } else {
      setCourses([
        ...courses,
        { id: Date.now(), ...formData, status: true },
      ]);
    }

    setFormData({ title: "", category: "", price: "" });
    setShowModal(false);
    setEditCourse(null);
  };

  const handleEdit = (course) => {
    setEditCourse(course);
    setFormData(course);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter(c => c.id !== id));
  };

  const toggleStatus = (id) => {
    setCourses(courses.map(c =>
      c.id === id ? { ...c, status: !c.status } : c
    ));
  };

  return (
    <>
    
    <Sidebar/>
    <div className="admin-courses">
      <div className="header">
        <h2>Courses Management</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add Course
        </button>
      </div>

      <input
        type="text"
        placeholder="Search course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price (₹)</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredCourses.map((course, index) => (
            <tr key={course.id}>
              <td>{index + 1}</td>
              <td>{course.title}</td>
              <td>{course.category}</td>
              <td>{course.price}</td>

              <td>
                <button
                  className={`status ${course.status ? "active" : "inactive"}`}
                  onClick={() => toggleStatus(course.id)}
                >
                  {course.status ? "Active" : "Inactive"}
                </button>
              </td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(course)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(course.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredCourses.length === 0 && (
            <tr>
              <td colSpan="6" className="no-data">No courses found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editCourse ? "Edit Course" : "Add Course"}</h3>

            <input
              type="text"
              placeholder="Course title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />

            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            />

            <input
              type="number"
              placeholder="Price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />

            <div className="modal-actions">
              <button onClick={handleSubmit} className="save-btn">
                {editCourse ? "Update" : "Save"}
              </button>
              <button onClick={() => setShowModal(false)} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}