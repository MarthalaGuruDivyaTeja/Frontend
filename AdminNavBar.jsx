import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminNavBar() {
  return (
    <nav className="admin-navbar">
      <h1>Student Report Admin</h1>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/add-student">Add Student</Link></li>
        <li><Link to="/admin/view-students">View Students</Link></li>
        <li><Link to="/admin/add-teacher">Add Teacher</Link></li> 
        <li><Link to="/admin/view-teachers">View Teachers</Link></li>
        <li><Link to="/admin/view-reports">View Reports</Link></li>
      </ul>

      <style jsx>{`
        .admin-navbar {
          background-color: #007bff;
          color: white;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          margin: 0;
          font-size: 24px;
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin: 10px 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        li {
          margin: 5px 0;
        }

        a {
          color: white;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        a:hover {
          background-color: #0056b3;
        }
      `}</style>
    </nav>
  );
}
