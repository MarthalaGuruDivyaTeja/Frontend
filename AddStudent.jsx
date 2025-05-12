import React, { useState } from 'react';
import AdminNavBar from './AdminNavBar';

export default function AddStudent() {
  const [student, setStudent] = useState({
    name: '',
    rollNumber: '',
    studentClass: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.rollNumber || !student.studentClass || !student.email || !student.username || !student.password) {
      alert('Please fill in all fields.');
      return;
    }

    const existingStudents = JSON.parse(localStorage.getItem('students')) || [];

    if (existingStudents.some(s => s.username === student.username)) {
      alert('Username already exists. Please choose a different one.');
      return;
    }

    existingStudents.push(student);
    localStorage.setItem('students', JSON.stringify(existingStudents));

    alert('Student added successfully!');

    setStudent({
      name: '',
      rollNumber: '',
      studentClass: '',
      email: '',
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <AdminNavBar />
      <div className="form-container">
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={student.name} onChange={handleChange} required />

          <label>Roll Number:</label>
          <input type="text" name="rollNumber" value={student.rollNumber} onChange={handleChange} required />

          <label>Class:</label>
          <input type="text" name="studentClass" value={student.studentClass} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} required />

          <label>Username:</label>
          <input type="text" name="username" value={student.username} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={student.password} onChange={handleChange} required />

          <button type="submit">Add Student</button>
        </form>
      </div>

      <style jsx>{`
        .form-container {
          max-width: 500px;
          margin: 40px auto;
          padding: 25px;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-top: 10px;
          font-weight: bold;
        }

        input {
          padding: 10px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          margin-top: 20px;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
