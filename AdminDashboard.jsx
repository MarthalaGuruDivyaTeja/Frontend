import React from 'react';
import { Link } from 'react-router-dom';
import AdminNavBar from './AdminNavBar';

export default function AdminDashboard() {
  return (
    <div>
      <AdminNavBar />
      <div className="dashboard-container">
        <h2>Admin Dashboard</h2>
        <div className="dashboard-cards">
          <Link to="/admin/add-student" className="card">Add Student</Link>
          <Link to="/admin/view-students" className="card">View Students</Link>
          <Link to="/admin/add-teacher" className="card">Add Teacher</Link> 
          <Link to="/admin/view-teachers" className="card">View Teachers</Link>
          <Link to="/admin/view-reports" className="card">View Reports</Link>
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
        }

        h2 {
          margin-bottom: 20px;
        }

        .dashboard-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .card {
          display: block;
          width: 150px;
          padding: 20px;
          background-color: #007bff;
          color: white;
          text-align: center;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s;
        }

        .card:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
