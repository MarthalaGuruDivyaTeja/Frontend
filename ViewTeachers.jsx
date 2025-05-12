import React, { useEffect, useState } from 'react';
import AdminNavBar from './AdminNavBar';

export default function ViewTeachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const storedTeachers = JSON.parse(localStorage.getItem('teachers')) || [];
    setTeachers(storedTeachers);
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="table-container">
        <h2>Teacher List</h2>
        {teachers.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#888' }}>No teachers found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Subject</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.email}</td>
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
          background: #fff;
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
      `}</style>
    </div>
  );
}
