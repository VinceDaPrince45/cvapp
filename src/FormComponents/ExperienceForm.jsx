import { useState } from "react";
import { Field } from "./GenInfoForm";

function ExperienceForm({array}) {
    const [companyName,setCompanyName] = useState('');
    const [position,setPosition] = useState('');
    const [responsibilities,setResponsibilities] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [show,setShow] = useState(true);

    return show
        ?
        <div className="genInfo">
            <Field label="Company Name:" val={companyName} setVal={setCompanyName}/>
            <Field label="Position Title:" val={position} setVal={setPosition}/>
            <Field label="Responsibilities:" val={responsibilities} setVal={setResponsibilities}/>
            <Field label="Date Started" val={startDate} setVal={setStartDate}/>
            <Field label="Date Ended" val={endDate} setVal={setEndDate}/>
            <button onClick={()=>setShow(!show)}>Show</button>
            <button>Save</button>
        </div>
        :
        null;
}

export { ExperienceForm as ExpForm }