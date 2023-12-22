import { useState } from "react";
import { Field } from "./GenInfoForm";

function EducationDisplay({array,setArray,element}) {
    const [show,setShow] = useState(false);
    const [edit,setEdit] = useState(false);

    const editFunc = (element) => {
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

export { EducationForm as EducationForm }