/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import "../EnrollmentProcess.css";

const EnrollmentForm = () => {
  const [gender, setGender] = useState("");
  const [program, setProgram] = useState("");

  const handleSelectGender = (event) => {
    setGender(event.target.value);
  };

  const handleSelectProgram = (event) => {
    setProgram(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.key === "e") {
      event.preventDefault();
    }
  };

  return (
    <div className="type-info-container">
      <h1>Enrollment Form</h1>
      <form>
        <div>
          {/* Personal INformation */}
          <h3>Personal Information</h3>
          <div className="fill-up-form">
            {/* Applicants Basic Info */}
            <span className="fill-up-input">
              <label>Name</label>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Middle Initial" required />
              <input type="text" placeholder="Last Name" required />
            </span>
            <span className="fill-up-input">
              <label>Age</label>
              <input type="number" placeholder="Age" required onKeyDown={onKeyDown} />
            </span>
            <span className="fill-up-input">
              <label>Gender</label>
              <select value={gender} onChange={handleSelectGender} required>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </span>
          </div>

          <div className="fill-up-form">
            {/* Parents Names */}
            <span className="fill-up-input">
              <label>Father's Name</label>
              <input type="text" placeholder="Fathers Name" required />
            </span>
            <span className="fill-up-input">
              <label className="fill-up-input">Mother's Name</label>
              <input type="text" placeholder="Mother's Maiden Name" required />
            </span>
          </div>

          <div className="fill-up-form">
            {/* Address, Phone, Email */}
            <span className="fill-up-input">
              <label>Address</label>
              <input type="text" placeholder="Street" required />
              <input type="text" placeholder="City" required />
              <input type="text" placeholder="Province" required />
            </span>
            <span className="fill-up-input">
              <label>Phone Number</label>
              <input type="number" placeholder="Phone" onKeyDown={onKeyDown} required />
            </span>
            <span className="fill-up-input">
              <label>Email</label>
              <input type="email" placeholder="Email" required />
            </span>
          </div>
        </div>

        <div>
          {/* Program Selection Form */}
          <h3>Program Selection</h3>
          <div className="fill-up-form">
            <span className="fill-up-input">
              <label>Program</label>
              <select value={program} onChange={handleSelectProgram} required>
                <option value="Grade1">Grade 1</option>
                <option value="Grade2">Grade 2</option>
                <option value="Grade3">Grade 3</option>
                <option value="Grade4">Grade 4</option>
                <option value="Grade5">Grade 5</option>
                <option value="Grade6">Grade 6</option>
                <option value="Grade7">Grade 7</option>
                <option value="Grade8">Grade 8</option>
                <option value="Grade9">Grade 9</option>
                <option value="Grade10">Grade 10</option>
                <option value="Grade11">Grade 11</option>
                <option value="Grade12">Grade 12</option>
              </select>
            </span>

            <span>
              <label>File</label>
              <input type="file" accept=".pdf, .docx, .doc" />
            </span>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
