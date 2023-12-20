import { useState } from "react";
import GenInfo from "./GenInfo";

export default function App({nameVal,emailVal,phoneVal}) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNum,setPhoneNum] = useState('');
  return (
    <div>
      <label>
        Name:{" "}
        <input 
          type="text"
          value={name}
          onChange={(event)=>setName(event.target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input 
          type="text"
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
        />
      </label>
      <label>
        Phone Number:{" "}
        <input 
          type="text"
          value={phoneNum}
          onChange={(event)=>setPhoneNum(event.target.value)}
        />
      </label>
      <GenInfo nameVal={name} emailVal={email} phoneVal={phoneNum} />
    </div>
  );
}