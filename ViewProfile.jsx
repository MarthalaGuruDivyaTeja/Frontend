import React, { useState, useEffect } from 'react';
import StudentNavBar from './StudentNavBar';

export default function StudentProfile() {
  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentClass: '',
    rollNumber: ''
  });
  const [message, setMessage] = useState('');
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  useEffect(() => {
    const loggedInUsername = localStorage.getItem('loggedInUsername');
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const profileUpdatedFlags = JSON.parse(localStorage.getItem('profileUpdatedFlags')) || {};

    const matchedStudent = students.find(s => s.username === loggedInUsername);

    if (matchedStudent) {
      setStudent(matchedStudent);
      setFormData({
        name: matchedStudent.name,
        email: matchedStudent.email,
        studentClass: matchedStudent.studentClass,
        rollNumber: matchedStudent.rollNumber
      });

      setIsProfileUpdated(!!profileUpdatedFlags[matchedStudent.username]);
      localStorage.setItem('student', JSON.stringify(matchedStudent));
    }
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = JSON.parse(localStorage.getItem('students')) || [];

    const updatedStudents = students.map(s =>
      s.username === student.username ? { ...s, ...formData } : s
    );

    localStorage.setItem('students', JSON.stringify(updatedStudents));

    const updatedStudent = updatedStudents.find(s => s.username === student.username);
    localStorage.setItem('student', JSON.stringify(updatedStudent));

    // Save that this user has updated their profile
    const profileUpdatedFlags = JSON.parse(localStorage.getItem('profileUpdatedFlags')) || {};
    profileUpdatedFlags[student.username] = true;
    localStorage.setItem('profileUpdatedFlags', JSON.stringify(profileUpdatedFlags));

    setIsProfileUpdated(true);
    setMessage('Profile updated successfully and saved.');
  };

  return (
    <div>
      <StudentNavBar />
      <div className="profile-container">
        <h2>My Profile</h2>
        {student ? (
          <form onSubmit={handleSubmit} className="profile-form">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isProfileUpdated}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isProfileUpdated}
                required
              />
            </label>
            <label>
              Class:
              <input
                type="text"
                name="studentClass"
                value={formData.studentClass}
                onChange={handleChange}
                disabled={isProfileUpdated}
                required
              />
            </label>
            <label>
              Roll Number:
              <input
                type="text"
                name="rollNumber"
                value={formData.rollNumber}
                onChange={handleChange}
                disabled={isProfileUpdated}
                required
              />
            </label>

            {!isProfileUpdated && (
              <button type="submit">Update Profile</button>
            )}
            {message && <p className="success-message">{message}</p>}
            {isProfileUpdated && (
              <p className="info-message">You have already updated your profile. Further changes are disabled.</p>
            )}
          </form>
        ) : (
          <p>Student data not found. Please log in again.</p>
        )}
      </div>

      <style jsx>{`
        .profile-container {
          max-width: 500px;
          margin: 40px auto;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 20px;
          color: #2c3e50;
        }

        .profile-form {
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 15px;
          display: flex;
          flex-direction: column;
          font-weight: 500;
        }

        input {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }

        button {
          padding: 10px;
          background-color: #007bff;
          color: white;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        .success-message {
          margin-top: 15px;
          color: green;
          text-align: center;
        }

        .info-message {
          margin-top: 15px;
          color: #555;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
