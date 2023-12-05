/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

export const EnrollmentForm = () => {
  const [gender, setGender] = useState("");
  const [program, setProgram] = useState("");
  const [fName, setfName] = useState("");
  const [mName, setmName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setAge] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  let dataString = "";

  const onKeyDown = (e, numericSetter) => {
    const enteredValue = e.target.value;
    const numericOnly = enteredValue.replace(/\D/g, ""); // Remove non-numeric characters
    numericSetter(numericOnly);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setData({
      name: { fname: fName, mi: mName, lname: lName },
      age: age,
      birth_date: birthDate,
      gender: gender,
      father: father,
      mother: mother,
      address: { street: street, city: city, state: state, zip_code: zipCode },
      phone: phone,
      email: email,
      program: program,
    });
  };

  useEffect(() => {
    dataString = JSON.stringify(data);
    sessionStorage.setItem("enrollment_data", String(dataString));
  }, [data]);

  return (
    <div className="type-info-container">
      <h1>Enrollment Form</h1>
      <form>
        <div>
          {/* Personal INformation */}
          <h3>Personal Information</h3>
          <div className="fill-up-form">
            {/* Applicants Basic Info */}
            <fieldset className="fill-up-input">
              <legend>Name</legend>
              <input
                type="text"
                placeholder="First Name"
                value={fName}
                onChange={(e) => setfName(e.target.value.toUpperCase())}
                required
              />{" "}
              <input
                type="text"
                placeholder="Middle Initial"
                value={mName}
                onChange={(e) => setmName(e.target.value.toUpperCase())}
                required
              />{" "}
              <input
                type="text"
                placeholder="Last Name"
                value={lName}
                onChange={(e) => setlName(e.target.value.toUpperCase())}
                required
              />
            </fieldset>

            <fieldset className="fill-up-input">
              <legend>Basic Information</legend>
              <select onChange={(e) => setGender(e.target.value)} required>
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                type="text"
                placeholder="Age"
                onChange={(e) => onKeyDown(e, setAge)}
                value={age}
                maxLength={3}
                required
              />

              <input type="date" onChange={(e) => setBirthDate(e.target.value)} />

              <input
                type="text"
                placeholder="10 digit Phone"
                value={phone}
                onChange={(e) => onKeyDown(e, setPhone)}
                maxLength={11}
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </fieldset>

            {/* Parents Names */}
            <fieldset className="fill-up-input">
              <legend>Parents Name</legend>
              <input
                type="text"
                placeholder="Father's Name"
                value={father}
                onChange={(e) => setFather(e.target.value.toUpperCase())}
                required
              />
              <input
                type="text"
                placeholder="Mother's Maiden Name"
                value={mother}
                onChange={(e) => setMother(e.target.value.toUpperCase())}
                required
              />
            </fieldset>

            <fieldset className="fill-up-input">
              <legend>Address</legend>
              <input
                type="text"
                placeholder="Street Address"
                value={street}
                onChange={(e) => setStreet(e.target.value.toUpperCase())}
                required
              />
              ,
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value.toUpperCase())}
                required
              />
              ,
              <input
                type="text"
                placeholder="State/Province"
                value={state}
                onChange={(e) => setState(e.target.value.toUpperCase())}
                required
              />{" "}
              <input
                type="text"
                placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => onKeyDown(e, setZipCode)}
                maxLength={4}
                required
              />
            </fieldset>
          </div>

          <div>
            <h3>Student Information</h3>

            <div className="fill-up-form">
              <fieldset className="fill-up-input">
                <legend>Choose School Level</legend>
                <span>
                  <select value={program} onChange={(e) => setProgram(e.target.value)} required>
                    <option value="">Elementary</option>
                    <option value="Grade 1">Grade 1</option>
                    <option value="Grade 2">Grade 2</option>
                    <option value="Grade 3">Grade 3</option>
                    <option value="Grade 4">Grade 4</option>
                    <option value="Grade 5">Grade 5</option>
                    <option value="Grade 6">Grade 6</option>
                  </select>
                </span>

                <span>
                  <select value={program} onChange={(e) => setProgram(e.target.value)} required>
                    <option value="">Secondary</option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                  </select>
                </span>

                <span>
                  <select value={program} onChange={(e) => setProgram(e.target.value)} required>
                    <option value="">Tertiary</option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                  </select>
                </span>

                <span>
                  <select value={program} onChange={(e) => setProgram(e.target.value)} required>
                    <option value="">College</option>
                    <option value="Course 1">Course 1</option>
                    <option value="Course 2">Course 2</option>
                    <option value="Course 3">Course 3</option>
                    <option value="Course 4">Course 4</option>
                    <option value="Course 5">Course 5</option>
                    <option value="Course 6">Course 6</option>
                  </select>
                </span>
                <h4 className="program-confirmation-text">
                  Selected Level: <strong className="selected-program">{program}</strong>
                </h4>
              </fieldset>
            </div>
          </div>

          <div className="fill-up-form">
            <fieldset className="fill-up-input">
              <legend>Files</legend>
              <div className="fit-content">
                <strong>GMRC</strong>
                <input type="file" accept=".pdf, .docx, .doc" placeholder="test" />
              </div>

              <div className="fit-content">
                <strong>Report Card</strong>
                <input type="file" accept=".pdf, .docx, .doc" />
              </div>
            </fieldset>
          </div>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default EnrollmentForm;
