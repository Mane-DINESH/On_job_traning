import React, { useState } from "react";
import '../css/Users.css'
import Sidebar from "./Sidebar";
const initialUsers = [
  { id: 1, name: "Dinesh Mane", email: "dinesh@gmail.com", role: "Admin", status: true },
  { id: 2, name: "Rahul Sharma", email: "rahul@gmail.com", role: "User", status: true },
  { id: 3, name: "Priya Verma", email: "priya@gmail.com", role: "User", status: false },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "User",
  });

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;

    if (editUser) {
      setUsers(users.map(u =>
        u.id === editUser.id ? { ...u, ...formData } : u
      ));
    } else {
      setUsers([
        ...users,
        { id: Date.now(), ...formData, status: true },
      ]);
    }

    setFormData({ name: "", email: "", role: "User" });
    setShowModal(false);
    setEditUser(null);
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setFormData(user);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  const toggleStatus = (id) => {
    setUsers(users.map(u =>
      u.id === id ? { ...u, status: !u.status } : u
    ));
  };

  return (
    <>
    <Sidebar/>
    <div className="admin-users">
      <div className="header">
        <h2>User Management</h2>
        <button className="add-btn" onClick={() => setShowModal(true)}>
          + Add User
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <span className={`role ${user.role.toLowerCase()}`}>
                  {user.role}
                </span>
              </td>

              <td>
                <button
                  className={`status ${user.status ? "active" : "inactive"}`}
                  onClick={() => toggleStatus(user.id)}
                >
                  {user.status ? "Active" : "Inactive"}
                </button>
              </td>

              <td>
                <button className="edit-btn" onClick={() => handleEdit(user)}>
                  Edit
                </button>
                <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan="6" className="no-data">No users found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editUser ? "Edit User" : "Add User"}</h3>

            <input
              type="text"
              placeholder="Full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>

            <div className="modal-actions">
              <button onClick={handleSubmit} className="save-btn">
                {editUser ? "Update" : "Save"}
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