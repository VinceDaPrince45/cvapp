import { useState } from "react";
import GenInfo from "./GenInfo";
import {GenInfoForm,ExpForm,EducationForm} from "./Form";

export default function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');
  const [toggle,setToggle] = useState(false);
  const [experienceList,reloadExperience] = useState([]);
  const [educationList,reloadEducation] = useState([]);

  return (
    <div>
      <div className="userinput">
        <GenInfoForm formName="genInfo" val1name="Name:" val2name="Email:" val3name="Phone Number:" val1={name} val2={email} val3={phoneNum} setVal1={setName} setVal2={setEmail} setVal3={setPhoneNum}/>
        <EducationForm array={educationList} setArray={reloadEducation}/>
        <button onClick={()=>console.log(educationList)}>Test</button>
        <ExpForm array={experienceList}/>
        <button onClick={()=>setToggle(!toggle)}>Add Experience</button>
      </div>
      <div className="result">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
      </div>
    </div>
  );
}

