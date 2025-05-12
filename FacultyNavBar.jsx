import React from 'react';
import { Link } from 'react-router-dom';

export default function FacultyNavBar() {
  return (
    <nav className="faculty-navbar">
      <h3>Faculty Panel</h3>
      <ul>
        <li><Link to="/faculty/dashboard">Dashboard</Link></li>
        <li><Link to="/faculty/add-marks">Add Marks</Link></li>
        <li><Link to="/faculty/view-marks">View Marks</Link></li> 
        <li><Link to="/faculty/view-students">Students</Link></li>
        <li><Link to="/faculty/add-report">Add Report</Link></li>
        <li><Link to="/faculty/view-reports">Reports</Link></li>
      </ul>

      <style jsx>{`
        .faculty-navbar {
          background-color: #007bff;
          color: white;
          padding: 15px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faculty-navbar h3 {
          margin: 0;
          font-size: 24px;
        }

        .faculty-navbar ul {
          list-style-type: none;
          padding: 0;
          margin: 10px 0 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faculty-navbar li {
          margin: 10px 0;
        }

        .faculty-navbar a {
          color: white;
          text-decoration: none;
          padding: 10px 15px;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .faculty-navbar a:hover {
          background-color: #0056b3;
        }
      `}</style>
    </nav>
  );
}
