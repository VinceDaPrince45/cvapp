import { useState } from "react";
import { v4 as uuid } from "uuid";

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

function EducationDisplay({array,setArray,element}) {
    const [show,setShow] = useState(false);
    const [edit,setEdit] = useState(false);

    const editFunc = (element) => {
        console.log(element);
        return (
            <EducationForm array={array} setArray={setArray} idDefault={element.id} schoolDefault={element.schoolName} majorDefault={element.major} educationDefault={element.date} individual={true}/>
        );
    }

    if (show && edit) {
        return (
            editFunc(element)
        );
    } else if (show && !edit) {
        return (
            <>
                <div key={element.id}>
                    {element.schoolName}{" "}
                    {element.major}{" "}
                    {element.date}
                </div>
                <button onClick={()=>setEdit(!edit)}>Edit</button>
                <button onClick={()=>setShow(!show)}>Show</button>
            </>
        );
    } else {
        return (
            <>
                <div key={element.id}>
                    {element.schoolName}
                </div>
                <button onClick={()=>setShow(!show)}>Show</button>
            </>
        );
    }
}

function EducationList({array,setArray}) {
    const displays = array.map((education) => <EducationDisplay key={education.id} array={array} setArray={setArray} element={education}/>);
    return displays;
}

function EducationForm({array,setArray,idDefault='',schoolDefault='',majorDefault='',educationDefault='',individual=false}) {
    const [school,setSchool] = useState(schoolDefault);
    const [major,setMajor] = useState(majorDefault);
    const [educationDate,setEducationDate] = useState(educationDefault);
    const [show,setShow] = useState(true);

    const saveNew = (idDefault=uuid()) => {
        // create new object
        const newArray = array;
        if (newArray.length == 0) {
            newArray.push({id:idDefault,schoolName:school,major:major,date:educationDate});
        } else {
            let found = false;
            for (let i=0;i<newArray.length;i++) {
                if (idDefault === newArray[i].id) { // update that object in array
                    found = true;
                    newArray[i] = {id:idDefault,schoolName:school,major:major,date:educationDate};
                    break;
                }
            }
            if (!found) {
                array.push({id:idDefault,schoolName:school,major:major,date:educationDate});
            }
        }
        setArray(newArray);
        setSchool('');
        setMajor('');
        setEducationDate('');
        setShow(!show);
    }

    if (individual) {
        return (
            <div className="genInfo">
                <Field label="School Name:" val={school} setVal={setSchool}/>
                <Field label="Field of Study:" val={major} setVal={setMajor}/>
                <Field label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
                <button onClick={()=>saveNew(idDefault)}>Save</button>
                <button onClick={()=>setShow(!show)}>Add Education</button>
            </div>
        );
    } else if (show) {
        return (
            <div className="genInfo">
                <EducationList array={array} setArray={setArray}/>
                <Field label="School Name:" val={school} setVal={setSchool}/>
                <Field label="Field of Study:" val={major} setVal={setMajor}/>
                <Field label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
                <button onClick={()=>saveNew()}>Save</button>
                <button onClick={()=>setShow(!show)}>Add Education</button>
            </div>
        );
    } else {
        return (
            <div className="genInfo">
                <EducationList array={array} setArray={setArray}/>
                <button onClick={()=>setShow(!show)}>Add Education</button>
            </div>
        );
    }
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