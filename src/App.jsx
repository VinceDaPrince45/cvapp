import { useState } from "react";
import GenInfo from "./GenInfo";
import Form from "./Form";

export default function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');

  return (
    <div>
      <div className="userinput">
        <div className="genInfo">
          <Form label="Name:" val={name} setVal={setName}/>
          <Form label="Email:" val={email} setVal={setEmail}/>
          <Form label="Phone Number:" val={phoneNum} setVal={setPhoneNum}/>
        </div>
        <div className="education">
        </div>
      </div>
      <div className="result">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
      </div>
    </div>
  );
}