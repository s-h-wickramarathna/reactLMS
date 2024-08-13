// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';  
import Login from "./view/Login";
import StudentDashboardMain from "./view/student/StudentDashboardMain";
import AcedemicDashboardMain from "./view/Academic/AcademicDashboardMain";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import TeacherDashboardMain from "./view/Teacher/TeacherDashboardMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student/*" element={<StudentDashboardMain />} />
        <Route path="/student" element={<Navigate to="/student/dashboard" />} />
        <Route path="/academic/*" element={<AcedemicDashboardMain />} />
        <Route path="/academic" element={<Navigate to="/academic/dashboard"/>} />
        <Route path="/teacher/*" element={<TeacherDashboardMain />} />
        <Route path="/teacher" element={<Navigate to="/teacher/dashboard"/>} />
      </Routes>
    </Router>
  );
}

export default App;
