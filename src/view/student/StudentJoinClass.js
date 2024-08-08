
const StudentJoinClass = () => {
  return (
    <>
    <div className="form-bg-image">

      <div className="col-12 d-flex justify-content-center">
        <div className="row col-lg-6 shadow-lg m-3 rounded-3 h-auto mt-4 p-3 formColour border border-3 border-end-0 border-start-0 border-primary">
          <h4 className="fw-bold text-black-50 my-2">Join Lecture Meeting</h4>
          {/* Form Group */}
          <div className="col-12 col-xl-6">
            <div class="input-group mb-3">
              <span class="input-group-text fw-bold" id="basic-addon3">
                Lecture ID&nbsp;:
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div class="input-group mb-3">
              <span class="input-group-text fw-bold" id="basic-addon3">
                Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text fw-bold" id="basic-addon3">
              Subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </span>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text fw-bold" id="basic-addon3">
              lecture&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </span>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text fw-bold" id="basic-addon3">
              Location&nbsp;&nbsp;&nbsp;&nbsp;:
            </span>
            <input
              type="text"
              class="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
            />
          </div>
          <div className="col-12 col-xl-6">
            <div class="input-group mb-3">
              <span class="input-group-text fw-bold" id="basic-addon3">
                Start At&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div class="input-group mb-3">
              <span class="input-group-text fw-bold" id="basic-addon3">
                End At&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div class="input-group mb-3">
              <span class="input-group-text fw-bold" id="basic-addon3">
                Lesson&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div class="input-group mb-3">
              <span class="input-group-text fw-bold" id="basic-addon3">
                Paid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>
          </div>
          {/* Fail Alert */}
          <div
            class="alert alert-danger d-flex align-items-center border border-3 border-danger border-top-0 border-bottom-0"
            role="alert"
          >
            <i class="bi bi-shield-fill-x fs-4">&nbsp;&nbsp;</i>
            <div>You Can't Join The Lecture Today. Please Pay Your Due Immediately ....</div>
          </div>
          {/* Fail Alert */}
          <div className="col-12 text-end">
            <button type="button" class="btn btn-primary">
              Join
            </button>
          </div>
          {/* Form Group */}
        </div>
      </div>        
    </div>
    </>
  );
};

export default StudentJoinClass;
