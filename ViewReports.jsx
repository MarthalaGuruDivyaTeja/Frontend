import React, { useEffect, useState } from 'react';
import FacultyNavBar from './FacultyNavBar';

export default function ViewReports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const storedReports = JSON.parse(localStorage.getItem('studentReports')) || [];
    setReports(storedReports);
  }, []);

  return (
    <div>
      <FacultyNavBar />
      <div className="table-container">
        <h2>Student Reports</h2>
        {reports.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>No reports available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Roll Number</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
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
        .table-container {
          max-width: 800px;
          margin: 20px auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 5px;
          border: 1px solid #ccc;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          color: #333;
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
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
}
