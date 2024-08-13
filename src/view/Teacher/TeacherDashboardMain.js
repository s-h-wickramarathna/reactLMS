import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../../css/student.css"; // Make sure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import TimeTable from "../student/TimeTable";
import SeeAllStudents from "../student/SeeAllStudents";
import SeeAllSubjects from "./SeeAllSubject";
import Assignment from "../commonPages/Assignment";
import ManageAssignment from "../commonPages/ManageAssignment";
import AddAssignment from "../commonPages/AddAssignment";
import UpdateAssignment from "../commonPages/UpdateAssignment";
import Exams from "../commonPages/Exam";
import ManageExams from "../commonPages/ManageExams";
import AddExam from "../commonPages/AddExam";
import UpdateExam from "../commonPages/updateExam";
import AddClass from "../commonPages/AddClass";
import UpdateClass from "../commonPages/UpdateClass";
import TeacherDashboard from "./TeacherDashboard";

const TeacherDashboardMain = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  const iconMapping = {
    "Dashboard": "bi bi-app-indicator",
    "Time Table": "bi bi-calendar2",
    "Students": "bi bi-clipboard-check",
    "Subjects": "bi bi-clipboard-check",
    "Manage Assignments": "bi bi-file-earmark-text",
    "Manage Exams": "bi bi-pencil-square",
    "Payments": "bi bi-credit-card",
  };

  useEffect(() => {
    // You can add code here to handle any side effects if needed
    // For example, initializing libraries or event listeners

    // Cleanup function if needed
    return () => {
      // Cleanup code if necessary
    };
  }, [isNavVisible]); // Dependencies, if any

  return (
    <>
      <section
        id="body-pd"
        className={`body ${isNavVisible ? "body-pd" : ""} bg-light mb-5`}
      >
        <header
          className={`header ${isNavVisible ? "body-pd" : ""}`}
          id="header"
        >
          <div className="header_toggle" onClick={handleNavToggle}>
            <i
              className={`bx text-light ${
                isNavVisible ? "bi bi-list" : "bi bi-x"
              }`}
              id="header-toggle"
            ></i>
          </div>

          <div className="d-flex">
            <div>
              <i className="bi bi-person-circle fs-2 text-white"></i>
            </div>
            <div className="ps-3 d-flex align-items-center">
              <span className="nav_logo-name text-light">
                Teacher ID: 22305
              </span>
            </div>
          </div>
        </header>
        <div className={`l-navbar ${isNavVisible ? "showDiv" : ""}`} id="nav-bar">
          <nav className="nav">
            <div className="overflow-x-auto">
              <Link to="#" className="nav_logo a">
                <i className="bi bi-shop-window nav_logo-icon"></i>
                <span className="nav_logo-name">
                  ACADEMIC <br /> DIVISION
                </span>
              </Link>
              <div className="nav_list overflow-auto">
                {[
                  "Dashboard",
                  "Time Table",
                  "Students",
                  "Subjects",
                  "Manage Assignments",
                  "Manage Exams",
                  "Payments",
                ].map((name) => (
                  <Link
                    to={name.toLowerCase().replace(" ", "-")}
                    key={name}
                    className={`nav_link ${
                      activeLink === name ? "active" : ""
                    } a`}
                    onClick={() => handleLinkClick(name)}
                  >
                    <i className={`${iconMapping[name]} nav_icon`}></i>
                    <span className="nav_name">{name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link to="#" className="nav_link a">
              <i className="bi bi-box-arrow-left fs-5"></i>
              <span className="nav_name">SignOut</span>
            </Link>
          </nav>
        </div>
        {/* Routing Academic Pages */}
        <Routes>
          <Route path="dashboard" element={<TeacherDashboard />} />
          <Route path="time-table" element={<TimeTable />} />
          <Route path="students" element={<SeeAllStudents />} />
          <Route path="subjects" element={<SeeAllSubjects />} />
          <Route path="manage-Assignments" element={<Assignment />} />
          <Route path="manage-Assignments/manage" element={<ManageAssignment />} />
          <Route path="manage-Assignments/manage/add" element={<AddAssignment />} />
          <Route path="manage-Assignments/manage/update" element={<UpdateAssignment />} />
          <Route path="manage-exams" element={<Exams />} />
          <Route path="manage-exams/manage" element={<ManageExams />} />
          <Route path="manage-exams/manage/add" element={<AddExam />} />
          <Route path="manage-exams/manage/update" element={<UpdateExam />} />
          <Route path="manage-class/add-class" element={<AddClass />} />
          <Route path="manage-class/update-class" element={<UpdateClass />} />
        </Routes>
        {/* Routing Academic Pages */}
      </section>
    </>
  );
};

export default TeacherDashboardMain;
