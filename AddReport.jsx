import React, { useState } from 'react';
import FacultyNavBar from './FacultyNavBar';

export default function AddReport() {
  const [report, setReport] = useState({
    studentName: '',
    rollNumber: '',
    subject: '',
    marks: '',
    grade: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setReport({ ...report, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReport = { ...report, id: Date.now() };
    const existingReports = JSON.parse(localStorage.getItem('studentReports')) || [];

    localStorage.setItem('studentReports', JSON.stringify([...existingReports, newReport]));

    setMessage('Report added successfully!');
    setReport({ studentName: '', rollNumber: '', subject: '', marks: '', grade: '' });
  };

  return (
    <div>
      <FacultyNavBar />
      <div className="form-container">
        <h2>Add Student Report</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="studentName"
            placeholder="Student Name"
            value={report.studentName}
            onChange={handleChange}
            required
          />
          <input
            name="rollNumber"
            placeholder="Roll Number"
            value={report.rollNumber}
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            placeholder="Subject"
            value={report.subject}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="marks"
            placeholder="Marks (0-100)"
            value={report.marks}
            onChange={handleChange}
            required
          />
          <input
            name="grade"
            placeholder="Grade"
            value={report.grade}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Report</button>
        </form>
        {message && <p className="success">{message}</p>}
      </div>

      <style jsx>{`
        .form-container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          font-family: Arial, sans-serif;
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #333;
        }

        input {
          width: 100%;
          margin-bottom: 12px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .success {
          text-align: center;
          color: green;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
