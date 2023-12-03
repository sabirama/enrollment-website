import { Routes, Route, Link } from "react-router-dom";
import studentType from "../../routes/studentType";

const Enrollment = () => {
  return (
    <>
      <div className="main-display">
        <h1>School Name Online Enrollment</h1>

        <div>
          <div className="student-type">
            <p>STUDENT TYPE</p>
            {studentType.map((type, index) => {
              return (
                <li key={index}>
                  <Link to={type.path}>✦ {type.name} </Link>
                </li>
              );
            })}
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
