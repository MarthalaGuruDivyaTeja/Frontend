import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';

export default function EditReport() {
  const { reportId } = useParams();
  const navigate = useNavigate();

  const [reportData, setReportData] = useState({ subject: '', marks: '', grade: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/api/reports/${reportId}`)
      .then(res => setReportData(res.data))
      .catch(() => setError('Failed to fetch report data'));
  }, [reportId]);

  const handleChange = (e) => {
    setReportData({ ...reportData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/reports/${reportId}`, reportData);
      setMessage('Report updated successfully!');
      setTimeout(() => navigate('/admin/view-reports'), 1000);
    } catch {
      setError('Failed to update report');
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="form-container">
        <h2>Edit Report</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="success">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input type="text" name="subject" placeholder="Subject" value={reportData.subject} onChange={handleChange} required />
          <input type="number" name="marks" placeholder="Marks" value={reportData.marks} onChange={handleChange} required />
          <input type="text" name="grade" placeholder="Grade" value={reportData.grade} onChange={handleChange} required />
          <button type="submit">Update Report</button>
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
        }

        h2 {
          text-align: center;
        }

        input {
          margin-bottom: 15px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 100%;
        }

        button {
          padding: 10px;
          background-color: #28a745;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          width: 100%;
        }

        button:hover {
          background-color: #218838;
        }

        .success {
          color: green;
          text-align: center;
        }

        .error {
          color: red;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
