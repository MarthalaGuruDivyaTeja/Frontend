import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadStudents = () => {
      try {
        const storedStudents = localStorage.getItem('students');
        if (storedStudents) {
          setStudents(JSON.parse(storedStudents));
        } else {
          setStudents([]);
        }
      } catch (err) {
        setError('Failed to load students from localStorage');
        console.error(err);
      }
    };

    loadStudents();
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="table-container">
        <h2>Student List</h2>
        {error && <p className="error">{error}</p>}
        {students.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No students found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Class</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name || 'N/A'}</td>
                  <td>{student.rollNumber || 'N/A'}</td>
                  <td>{student.className || 'N/A'}</td>
                  <td>{student.email || 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style jsx>{`
        .table-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        th {
          background-color: #007bff;
          color: white;
        }

        .error {
          color: red;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
