import React, { useEffect, useState } from 'react';
import FacultyNavBar from './FacultyNavBar';

export default function ViewMarks() {
  const [marksData, setMarksData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const storedData = localStorage.getItem('reports');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        if (Array.isArray(parsedData)) {
          setMarksData(parsedData);
        } else {
          setError('Invalid marks format found in storage.');
        }
      }
    } catch (err) {
      setError('Failed to load marks data.');
      console.error(err);
    }
  }, []);

  return (
    <div>
      <FacultyNavBar />
      <div className="container">
        <h2>Student Marks Report</h2>
        {error && <p className="error">{error}</p>}
        {marksData.length === 0 ? (
          <p className="message">No marks available. Please add data.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Subject</th>
                <th>Marks</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {marksData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.studentId || 'N/A'}</td>
                  <td>{entry.subject || 'N/A'}</td>
                  <td>{entry.marks ?? 'N/A'}</td>
                  <td>{entry.grade || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 30px auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }

        h2 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }

        .error {
          color: red;
          text-align: center;
        }

        .message {
          color: #666;
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 10px;
          border: 1px solid #ccc;
          text-align: center;
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
