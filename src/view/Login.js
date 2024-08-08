import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login.css";

function Login() {
  // Variables
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState("");

  const handleStudentID = (event) => {
    setStudentID(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const loginProcess = (event) => {
    window.location = "/student";
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
          <div className="form-container sign-in">
            <div className="form">
              <h1>Sign In</h1>
              <span className="mb-5"> use your student id & password</span>
              <input
                type="text"
                placeholder="Student ID"
                value={studentID}
                onChange={handleStudentID}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePassword}
              />
              <button onClick={loginProcess}>Sign In</button>
              <button onClick={loginProcess}>Sign In</button>
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
                  Register with your personal Student Id And Password to Join
                  Clasess And Access Any Other features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
