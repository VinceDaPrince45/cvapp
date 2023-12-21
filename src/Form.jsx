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

function EducationEdit() {
}

function EducationDisplay({array,setArray,element}) {
    const [show,setShow] = useState(false);
    const [edit,setEdit] = useState(false);

    const editFunc = (element) => {
        console.log("runs");
        return (
            <EducationForm array={array} setArray={setArray} schoolDefault={element.schoolName} majorDefault={element.major} educationDefault={element.date}/>
        );
    }

    if (show && edit) {
        console.log('show and edit')
        return (
            editFunc(element)
        );
    } else if (show && !edit) {
        console.log('show')
        return (
            <>
                <div key={element.schoolName}>
                    {element.schoolName}{" "}
                    {element.major}{" "}
                    {element.date}
                </div>
                <button onClick={()=>setEdit(!edit)}>Edit</button>
                <button onClick={()=>setShow(!show)}>Show</button>
            </>
        );
    } else {
        console.log('none')
        return (
            <>
                <div key={element.schoolName}>
                    {element.schoolName}
                </div>
                <button onClick={()=>setShow(!show)}>Show</button>
            </>
        );
    }
}

function EducationForm({array,setArray,schoolDefault='',majorDefault='',educationDefault=''}) {
    const [school,setSchool] = useState(schoolDefault);
    const [major,setMajor] = useState(majorDefault);
    const [educationDate,setEducationDate] = useState(educationDefault);
    const [show,setShow] = useState(true);

    const saveFunc = () => {
        // create new object
        const education = {schoolName:school,major:major,date:educationDate};
        const newArray = array;
        if (newArray.length == 0) {
            newArray.push(education);
        } else {
            let found = false;
            for (let i=0;i<newArray.length;i++) {
                if (education.schoolName === newArray[i].schoolName) { // update that object in array
                    found = true;
                    newArray[i] = education;
                    break;
                }
            }
            if (!found) {
                array.push(education);
            }
        }
        setArray(newArray);
        setSchool('');
        setMajor('');
        setEducationDate('');
        setShow(!show);
    }

    return (
        show 
        ?
        <div className="genInfo">
            {array.map((education)=> {
                return <EducationDisplay key={education.schoolName} element={education}/>
            })}
            <Field label="School Name:" val={school} setVal={setSchool}/>
            <Field label="Field of Study:" val={major} setVal={setMajor}/>
            <Field label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
            <button onClick={saveFunc}>Save</button>
            <button onClick={()=>setShow(!show)}>Add Education</button>
        </div>
        : 
        <div className="genInfo">
            {array.map((education)=> {
                return <EducationDisplay key={education.schoolName} element={education}/>
            })}
            <button onClick={()=>setShow(!show)}>Add Education</button>
        </div>
    );
    // when pressing save, checks if array is empty first, then compares school names to see if it already exists
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

export {GenInfoForm as GenInfoForm, ExperienceForm as ExpForm, EducationForm as EducationForm};