import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ViewReports from '../faculty/ViewReports';

export default function StudentNavBar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('student');
    navigate('/student/login');
  };

  return (
    <>
      <style>{`
        .student-navbar {
          background-color: #3498db;
          color: white;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          flex-wrap: wrap;
        }

        .student-navbar h2 {
          margin: 0;
          font-size: 1.8rem;
          flex: 1 1 auto;
        }

        .student-navbar ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex: 2 1 auto;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .student-navbar li {
          margin-left: 20px;
        }

        .student-navbar a {
          color: white;
          text-decoration: none;
          font-size: 1rem;
          transition: color 0.3s;
        }

        .student-navbar a:hover {
          color: #ecf0f1;
        }

        .student-navbar button {
          background: none;
          border: none;
          color: white;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.3s;
        }

        .student-navbar button:hover {
          color: #ecf0f1;
        }

        @media (max-width: 600px) {
          .student-navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .student-navbar ul {
            flex-direction: column;
            width: 100%;
            margin-top: 10px;
          }

          .student-navbar li {
            margin: 10px 0;
            margin-left: 0;
          }
        }
      `}</style>

      <div className="student-navbar">
        <h2>Student Panel</h2>
        <ul>
          <li><Link to="/student/dashboard">Dashboard</Link></li>
          <li><Link to="/student/view-my-report">My Report</Link></li>
          <li><Link to="/student/view-profile">My Profile</Link></li>
          <li><button onClick={logout}>Logout</button></li>
        </ul>
      </div>
    </>
  );
}
