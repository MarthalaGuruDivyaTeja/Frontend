import React, { useState } from 'react';
import AdminNavBar from './AdminNavBar';

export default function AddTeacher() {
  const [teacher, setTeacher] = useState({
    name: '',
    subject: '',
    email: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!teacher.name || !teacher.subject || !teacher.email || !teacher.username || !teacher.password) {
      alert('Please fill in all fields.');
      return;
    }

    const existingTeachers = JSON.parse(localStorage.getItem('teachers')) || [];

    if (existingTeachers.some(t => t.username === teacher.username)) {
      alert('Username already exists. Please choose a different one.');
      return;
    }

    existingTeachers.push(teacher);
    localStorage.setItem('teachers', JSON.stringify(existingTeachers));

    alert('Teacher added successfully!');

    setTeacher({
      name: '',
      subject: '',
      email: '',
      username: '',
      password: ''
    });
  };

  return (
    <div>
      <AdminNavBar />
      <div className="form-container">
        <h2>Add Teacher</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={teacher.name} onChange={handleChange} required />

          <label>Subject:</label>
          <input type="text" name="subject" value={teacher.subject} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={teacher.email} onChange={handleChange} required />

          <label>Username:</label>
          <input type="text" name="username" value={teacher.username} onChange={handleChange} required />

          <label>Password:</label>
          <input type="password" name="password" value={teacher.password} onChange={handleChange} required />

          <button type="submit">Add Teacher</button>
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
