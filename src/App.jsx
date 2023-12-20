import { useState } from "react";
import GenInfo from "./GenInfo";

export default function App({nameVal,emailVal,phoneVal}) {
  const [name,setName] = useState('');
  return (
    <div>
      <label>
        <input 
          type="text"
          value={name}
          onChange={(event)=>setName(event.target.value)}
        />
      </label>
      <GenInfo nameVal={nameVal} emailVal={emailVal} phoneVal={phoneVal} />
    </div>
  );
}