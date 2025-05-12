import React, { useState } from 'react';
import FacultyNavBar from './FacultyNavBar';

export default function AddMarks() {
  const [formData, setFormData] = useState({ studentId: '', subject: '', marks: '', grade: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Get existing data from localStorage
      const existingReports = JSON.parse(localStorage.getItem('reports')) || [];

      // Add new entry
      existingReports.push(formData);

      // Save back to localStorage
      localStorage.setItem('reports', JSON.stringify(existingReports));

      setMessage('Marks added successfully');

      // Reset form
      setFormData({ studentId: '', subject: '', marks: '', grade: '' });
    } catch {
      setMessage('Failed to add marks');
    }
  };

  return (
    <div>
      <FacultyNavBar />
      <div className="form-container">
        <h2>Add Marks</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            name="studentId"
            placeholder="Student ID"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
          <input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <input
            name="marks"
            type="number"
            placeholder="Marks"
            value={formData.marks}
            onChange={handleChange}
            required
          />
          <input
            name="grade"
            placeholder="Grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .form-container {
          max-width: 400px;
          margin: 0 auto;
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

        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #218838;
        }

        p {
          text-align: center;
          color: ${message === 'Marks added successfully' ? '#28a745' : '#d9534f'};
        }
      `}</style>
    </div>
  );
}
