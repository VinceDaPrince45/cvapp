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
        <GenInfoForm 
          formName="genInfo" val1name="Name:" val2name="Email:" val3name="Phone Number:" val1={name} val2={email} val3={phoneNum} setVal1={setName} setVal2={setEmail} setVal3={setPhoneNum}
        />
        <EducationForm array={educationList} setArray={reloadEducation}/>
        <button onClick={()=>console.log(educationList)}>Test</button>
        <div className="experience">
          {/* 
          need to add a button that checks if active and creates experience form if not
          create collapsable education and experience
          create array of objects to hold entered information
          possibly implement state that holds objects of information entered, only allow one form within education/experience to be shown at a time, this returns index which will access the array and pressing save will edit that index's object
          */}
          <ExpForm array={experienceList}/>
          <button onClick={()=>setToggle(!toggle)}>Add Experience</button>
        </div>
      </div>
      <div className="result">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
      </div>
    </div>
  );
}

