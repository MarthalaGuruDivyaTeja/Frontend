import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f0f4f8;
          color: #333;
        }
        .container {
          max-width: 400px;
          margin: 100px auto;
          padding: 30px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          text-align: center;
        }
        .container h3 {
          margin-bottom: 20px;
          font-size: 2rem;
          color: #2c3e50;
        }
        .container input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 1rem;
        }
        .container button {
          width: 100%;
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .container button:hover {
          background: #2980b9;
        }
        .container p.error {
          color: #e74c3c;
          margin: 10px 0;
        }
        @media (max-width: 400px) {
          .container {
            margin: 50px 10px;
            padding: 20px;
          }
          .container h3 {
            font-size: 1.5rem;
          }
          .container input {
            padding: 8px;
          }
          .container button {
            padding: 8px;
          }
        }
      `}</style>
      <div className="container">
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} required /><br />
          <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} required /><br />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
