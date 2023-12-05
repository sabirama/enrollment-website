import { Routes, Route, Link } from "react-router-dom";
import enrollmentRoutes from "../../routes/enrollmentRoutes";
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
              {enrollmentRoutes.map((type, index) => {
                if (index != 0 && index != 3) {
                  return (
                    <li key={index}>
                      <Link to={type.path}>✦ {type.name} </Link>
                    </li>
                  );
                }
              })}
            </div>
            <div>
              <p>Forms</p>
              <li>
                <Link to="enrollment-form">✦ Enrollment Form</Link>
              </li>
            </div>
          </div>

          <Routes>
            {enrollmentRoutes.map((type, index) => {
              return <Route key={index} path={type.path} element={type.element} />;
            })}
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Enrollment;
