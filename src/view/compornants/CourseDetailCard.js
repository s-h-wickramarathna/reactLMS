const CourseDetailCard = () => {
  return (
    <>
      <div className="col-12 col-lg-6 p-3 mb-2">
        <div className="shadow p-3 rounded  CourseAndPaymentCardHight">
          <div className="row">
              <div className="col-6">
              <h3 className="fw-bold">Course Details</h3>
              </div>
              <div className="col-6 text-end">
              <button className="btn btn-primary">Join Class</button>
              </div>
          </div>
          
          
          <div className="col-12 mt-4 fw-semibold">
            <p className="fw-semibold text-primary">
              Course Name :{" "}
              <span className="text-black">
                {" "}
                Diploma In Software Enginnering
              </span>
            </p>
            <p className="fw-semibold text-primary">
              Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              <span className="text-black">6 Months</span>
            </p>
            <p className="fw-semibold text-primary mt-4 pb-3">
              Start Date &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{" "}
              <span className="text-black">2024-05-12</span>
            </p>
          </div>
          <div className="col-12 shadow ">
            <div className="table-responsive CourseAndPaymentCardTableHight mt-5">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Subject ID</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Day</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>#216sf4</td>
                    <td>Java Fundamentals </td>
                    <td>Tuseday</td>
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

export default CourseDetailCard;
