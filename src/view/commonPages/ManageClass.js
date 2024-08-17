/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from 'react';
import { Modal } from 'bootstrap';
import { Link, useLocation } from 'react-router-dom';

const ManageClass = ({
  paramDate = new Date(),
  paramDay = paramDate.toLocaleDateString("en-US", { weekday: "long" }),
  paramDevice = 1,
}) => {
  const [date, setDateInput] = useState(formatDateForInput(paramDate));
  const [day, setDaySelect] = useState(paramDay);
  const [device, setDeviceSelect] = useState(paramDevice);
  const location = useLocation();

  const modalRef = useRef(null);
  const [bsModal, setBsModal] = useState(null);

  // Function to format the date for the input field
  function formatDateForInput(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Find the next date for a given day of the week
  function getNextDateForDay(currentDate, targetDay) {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayIndex = daysOfWeek.indexOf(targetDay);
    const date = new Date(currentDate);
    const currentDayIndex = date.getDay();

    let daysToAdd = dayIndex - currentDayIndex;

    // If today is the target day, return the current date
    if (daysToAdd === 0) {
      return date;
    }

    // Otherwise, calculate the next occurrence of the target day
    if (daysToAdd < 0) {
      daysToAdd += 7; // Move to the next week if the target day has already passed
    }

    date.setDate(date.getDate() + daysToAdd);
    return date;
  }

  // Handler to update date based on user input
  const handleDateChange = (e) => {
    const newDate = new Date(e.target.value);
    setDateInput(formatDateForInput(newDate));
    setDaySelect(newDate.toLocaleDateString("en-US", { weekday: "long" }));
  };

  // Handler to update device based on user input
  const handleDeviceChange = (e) => {
    setDeviceSelect(parseInt(e.target.value, 10));
  };

  // Handler to update day based on user input
  const handleDayChange = (e) => {
    const newDay = e.target.value;
    setDaySelect(newDay);

    // Check if the selected day is the current day
    const nextDate = getNextDateForDay(new Date(date), newDay);
    setDateInput(formatDateForInput(nextDate));
  };

  // Show modal
  const showModal = () => {
    const modalElement = modalRef.current;
    const modalInstance = new Modal(modalElement);
    setBsModal(modalInstance); // Store the modal instance
    modalInstance.show();
  };

  const closeModal = () => {
    if (bsModal) {
      bsModal.hide();
    }
  };

  useEffect(() => {
    const date = location.state.date;
    const day = location.state.day;
    const device = location.state.device;

    setDateInput(date);
    setDaySelect(day);
    setDeviceSelect(device);

    setDateInput(formatDateForInput(date));
    setDaySelect(day);
  }, []);

  return (
    <>
      {/* Test */}
      <div>
        <div>
          {/* <p>Today is: {dayOfWeek}</p> */}
        </div>
      </div>
      {/* Test */}
      <div className="col-12 bg-light">
        <div className="row">
          <h2 className="fw-bold mt-5">Manage Classes</h2>

          <div className="col-12 offset-0 col-lg-6 offset-lg-6 p-3">
            <div className="row shadow m-3 p-2">
              <div className="col-12 col-lg-12 p-2 text-end">
              <p className="mb-2 fw-bold fs-4">Day : {day}</p>
              <p className="mb-2 fw-bold fs-4">Device : &nbsp;&nbsp;{device === "1"?"Lap 04":"Lap 06"}</p>
              </div>
              <hr className="border border-2 w-100 border-black"/>
              <div className="col-12 col-lg-12 p-2">
                <p className="mb-2 fw-semibold">Date</p>
                <input
                  type="date"
                  className="form-control"
                  value={date}
                  onChange={handleDateChange}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-3 col-12">
            <div className="row gap-5 d-flex justify-content-center">
              <div className="col-12 overflow-x-auto">
                <div className="m-1">
                  <div className="p-2">
                    <p className="fw-bold fs-5 text-black-50">Current Classes</p>
                  </div>
                  <div className="col-12 table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Time</th>
                          <th scope="col">Class ID</th>
                          <th scope="col" hidden>Subject ID</th>
                          <th scope="col">Subject</th>
                          <th scope="col" hidden>Lecture ID</th>
                          <th scope="col">Lecture</th>
                          <th scope="col">Zoom ID</th>
                          <th scope="col">Zoom Password</th>
                          <th scope="col">Zoom Link</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>08:00 AM - 12:00 PM</td>
                          <td>#231347</td>
                          <td>Java Programming</td>
                          <td>Sunil Edirisingha</td>
                          <td>----------</td>
                          <td>----------</td>
                          <td>----------</td>
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
                              onClick={showModal}
                              type="button"
                              className="btn btn-dark py-0"
                            >
                              Update
                            </Link>
                          </td>
                          {/* Modal */}
                          <div
                            className="modal fade"
                            id="exampleModal"
                            ref={modalRef}
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="exampleModalLabel"
                                  >
                                    Add Zoom Details
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    onClick={closeModal}
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div className="modal-body">
                                  {/* Modal Body */}
                                  <div className="col-12">
                                    <p className="p-2 fw-bold text-black-50">
                                      Class Details
                                    </p>
                                  </div>
                                  {/* TextField */}
                                  <div className="col-12">
                                    <div className="input-group mb-3">
                                      <span
                                        className="input-group-text fw-bold"
                                        id="basic-addon3"
                                      >
                                        Class ID&nbsp;&nbsp;&nbsp;:
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        value="25sasf5"
                                        aria-describedby="basic-addon3"
                                      />
                                    </div>
                                  </div>
                                  {/* TextField */}
                                  {/* TextField */}
                                  <div className="col-12">
                                    <div className="input-group mb-3">
                                      <span
                                        className="input-group-text fw-bold"
                                        id="basic-addon3"
                                      >
                                        Time Slot&nbsp;:
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        value="08:00 AM - 12:00 PM"
                                        aria-describedby="basic-addon3"
                                      />
                                    </div>
                                  </div>
                                  {/* TextField */}
                                  {/* TextField */}
                                  <div className="col-12">
                                    <div className="input-group mb-3">
                                      <span
                                        className="input-group-text fw-bold"
                                        id="basic-addon3"
                                      >
                                        Subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        value="Java Programming"
                                        aria-describedby="basic-addon3"
                                      />
                                    </div>
                                  </div>
                                  {/* TextField */}
                                  {/* TextField */}
                                  <div className="col-12">
                                    <div className="input-group mb-3">
                                      <span
                                        className="input-group-text fw-bold"
                                        id="basic-addon3"
                                      >
                                        Lecture&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        value="Kusal Hewavitharana"
                                        aria-describedby="basic-addon3"
                                      />
                                    </div>
                                  </div>
                                  {/* TextField */}
                                  <div className="col-12">
                                    <p className="p-2 fw-bold text-black-50">
                                      Zoom Details
                                    </p>
                                  </div>
                                  {/* TextField */}
                                  <div className="col-12">
                                    <div className="input-group mb-3">
                                      <span
                                        className="input-group-text fw-bold"
                                        id="basic-addon3"
                                      >
                                        Meeting ID&nbsp;&nbsp;&nbsp;&nbsp;:
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        value="824 246 216 7894"
                                        aria-describedby="basic-addon3"
                                      />
                                    </div>
                                  </div>
                                  {/* TextField */}
                                  {/* TextField */}
                                  <div className="col-12">
                                    <div className="input-group mb-3">
                                      <span
                                        className="input-group-text fw-bold"
                                        id="basic-addon3"
                                      >
                                        Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        value="992648"
                                        aria-describedby="basic-addon3"
                                      />
                                    </div>
                                  </div>
                                  {/* TextField */}
                                  {/* TextField */}
                                  <div className="col-12">
                                    <div className="input-group mb-3">
                                      <span
                                        className="input-group-text fw-bold"
                                        id="basic-addon3"
                                      >
                                        Meeting Link&nbsp;:
                                      </span>
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="basic-url"
                                        value="https://www.zoomus.com"
                                        aria-describedby="basic-addon3"
                                      />
                                    </div>
                                  </div>
                                  {/* TextField */}
                                  {/* Modal Body */}
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={closeModal}
                                  >
                                    Add Zoom Link
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Modal */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageClass;
