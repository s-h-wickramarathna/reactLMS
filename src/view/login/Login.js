import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Login.css";
import axios from "axios";

function StudentLogin() {
  // Variables
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [selectedRole, setSelectedRole] = useState("1");
  const [placeholderId, setPlaceholderId] = useState("Student ID");

  const handleChange = (event) => {
    const value = event.target.value; // Capture the value from the event
    setSelectedRole(value);

    if (value === "1") {
      setPlaceholderId("Student ID");
    } else if (value === "2") {
      setPlaceholderId("Academic ID");
    } else if (value === "3") {
      setPlaceholderId("Admin ID");
    } else if (value === "4") {
      setPlaceholderId("Super Admin ID");
      
    }
  };


  const handleStudentID = (event) => {
    setStudentID(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const studentLoginProcess = () => {
    axios
      .post("http://localhost:5000/student/login", {
        // Your data goes here
        sid: studentID,
        password: password,
      })
      .then((response) => {
        const message = response.data.message;
        if (message === "Success") {
          window.location = "student";
        } else {
          setError(response.data.message);
          setIsError(true);
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
    // window.location = "student";
  };
  const loginProcess = () => {
    axios
      .post("http://localhost:5000/student/login", {
        // Your data goes here
        sid: studentID,
        password: password,
      })
      .then((response) => {
        const message = response.data.message;
        if (message === "Success") {
          window.location = "student";
        } else {
          setError(response.data.message);
          setIsError(true);
        }
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
    // window.location = "student";
  };

  return (
    <>
      <div className="maindiv">
        {/* animated Area */}
        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="container m-5" id="container">
          <div className="form-container half-width-md sign-in">
            <div className="form">
              <h3 className="fw-semibold p-3 loginCardColor rounded-4 text-white d-md-none text-center">
                ACADEMIC DIVISION
              </h3>
              <h4 className="mt-3">Sign In</h4>
              <span className="mb-3"> use your user id & password</span>
              <select
                className="form-select form-select-sm mb-3 text-center fw-bold"
                aria-label=".form-select-sm example"
                value={selectedRole}
                onChange={handleChange}
              >
                <option value="1">Log As Student</option>
                <option value="2">Log As Academic</option>
                <option value="3">Log As Admin</option>
                <option value="4">Log As Super Admin</option>
              </select>
              <div>
                <input
                  type="text"
                  placeholder={placeholderId}
                  value={studentID}
                  onChange={handleStudentID}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePassword}
                />
                <div
                  className={`alert alert-danger p-2 mt-3 text-center smalltext ${
                    isError ? "d-block" : "d-none"
                  }`}
                  role="alert"
                >
                  {error}
                </div>
              </div>
              {
                selectedRole === "1"?
                <button onClick={studentLoginProcess}>Sign In</button>
                :
                <button onClick={loginProcess}>Sign In</button>
              }
            </div>
          </div>
          <div className="toggle-container d-none d-md-block">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
              </div>
              <div className="toggle-panel toggle-right">
                <h2>ACADEMIC DIVISION </h2>
                <h5 className="mb-4">LEARNING MANAGEMENT SYSTEM</h5>
                <p>
                  Register with your personal User Id And Password to Access
                  Clasess And Any Other features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentLogin;
