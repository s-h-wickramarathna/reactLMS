import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../../css/student.css"; // Make sure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import ManageClass from "../commonPages/ManageClass";
import ManageStudent from "../commonPages/ManageStudent";
import AddStudent from "../commonPages/AddStudent";
import UpdateStudent from "../commonPages/UpdateStudent";
import ManageTeacher from "../commonPages/ManageTeacher";
import AddTeacher from "../commonPages/AddTeacher";
import UpdateTeacher from "../commonPages/UpdateTeacher";
import ManageSubject from "../commonPages/ManageSubject";
import AddSubject from "../commonPages/AddSubject";
import UpdateSubject from "../commonPages/UpdateSubject";
import Assignment from "../commonPages/Assignment";
import ManageAssignment from "../commonPages/ManageAssignment";
import Exams from "../commonPages/Exam";
import ManageExams from "../commonPages/ManageExams";
import AddExam from "../commonPages/AddExam";
import UpdateExam from "../commonPages/updateExam";
import UpdateClass from "../commonPages/UpdateClass";
import AddClass from "../commonPages/AddClass";
import AddAssignment from "../commonPages/AddAssignment";
import UpdateAssignment from "../commonPages/UpdateAssignment";
import AdminDashboard from "./adminDashboard";
import ManageAdmin from "../commonPages/ManageAdmin";
import AddAdmin from "../commonPages/AddAdmin";
import UpdateAdmin from "../commonPages/UpdateAdmin";
import ManageAcademic from "../commonPages/ManageAcademic";
import AddAcademic from "../commonPages/AddAcademic";
import UpdateAcademic from "../commonPages/UpdateAcademic";

const AdminDashboardMain = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("Dashboard");

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  const iconMapping = {
    Dashboard: "bi bi-app-indicator",
    "Manage Class": "bi bi-calendar2",
    "Manage Admin": "bi bi-clipboard-check",
    "Manage Academic": "bi bi-clipboard-check",
    "Manage Student": "bi bi-clipboard-check",
    "Manage Teacher": "bi bi-clipboard-check",
    "Manage Subject": "bi bi-clipboard-check",
    "Manage Payments": "bi bi-credit-card",
    "Manage Assignments": "bi bi-file-earmark-text",
    "Manage Exams": "bi bi-pencil-square",
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
            <select class="form-select" aria-label="Default select example">
              <option selected>Select To Manage Institute</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="d-flex">
            <div>
              <i className="bi bi-person-circle fs-2 text-white"></i>
            </div>
            <div className="ps-3 d-flex align-items-center">
              <span className="nav_logo-name text-light">Admin ID: 22305</span>
            </div>
          </div>
        </header>
        <div
          className={`l-navbar ${isNavVisible ? "showDiv" : ""} `}
          id="nav-bar"
        >
          <nav className="nav overflow-y-auto">
            <div>
              <a href="#" className="nav_logo a">
                <i className="bi bi-shop-window nav_logo-icon"></i>
                <span className="nav_logo-name">
                  ACADEMIC <br /> DIVISION
                </span>
              </a>
              <div className="nav_list">
                {[
                  "Dashboard",
                  "Manage Class",
                  "Manage Admin",
                  "Manage Academic",
                  "Manage Student",
                  "Manage Teacher",
                  "Manage Subject",
                  "Manage Payments",
                  "Manage Assignments",
                  "Manage Exams",
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
          </nav>
        </div>
        {/* Routing Academic Pages */}
        <Routes>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="manage-class" element={<ManageClass />} />
          <Route path="manage-student" element={<ManageStudent />} />
          <Route path="manage-student/add-student" element={<AddStudent />} />
          <Route
            path="manage-student/update-student"
            element={<UpdateStudent />}
          />
          <Route path="manage-teacher" element={<ManageTeacher />} />
          <Route path="manage-teacher/add-teacher" element={<AddTeacher />} />
          <Route
            path="manage-teacher/update-teacher"
            element={<UpdateTeacher />}
          />
          <Route path="manage-subject" element={<ManageSubject />} />
          <Route path="manage-subject/add-subject" element={<AddSubject />} />
          <Route
            path="manage-subject/update-subject"
            element={<UpdateSubject />}
          />
          <Route path="manage-Assignments" element={<Assignment />} />
          <Route
            path="manage-Assignments/manage"
            element={<ManageAssignment />}
          />
          <Route
            path="manage-Assignments/manage/add"
            element={<AddAssignment />}
          />
          <Route
            path="manage-Assignments/manage/update"
            element={<UpdateAssignment />}
          />
          <Route path="manage-exams" element={<Exams />} />
          <Route path="manage-exams/manage" element={<ManageExams />} />
          <Route path="manage-exams/manage/add" element={<AddExam />} />
          <Route path="manage-exams/manage/update" element={<UpdateExam />} />
          <Route path="manage-exams" element={<Exams />} />
          <Route path="manage-class/add-class" element={<AddClass />} />
          <Route path="manage-class/update-class" element={<UpdateClass />} />
          <Route path="manage-admin" element={<ManageAdmin />} />
          <Route path="manage-admin/add-admin" element={<AddAdmin />} />
          <Route path="manage-admin/update-admin" element={<UpdateAdmin />} />
          <Route path="manage-academic" element={<ManageAcademic />} />
          <Route path="manage-academic/add-academic" element={<AddAcademic />} />
          <Route path="manage-academic/update-academic" element={<UpdateAcademic />} />
        </Routes>
        {/* Routing Academic Pages */}
      </section>
    </>
  );
};

export default AdminDashboardMain;
