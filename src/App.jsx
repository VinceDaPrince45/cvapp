import { useState } from "react";
import GenInfo from "./GenInfo";

function Form({label,val,setVal}) {
  return (
    <label>
    {label}{" "}
      <input 
        type="text"
        value={val}
        onChange={(event)=>setVal(event.target.value)}
      />
    </label>
  );
}

export default function App() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');

  return (
    <div>
      <div className="userinput">
        <Form label="Name:" val={name} setVal={setName}/>
        <Form label="Email:" val={email} setVal={setEmail}/>
        <Form label="Phone Number:" val={phoneNum} setVal={setPhoneNum}/>
      </div>
      <div className="result">
        <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
      </div>
    </div>
  );
}