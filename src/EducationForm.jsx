import { useState } from "react";
import { Field } from "./GenInfoForm";
import { v4 as uuid } from "uuid";

function EducationItem({array,setArray,element}) {
    const [school,setSchool] = useState(element.schoolName);
    const [major,setMajor] = useState(element.major);
    const [educationDate,setEducationDate] = useState(element.date);
    const [show,setShow] = useState(false);
    const [edit,setEdit] = useState(false);

    const editFunc = () => {
        console.log("running");
        for (let i=0;i<array.length;i++) {
            if (element.id == array[i].id) {
                array[i] = {id:element.id,schoolName:school,major:major,date:educationDate};
                element.schoolName = school;
                element.major = major;
                element.date = educationDate;
            }
        }
        setShow(!show);
        setEdit(!edit);
    }
    if (show && edit) {
        return (
            <div className="editEducation">
                <Field label="School Name:" val={school} setVal={setSchool}/>
                <Field label="Field of Study:" val={major} setVal={setMajor}/>
                <Field label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
                <button className="educationbutton" onClick={editFunc}>Save</button>
                <button className="educationbutton" onClick={()=>setShow(!show)}>Show</button>
            </div>
        );
    } else if (show && !edit) {

        return (
            <>
                <div className="editEducation">
                    {element.schoolName}{" "}
                    {element.major}{" "}
                    {element.date}
                </div>
                <button className="educationbutton" onClick={()=>setEdit(!edit)}>Edit</button>
                <button className="educationbutton" onClick={()=>setShow(!show)}>Show</button>
            </>
        );
    } else {
        return (
            <>
                <div className="editEducation">
                    {element.schoolName}
                </div>
                <button className="educationbutton" onClick={()=>setShow(!show)}>Show</button>
            </>
        );
    }
}

function EnteredEducations({array,updateArray}) {
    const educationList = array.map((education) => <EducationItem key={education.id} array={array} setArray={updateArray} element={education}/>);
    return educationList;
}

function EducationForm({array,setArray,schoolDefault='',majorDefault='',educationDefault=''}) {
    const [school,setSchool] = useState(schoolDefault);
    const [major,setMajor] = useState(majorDefault);
    const [educationDate,setEducationDate] = useState(educationDefault);
    const [show,setShow] = useState(true);

    const saveNew = (idDefault=uuid()) => {
        // create new object
        const newArray = array;
        newArray.push({id:idDefault,schoolName:school,major:major,date:educationDate});
        setArray(newArray);
        setSchool('');
        setMajor('');
        setEducationDate('');
        setShow(!show);
    }

    return (
        show
        ?
        <div className="newEducation">
            <EnteredEducations array={array} updateArray={setArray}/>
            <Field label="School Name:" val={school} setVal={setSchool}/>
            <Field label="Field of Study:" val={major} setVal={setMajor}/>
            <Field label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
            <button onClick={()=>saveNew()}>Save</button>
            <button onClick={()=>setShow(!show)}>Add Education</button>
        </div>
        :
        <div className="newEducation">
            <EnteredEducations array={array}/>
            <button onClick={()=>setShow(!show)}>Add Education</button>
        </div>
    );
    // when pressing save, checks if array is empty first, then compares school names to see if it already exists
}

// whole form (EducationForm)
    // list of previously entered educations (prevEducation)
        // each education has edit and show button
            // edit button replaces education with form with pre entered info
                // this returns form that edits current array elements
    // add education button that spawns form (addNew)
        // this returns form that adds new element to array

export { EducationForm as EducationForm }