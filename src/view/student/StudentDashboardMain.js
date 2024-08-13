import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../../css/student.css"; // Make sure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import StudentJoinClass from "./StudentJoinClass";
import StudentDashboard from "./StudentDashboard";
import TimeTable from "./TimeTable";
import SeeAllAssignment from "./SeeAllAssignment";
import UploadAssignments from "./UploadAssignments";
import SeeAllExams from "./SeeAllExam";
import UploadExams from "./UploadExams";
import SeeAllAttendance from "./SeeAllAttendance";

const StudentDashboardMain = () => {
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
    "My Timetable": "bi bi-calendar2",
    "Attendance": "bi bi-clipboard-check",
    "Assignments": "bi bi-file-earmark-text",
    "Exams": "bi bi-pencil-square",
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
            <span className="nav_logo-name text-light ms-3 fs-5">
                Hi, Sanchitha
              </span>
          </div>

          <div className="d-flex">
            <div>
              <i className="bi bi-person-circle fs-2 text-white"></i>
            </div>
            <div className="ps-3 d-flex align-items-center">
              <span className="nav_logo-name text-light">
                Student ID: 22305
              </span>
            </div>
          </div>
        </header>
        <div className={`l-navbar ${isNavVisible ? "showDiv" : ""}`} id="nav-bar">
          <nav className="nav">
            <div>
              <Link href="/" className="nav_logo a">
                <i className="bi bi-shop-window nav_logo-icon"></i>
                <span className="nav_logo-name">
                  ACADEMIC <br /> DIVISION
                </span>
              </Link>
              <div className="nav_list">
                {[
                  "Dashboard",
                  "My Timetable",
                  "Attendance",
                  "Assignments",
                  "Exams",
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
            <a href="#" className="nav_link a">
              <i className="bi bi-box-arrow-left fs-5"></i>
              <span className="nav_name">SignOut</span>
            </a>
          </nav>
        </div>
        {/* Routing Student Pages */}
        <Routes>
          <Route path="dashboard" element={<StudentDashboard/>} />
          <Route path="join-class" element={<StudentJoinClass />} />
          <Route path="my-timetable" element={<TimeTable />} />
          <Route path="attendance" element={<SeeAllAttendance />} />
          <Route path="assignments" element={<SeeAllAssignment />} />
          <Route path="assignments/see" element={<UploadAssignments  />} />
          <Route path="exams" element={<SeeAllExams />} />
          <Route path="exams/see" element={<UploadExams  />} />
        </Routes>
        {/* Routing Student Pages */}
      </section>
    </>
  );
};

export default StudentDashboardMain;
