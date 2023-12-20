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
          <ExpForm />
          <button onClick={()=>setToggle(!toggle)}></button>
        </div>
      </div>
      <div className="result">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
      </div>
    </div>
  );
}

