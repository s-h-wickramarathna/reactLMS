const SeeAllSubjects = () => {
  return (
    <>
      <div className="col-12 bg-light">
        <div className="row">
          <h2 className="fw-bold mt-5">See All Subjects</h2>
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
                        <th scope="col">Subject ID</th>
                        <th scope="col">Subject Name</th>
                        <th scope="col">Created Date</th>
                        <th scope="col">Updated Date</th>
                        <th scope="col">Assigned Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>#231347</td>
                        <td>Java Programming</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>#231347</td>
                        <td>PHP Programming</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>#231347</td>
                        <td>Angular Programming</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
                        <td>2024-08-08</td>
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

export default SeeAllSubjects;
