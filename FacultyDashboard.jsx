import React from 'react';
import FacultyNavBar from './FacultyNavBar';
import { Link, useNavigate } from 'react-router-dom';

export default function FacultyDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/faculty/login');
  };

  return (
    <div>
      <FacultyNavBar />
      <div className="dashboard-container">
        <h2>Faculty Dashboard</h2>
        <div className="dashboard-cards">
          <Link to="/faculty/add-marks" className="card">Add Marks</Link>
          <Link to="/faculty/view-marks" className="card">View Marks</Link>
          <Link to="/faculty/view-students" className="card">View Students</Link>
          <Link to="/faculty/add-report" className="card">Add Report</Link>
          <Link to="/faculty/view-reports" className="card">View Reports</Link>
          <button className="card logout-button" onClick={handleLogout}>Logout</button>
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
          font-weight: bold;
          cursor: pointer;
        }

        .card:hover {
          background-color: #0056b3;
        }

        .logout-button {
          background-color: #dc3545;
        }

        .logout-button:hover {
          background-color: #c82333;
        }
      `}</style>
    </div>
  );
}
