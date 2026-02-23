import React, { useState, useEffect } from "react";

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  // Simulate fetching from API
  useEffect(() => {
    const fetchUsers = async () => {
      const data = [
        { id: 1, name: "Priya K.", email: "dinesh@example.com", role: "Student" },
        { id: 2, name: "Raj S.", email: "raj@example.com", role: "Student" },
        { id: 3, name: "Admin", email: "admin@shreegeniusithub.com", role: "Admin" },
      ];
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="table-container">
      <h3>Users</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
