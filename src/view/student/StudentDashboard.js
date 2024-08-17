import "../../css/student.css"; // Make sure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import CourseDetailCard from "../compornants/CourseDetailCard";
import PaymentDetailCard from "../compornants/PaymentDetailCard";

const StudentDashboard = () => {
  // const cardTitle = {
  //   card_1: "All Lectures",
  //   card_2: "Weekly Lectures",
  //   card_3: "Today Lectures",
  // };
  return (
    <>
    <div className="col-12 pt-5">
        <p className="fw-bold fs-3 text-secondary">Hi, <span className="text-primary">Sanchitha</span> Welcome To Dashboard</p>
    </div>
     {/* Card Container */}
     {/* <DashboardCard cardTitle={cardTitle} /> */}
      {/* Card Container */}

    <div className="pt-4 d-flex flex-column flex-lg-row">
       {/* Course Details */}
      <CourseDetailCard/>
      <PaymentDetailCard/>
      {/* Course Details */} 
    </div>
      
      <div className="mt-5 rounded-3 col-12">
        <div className="row gap-5 d-flex justify-content-center">
          <div className="ms-4">
            {/* <h2 className="fw-semibold text-secondary">Today Classes</h2> */}
            {/* <hr className="border border-3 w-50 border-primary" /> */}
          </div>

          {/* class Card */}
          {/* <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard />
          <ClassCard /> */}
          {/* class Card */}
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
