import { Link } from "react-router-dom";

const ManageSubject = () => {
  return (
    <>
      <div className="col-12 bg-light">
        <div className="row">
          <h2 className="fw-bold mt-5">Manage Subjects</h2>
          <div className="col-12 col-lg-4 offset-0 offset-lg-8 d-flex gap-2 mt-4">
            <select className="form-select" aria-label="Default select example">
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
            <Link to="add-subject" type="button" className="btn btn-primary">
              New
            </Link>
          </div>

          <div className="mt-5 rounded-3 col-12">
            <div className="row gap-5 d-flex justify-content-center">
              <div className="col-12 overflow-x-auto">
                <div className="m-1">
                  <div className="p-2">
                    <p className="fw-bold fs-5 text-black-50">All Subjects</p>
                  </div>

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Level ID</th>
                        <th scope="col">Level Name</th>
                        <th scope="col">Subject ID</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Updated Date</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>#231347</td>
                        <td>Diploma</td>
                        <td>#231318</td>
                        <td>Java Programming</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                        <td>
                          <Link
                            to="update-subject"
                            type="button"
                            className="btn btn-dark py-0"
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>#231347</td>
                        <td>Higher Diploma</td>
                        <td>#231347</td>
                        <td>PHP Programming</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                        <td>
                          <Link
                            to="update-subject"
                            type="button"
                            className="btn btn-dark py-0"
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>#231347</td>
                        <td>Graduate Diploma</td>
                        <td>#231347</td>
                        <td>Angular Programming</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                        <td>
                          <Link
                            to="update-subject"
                            type="button"
                            className="btn btn-dark py-0"
                          >
                            Update
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageSubject;
