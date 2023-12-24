import { useState } from "react";
import GenInfo from "./DisplayComponents/GenInfo";
import { GenInfoForm } from "./FormComponents/GenInfoForm";
import { EducationForm } from "./FormComponents/EducationForm";
import { ExpForm } from "./FormComponents/ExperienceForm";
import EducationDisplay from "./DisplayComponents/Education";
import ExperienceDisplay from "./DisplayComponents/Experience";

export default function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');
  const [experienceList,reloadExperience] = useState([]);
  const [educationList,reloadEducation] = useState([]);
  // need to move useState from child components to here to load

  return (
    <div className="page">
      <div className="input">
        <GenInfoForm val1name="Name:" val2name="Email:" val3name="Phone Number:" val1={name} val2={email} val3={phoneNum} setVal1={setName} setVal2={setEmail} setVal3={setPhoneNum}/>
        <EducationForm array={educationList} setArray={reloadEducation}/>
        <ExpForm array={experienceList} setArray={reloadExperience}/>
      </div>
      <div className="display">
        <div className="resume">
          <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum}/>
          <EducationDisplay array={educationList}/>
          <ExperienceDisplay array={experienceList}/>
        </div>
      </div>
    </div>
  );
}

