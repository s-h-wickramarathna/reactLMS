import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "../../css/student.css"; // Make sure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import AcademicDashboard from "./AcademicDashboard";
import ManageClass from "./ManageClass";
import AddClass from "./AddClass";
import UpdateClass from "./UpdateClass";
import ManageStudent from "./ManageStudent";
import AddStudent from "./AddStudent";
import UpdateStudent from "./UpdateStudent";
import ManageSubject from "./ManageSubject";
import AddSubject from "./AddSubject";
import UpdateSubject from "./UpdateSubject";

const AcedemicDashboardMain = () => {
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
    "Manage Class": "bi bi-calendar2",
    "Manage Student": "bi bi-clipboard-check",
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
            <div>
              <i className="bi bi-person-circle fs-2 text-white"></i>
            </div>
            <div className="ps-3 d-flex align-items-center">
              <span className="nav_logo-name text-light">
                Acedemic ID: 22305
              </span>
            </div>
          </div>
        </header>
        <div className={`l-navbar ${isNavVisible ? "show" : ""}`} id="nav-bar">
          <nav className="nav">
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
                  "Manage Student",
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
            <a href="#" className="nav_link a">
              <i className="bi bi-box-arrow-left fs-5"></i>
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        {/* Routing Academic Pages */}
        <Routes>
          <Route path="dashboard" element={<AcademicDashboard />} />
          <Route path="manage-class" element={<ManageClass />} />
          <Route path="manage-student" element={<ManageStudent />} />
          <Route path="manage-student/add-student" element={<AddStudent />} />
          <Route path="manage-student/update-student" element={<UpdateStudent />} />
          <Route path="manage-subject" element={<ManageSubject />} />
          <Route path="manage-subject/add-subject" element={<AddSubject />} />
          <Route path="manage-subject/update-subject" element={<UpdateSubject />} />
          <Route path="manage-exams" element={<ManageClass />} />
          <Route path="manage-class/add-class" element={<AddClass />} />
          <Route path="manage-class/update-class" element={<UpdateClass />} />
        </Routes>
        {/* Routing Academic Pages */}
      </section>
    </>
  );
};

export default AcedemicDashboardMain;
