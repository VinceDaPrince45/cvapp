import { useState } from "react";

function Field({label,val,setVal}) {
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

function GenInfoForm({
    formName,
    val1name,
    val2name,
    val3name,
    val1,
    val2,
    val3,
    setVal1,
    setVal2,
    setVal3
    }) {
    return (
        <div className={formName}>
            <Field label={val1name} val={val1} setVal={setVal1}/>
            <Field label={val2name} val={val2} setVal={setVal2}/>
            <Field label={val3name} val={val3} setVal={setVal3}/>
        </div>
    );
}

function EducationForm({array}) {
    const [school,setSchool] = useState('');
    const [major,setMajor] = useState('');
    const [educationDate,setEducationDate] = useState('');

    return (
        <div className="genInfo">
            <Field label="School Name:" val={school} setVal={setSchool}/>
            <Field label="Field of Study:" val={major} setVal={setMajor}/>
            <Field label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
        </div>
    );
}

function ExperienceForm({array}) {
        const [companyName,setCompanyName] = useState('');
        const [position,setPosition] = useState('');
        const [responsibilities,setResponsibilities] = useState('');
        const [startDate,setStartDate] = useState('');
        const [endDate,setEndDate] = useState('');
        const [show,setShow] = useState(true);

        return show
            ?
            <div className="expForm">
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

export {GenInfoForm as GenInfoForm, ExperienceForm as ExpForm, EducationForm as EducationForm};