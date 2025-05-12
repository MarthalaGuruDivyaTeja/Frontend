import React, { useEffect, useState } from 'react';
import FacultyNavBar from './FacultyNavBar';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = localStorage.getItem('students');
    if (storedStudents) {
      try {
        const parsed = JSON.parse(storedStudents);
        setStudents(Array.isArray(parsed) ? parsed : []);
      } catch (e) {
        console.error("Error parsing students from localStorage", e);
        setStudents([]);
      }
    }
  }, []);

  return (
    <div>
      <FacultyNavBar />
      <div className="table-container">
        <h2>Students</h2>
        {students.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No student records available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Class</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, index) => (
                <tr key={index}>
                  <td>{s.name || 'N/A'}</td>
                  <td>{s.rollNumber || 'N/A'}</td>
                  <td>{s.className || s.studentClass || 'N/A'}</td>
                  <td>{s.email || 'N/A'}</td>
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
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          background-color: #f9f9f9;
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
          border: 1px solid #ccc;
          padding: 10px;
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
