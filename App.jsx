// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Admin components
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import AddStudent from './admin/AddStudent';
import AddTeacher from './admin/AddTeacher';
import ViewStudents from './admin/ViewStudents';
import ViewReports from './admin/ViewReports';
import ViewTeachers from './admin/ViewTeachers';
import EditReport from './admin/EditReport';
// Student components
import StudentLogin from './student/StudentLogin';
import StudentDashboard from './student/StudentDashboard';
import ViewMyReport from './student/ViewMyReport';
import ViewProfile from './student/ViewProfile';

// Faculty components
import FacultyLogin from './faculty/FacultyLogin';
import FacultyDashboard from './faculty/FacultyDashboard';
import AddMarks from './faculty/AddMarks';
import ViewMarks from './faculty/ViewMarks';
import FacultyViewStudents from './faculty/ViewStudents';
import AddReport from './faculty/AddReport';
import FacultyViewReports from './faculty/ViewReports';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home redirect */}
        <Route path="/" element={<Navigate to="/admin/login" />} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-student" element={<AddStudent />} />
        <Route path="/admin/add-teacher" element={<AddTeacher />} />
        <Route path="/admin/view-students" element={<ViewStudents />} />
        <Route path="/admin/view-reports" element={<ViewReports />} />
        <Route path="/admin/view-teachers" element={<ViewTeachers />} />
        <Route path="/admin/edit-report/:reportId" element={<EditReport />} />

        {/* Student routes */}
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/view-my-report" element={<ViewMyReport />} />
        <Route path="/student/view-profile" element={<ViewProfile />} />

        {/* Faculty routes */}
        <Route path="/faculty/login" element={<FacultyLogin />} />
        <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        <Route path="/faculty/add-marks" element={<AddMarks />} />
        <Route path="/faculty/view-marks" element={<ViewMarks />} />
        <Route path="/faculty/add-report" element={<AddReport />} />
        <Route path="/faculty/view-students" element={<FacultyViewStudents />} />
        <Route path="/faculty/view-reports" element={<FacultyViewReports />} />
      </Routes>
    </Router>
  );
}

export default App;
