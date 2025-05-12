import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';
import AddReport from '../faculty/AddReport';

export default function ViewReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedReports = localStorage.getItem('studentReports');
    if (storedReports) {
      setReports(JSON.parse(storedReports));
    }
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="container">
        <h2>Student Reports</h2>
        {reports.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>No reports available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id}>
                  <td>{report.studentName}</td>
                  <td>{report.rollNumber}</td>
                  <td>{report.subject}</td>
                  <td>{report.marks}</td>
                  <td>{report.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          padding: 10px;
          border: 1px solid #ccc;
          text-align: left;
        }

        th {
          background-color: #007bff;
          color: white;
        }

        tr:nth-child(even) {
          background-color: #f9f9f9;
        }
      `}</style>
    </div>
  );
}
