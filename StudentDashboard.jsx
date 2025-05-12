import React, { useEffect, useState } from 'react';
import StudentNavBar from './StudentNavBar';

export default function StudentDashboard() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const matchedStudent = students.find((s) => s.username === loggedInUsername);
    setStudent(matchedStudent);
  }, []);

  return (
    <div>
      <StudentNavBar />
      <div className="dashboard-container">
        <h2>Student Dashboard</h2>

        {student ? (
          <>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Username:</strong> {student.username}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Class:</strong> {student.studentClass}</p>
            <p><strong>Roll Number:</strong> {student.rollNumber}</p>
          </>
        ) : (
          <p style={{ color: 'red' }}>Student data not found. Please log in again.</p>
        )}
      </div>

      <style>{`
        .dashboard-container {
          max-width: 600px;
          margin: 40px auto;
          background: #fff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          text-align: center;
        }
      `}</style>
    </div>
  );
}
