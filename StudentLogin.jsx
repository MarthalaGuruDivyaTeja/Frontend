import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const students = JSON.parse(localStorage.getItem('students')) || [];
    const matchedStudent = students.find(
      (s) => s.username === username && s.password === password
    );

    if (matchedStudent) {
      localStorage.setItem('loggedInUsername', matchedStudent.username);
      navigate('/student/dashboard');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>

      <style>{`
        .login-container {
          max-width: 400px;
          margin: 100px auto;
          padding: 20px;
          text-align: center;
          border: 1px solid #ddd;
          border-radius: 10px;
        }
        input {
          width: 90%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
        button {
          padding: 10px 20px;
          background-color: #007bff;
          border: none;
          color: white;
          border-radius: 6px;
        }
        .error {
          color: red;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}
