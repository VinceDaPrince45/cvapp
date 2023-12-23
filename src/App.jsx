import { useState } from "react";
import GenInfo from "./DisplayComponents/GenInfo";
import { GenInfoForm } from "./FormComponents/GenInfoForm";
import { EducationForm } from "./FormComponents/EducationForm";
import { ExpForm } from "./FormComponents/ExperienceForm";
import EducationDisplay from "./DisplayComponents/Education";

export default function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');
  const [school,setSchool] = useState('');
  const [major,setMajor] = useState('');
  const [educationDate,setEducationDate] = useState('');
  const [experienceList,reloadExperience] = useState([]);
  const [educationList,reloadEducation] = useState([]);
  // need to move useState from child components to here to load
  return (
    <div>
      <div className="input">
        <GenInfoForm formName="genInfo" val1name="Name:" val2name="Email:" val3name="Phone Number:" val1={name} val2={email} val3={phoneNum} setVal1={setName} setVal2={setEmail} setVal3={setPhoneNum}/>
        <EducationForm array={educationList} setArray={reloadEducation} school={school} setSchool={setSchool} major={major} setMajor={setMajor} educationDate={educationDate} setEducationDate={setEducationDate}/>
        <button onClick={()=>console.log(educationList)}>Test</button>
        <ExpForm array={experienceList} setArray={reloadExperience}/>
        <button onClick={()=>console.log(experienceList)}>Test</button>
      </div>
      <div className="display">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum}/>
        <EducationDisplay array={educationList}/>
      </div>
    </div>
  );
}

