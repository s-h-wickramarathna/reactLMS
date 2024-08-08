

const UpdateSubject = () => {
  return (
    <>
      <div className="form-bg-image">
        <div className="col-12 d-flex justify-content-center mt-4">
          <div className="row col-lg-6 shadow-lg m-3 rounded-3 h-auto mt-4 p-3 formColour border border-3 border-end-0 border-start-0 border-primary">
            <h4 className="fw-bold text-black-50 mt-3 mb-4">Update Existing Subject</h4>
            {/* Form Group */}
            <div className="col-12 col-xl-6">
              <div class="input-group mb-3">
                <span class="input-group-text fw-bold" id="basic-addon3">
                  Subject ID&nbsp;:
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="basic-url"
                  value="25sasf5"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="col-12">
              <div class="input-group mb-3">
                <span class="input-group-text fw-bold" id="basic-addon3">
                  Subject Name&nbsp;&nbsp;:
                </span>
                <input
                  type="Password"
                  class="form-control"
                  id="basic-url"
                  value="25sasf5"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text fw-bold" id="basic-addon3">
                Subject Price&nbsp;&nbsp;&nbsp;:
              </span>
              <input
                type="text"
                class="form-control"
                id="basic-url"
                placeholder="Enter Subject Price"
                aria-describedby="basic-addon3"
              />
            </div>

            <div className="col-12 text-end">
              <div className="col-12 text-end">
                <button type="button" class="btn btn-primary m-2">
                  Update
                </button>
                <button type="button" class="btn btn-dark m-2">
                  Cancel
                </button>
              </div>
            </div>
            {/* Form Group */}
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateSubject;
