import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
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
import UpdateClass from "../commonPages/UpdateClass";
import AddClass from "../commonPages/AddClass";
import AddAssignment from "../commonPages/AddAssignment";
import AcademicDashboard from "./AcademicDashboard";
import UpdateAssignment from "../commonPages/UpdateAssignment";

const AcedemicDashboardMain = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation(); // Hook to get the current location

  const handleNavToggle = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  const iconMapping = {
    "Dashboard": "bi bi-app-indicator",
    "Manage Student": "bi bi-clipboard-check",
    "Manage Teacher": "bi bi-clipboard-check",
    "Manage Subject": "bi bi-clipboard-check",
    "Manage Payments": "bi bi-credit-card",
    "Manage Assignments": "bi bi-file-earmark-text",
    "Manage Exams": "bi bi-pencil-square",
  };

  // Automatically set the active link based on the current URL
  useEffect(() => {
    const pathName = location.pathname;
    const active = Object.keys(iconMapping).find((name) => {
      const formattedName = name.toLowerCase().replace(" ", "-");
      // Ensure "Manage Class" stays active for all routes under "manage-class"
      if (formattedName === "manage-class" && pathName.includes("manage-class")) {
        return true;
      }
      return formattedName === pathName.split('/')[2]; // Compare with the third segment of the URL
    });
    setActiveLink(active || 'Dashboard'); // Default to Dashboard if no match is found
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

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
          <div className="">
            <div className="ps-3 d-flex align-items-center">
              <span className="nav_logo-name text-light">Hi, Sanchitha Heshan</span>
            </div>
          </div>
        </header>
        <div className={`l-navbar ${isNavVisible ? "showDiv" : ""}`} id="nav-bar">
          <nav className="nav">
            <div>
              <Link to="#" className="nav_logo a">
                <i className="bi bi-shop-window nav_logo-icon"></i>
                <span className="nav_logo-name">
                  ACADEMIC <br /> DIVISION
                </span>
              </Link>
              <Link to="#" className="nav_logo a">
                <i className="bi bi-person-circle nav_logo-icon"></i>
                <span className="nav_logo-name">Academic ID:<br/> 22305</span>
              </Link>
              <div className="nav_list">
                {Object.keys(iconMapping).map((name) => (
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
          <Route path="dashboard" element={<AcademicDashboard />} />
          <Route path="manage-class" element={<ManageClass />} />
          <Route path="manage-student" element={<ManageStudent />} />
          <Route path="manage-student/add-student" element={<AddStudent />} />
          <Route path="manage-student/update-student" element={<UpdateStudent />} />
          <Route path="manage-teacher" element={<ManageTeacher />} />
          <Route path="manage-teacher/add-teacher" element={<AddTeacher />} />
          <Route path="manage-teacher/update-teacher" element={<UpdateTeacher />} />
          <Route path="manage-subject" element={<ManageSubject />} />
          <Route path="manage-subject/add-subject" element={<AddSubject />} />
          <Route path="manage-subject/update-subject" element={<UpdateSubject />} />
          <Route path="manage-assignments" element={<Assignment />} />
          <Route path="manage-assignments/manage" element={<ManageAssignment />} />
          <Route path="manage-assignments/manage/add" element={<AddAssignment />} />
          <Route path="manage-assignments/manage/update" element={<UpdateAssignment />} />
          <Route path="manage-exams" element={<Exams />} />
          <Route path="manage-exams/manage" element={<ManageExams />} />
          <Route path="manage-exams/manage/add" element={<AddExam />} />
          {/* <Route path="manage-exams/manage/update" element={<UpdateExam />} /> */}
          <Route path="manage-class/add-class" element={<AddClass />} />
          <Route path="manage-class/update-class" element={<UpdateClass />} />
        </Routes>
        {/* End of Routing Academic Pages */}
      </section>
    </>
  );
};

export default AcedemicDashboardMain;
