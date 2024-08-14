import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ManageStudent = () => {
  const AllStudents = () => {
    axios
      .get("https://reactlms.netlify.app/.netlify/functions/server/students")
      .then((response) => {
        console.log(response.data);
        // setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    AllStudents();
  }, []);
  return (
    <>
      <div className="col-12 bg-light">
        <div className="row">
          <h2 className="fw-bold mt-5">Manage Students</h2>
          <div className="col-12 col-lg-4 offset-0 offset-lg-8 d-flex gap-2 mt-4">
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Course</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-12 col-lg-4 offset-0 offset-lg-8 d-flex gap-2 mt-4">
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="San Francisco" />
              <option value="New York" />
              <option value="Seattle" />
              <option value="Los Angeles" />
              <option value="Chicago" />
            </datalist>
            <Link to="add-student" type="button" className="btn btn-primary">
              New
            </Link>
          </div>

          <div className="col-12 overflow-x-auto">
            <div className="m-1 table-responsive">
              <div className="p-2">
                <p className="fw-bold fs-5 text-black-50">All Students</p>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Student ID</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Refference No</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    <th scope="col" className="text-center">
                      Manage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>#231347</td>
                    <td>Sadun Akalanka</td>
                    <td>xxxxxxxxxxx</td>
                    <td>07xxxxxxxx</td>
                    <td>08:00 AM</td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                    <td>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-dark py-0 py-0"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="text-center">
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-success py-0"
                      >
                        Assignments
                      </Link>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-secondary py-0 ms-1"
                      >
                        Exams
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>#231287</td>
                    <td>Pasindu Peris</td>
                    <td>xxxxxxxxxxx</td>
                    <td>07xxxxxxxx</td>
                    <td>08:00 AM</td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                    <td>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-dark py-0 py-0"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="text-center">
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-success py-0"
                      >
                        Assignments
                      </Link>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-secondary py-0 ms-1"
                      >
                        Exams
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>#231467</td>
                    <td>Supun Madushan</td>
                    <td>xxxxxxxxxxx</td>
                    <td>07xxxxxxxx</td>
                    <td>08:00 AM</td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                    <td>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-dark py-0 py-0"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="text-center">
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-success py-0"
                      >
                        Assignments
                      </Link>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-secondary py-0 ms-1"
                      >
                        Exams
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>#231157</td>
                    <td>Kasun Kalhara</td>
                    <td>xxxxxxxxxxx</td>
                    <td>07xxxxxxxx</td>
                    <td>08:00 AM</td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </td>
                    <td>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-dark py-0 py-0"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="text-center">
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-success py-0"
                      >
                        Assignments
                      </Link>
                      <Link
                        to="update-student"
                        type="button"
                        className="btn btn-secondary py-0 ms-1"
                      >
                        Exams
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageStudent;
