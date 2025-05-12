import React, { useEffect, useState } from 'react';
import StudentNavBar from './StudentNavBar';

export default function ViewMyReport() {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const loggedInName = localStorage.getItem('loggedInStudentName');
      const loggedInRoll = localStorage.getItem('loggedInRollNumber');
      const loggedInGrade = localStorage.getItem('loggedInGrade');

      if (!loggedInName || !loggedInRoll || !loggedInGrade) {
        setError('Missing login credentials. Please log in again.');
        return;
      }

      const allStudents = JSON.parse(localStorage.getItem('students')) || [];
      const allReports = JSON.parse(localStorage.getItem('reports')) || [];

      const matchedStudent = allStudents.find(
        student =>
          student.name?.toLowerCase() === loggedInName.toLowerCase() &&
          student.rollNumber?.toString() === loggedInRoll.toString() &&
          student.grade?.toUpperCase() === loggedInGrade.toUpperCase()
      );

      if (!matchedStudent) {
        setError('Login credentials do not match any student.');
        return;
      }

      const filteredReports = allReports.filter(
        report =>
          report.studentName?.toLowerCase() === loggedInName.toLowerCase() &&
          report.rollNumber?.toString() === loggedInRoll.toString() &&
          report.grade?.toUpperCase() === loggedInGrade.toUpperCase()
      );

      if (filteredReports.length === 0) {
        setError('No reports found for this student.');
      } else {
        setReports(filteredReports);
      }
    } catch (err) {
      console.error('Error fetching reports:', err);
      setError('An unexpected error occurred while loading reports.');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <StudentNavBar />
      <div className="table-container">
        <h2>My Reports</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index}>
                  <td>{report.subject || 'N/A'}</td>
                  <td>{report.marks !== undefined ? report.marks : 'N/A'}</td>
                  <td>{report.grade || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style>{`
        .table-container {
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          text-align: center;
        }
        h2 {
          font-size: 2rem;
          color: #2c3e50;
        }
        .error {
          color: #e74c3c;
          margin-top: 10px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        th, td {
          padding: 12px;
          border: 1px solid #ccc;
        }
        th {
          background-color: #3498db;
          color: white;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      `}</style>
    </>
  );
}
