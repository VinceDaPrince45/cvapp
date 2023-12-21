import { useState } from "react";
import GenInfo from "./GenInfo";
import {ExpForm,InfoForm} from "./Form";

export default function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');
  const [school,setSchool] = useState('');
  const [major,setMajor] = useState('');
  const [educationDate,setEducationDate] = useState('');
  const [toggle,setToggle] = useState(false);
  const [companyName,setCompanyName] = useState('');
  const [position,setPosition] = useState('');
  const [responsibilities,setResponsibilities] = useState('');
  const [startDate,setStartDate] = useState('');
  const [endDate,setEndDate] = useState('');

  const toggleButton = () => {
    console.log(toggle);
    setToggle(!toggle);
  }

  return (
    <div>
      <div className="userinput">
        <InfoForm 
          formName="genInfo"
          val1name="Name:"
          val2name="Email:"
          val3name="Phone Number:"
          val1={name}
          val2={email}
          val3={phoneNum}
          setVal1={setName}
          setVal2={setEmail}
          setVal3={setPhoneNum}
        />
        <InfoForm 
          formName="education"
          val1name="School Name:"
          val2name="Field Of Study:"
          val3name="Date of Study:"
          val1={school}
          val2={major}
          val3={educationDate}
          setVal1={setSchool}
          setVal2={setMajor}
          setVal3={setEducationDate}
        />
        <div className="experience">
          {/* need to add a button that checks if active and creates experience form if not */}
          <ExpForm 
            formName="experienceForm"
            val1name="Company Name:"
            val2name="Position Title:"
            val3name="Responsibilities:"
            val4name="Date Started:"
            val5name="Date Ended:"
            val1={companyName}
            val2={position}
            val3={responsibilities}
            val4={startDate}
            val5={endDate}
            setVal1={setCompanyName}
            setVal2={setPosition}
            setVal3={setResponsibilities}
            setVal4={setStartDate}
            setVal5={setEndDate}
            toggled={toggle}
          />
          <button onClick={toggleButton}>Add Experience</button>
        </div>
      </div>
      <div className="result">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
      </div>
    </div>
  );
}

