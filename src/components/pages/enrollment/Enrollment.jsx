import { Routes, Route, Link } from "react-router-dom";
import studentType from "../../routes/enrollmentRoutes";
import "./Enrollment.css";

const Enrollment = () => {
  return (
    <>
      <div className="main-display">
        <h1>School Name Online Enrollment</h1>

        <div>
          <div className="enrollment-link-list">
            <div>
              <p>Enrollment Process</p>
              {studentType.map((type, index) => {
                if (type.name != "Enrollment Form") {
                  return (
                    <li key={index}>
                      <Link to={type.path}>✦ {type.name} </Link>
                    </li>
                  );
                }
              })}
            </div>
            <div>
              <p>Enrollment Forms</p>
              <li>
                <Link to="enrollment-form">✦ Fill-up Enrollment Form</Link>
              </li>
            </div>
          </div>

          <Routes>
            {studentType.map((type, index) => {
              return <Route key={index} path={type.path} element={type.element} />;
            })}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Enrollment;
