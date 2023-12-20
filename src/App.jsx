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

  return (
    <div>
      <div className="userinput">
        <div className="genInfo">
          <ExpForm label="Name:" val={name} setVal={setName}/>
          <ExpForm label="Email:" val={email} setVal={setEmail}/>
          <ExpForm label="Phone Number:" val={phoneNum} setVal={setPhoneNum}/>
        </div>
        <div className="education">
          <ExpForm label="School Name:" val={school} setVal={setSchool}/>
          <ExpForm label="Field Of Study:" val={major} setVal={setMajor}/>
          <ExpForm label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
        </div>
        <div className="experience">
          {/* need to add a button that checks if active and creates experience form if not */}

        </div>
      </div>
      <div className="result">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
      </div>
    </div>
  );
}

