/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";

function NewField({label,val,setVal}) {
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

function UpdateField({label,element,val,setVal,array,setArray}) {
    const updateArray = () => {
        const newArray = array;
        for (let i=0;i<newArray.length;i++) {
            if (element.id == newArray[i].id) {
                if (label == "School Name:") {
                    newArray[i].schoolName = val;
                } else if (label == "Field of Study:") {
                    newArray[i].major = val;
                } else {
                    newArray[i].date = val;
                }
            }
        }
        setArray(newArray);
    }

    const update = (event) => {
        setVal(event.target.value);
        updateArray()
    }

    return (
        <label>
        {label}{" "}
          <input 
            type="text"
            value={val}
            onChange={(event)=>update(event)}
          />
        </label>
    );
}

function EducationItem({array,setArray,element,setSchool,setMajor,setEducationDate}) {
    const [show,setShow] = useState(false);
    const [edit,setEdit] = useState(false);
    const [copySchool,setCopySchool] = useState(element.schoolName);
    const [copyMajor,setCopyMajor] = useState(element.major);
    const [copyEducationDate,setCopyEducationDate] = useState(element.date);

    const editFunc = () => {
        const newArray = array;
        for (let i=0;i<newArray.length;i++) {
            if (element.id == newArray[i].id) {
                newArray[i] = {id:element.id,schoolName:copySchool,major:copyMajor,date:copyEducationDate};
                element.schoolName = copySchool;
                element.major = copyMajor;
                element.date = copyEducationDate;
            }
        }
        setSchool(copySchool);
        setMajor(copyMajor);
        setEducationDate(copyEducationDate);
        setArray(newArray)
        setShow(!show);
        setEdit(!edit);
    }

    const exit = () => {
        setShow(!show);
        setEdit(!edit);
    }

    if (show && edit) {
        return (
            <div className="editEducation">
                <UpdateField label="School Name:" element={element} val={copySchool} setVal={setCopySchool} array={array} setArray={setArray}/>
                <UpdateField label="Field of Study:" element={element} val={copyMajor} setVal={setCopyMajor} array={array} setArray={setArray}/>
                <UpdateField label="Date of Study:" element={element} val={copyEducationDate} setVal={setCopyEducationDate} array={array} setArray={setArray}/>
                <button className="educationbutton" onClick={editFunc}>Save</button>
                <button className="educationbutton" onClick={exit}>Hide</button>
            </div>
        );
    } else if (show && !edit) {
        return (
            <div className="editEducation">
                {element.schoolName}{" "}
                {element.major}{" "}
                {element.date}
                <button className="educationbutton" onClick={()=>setEdit(!edit)}>Edit</button>
                <button className="educationbutton" onClick={()=>setShow(!show)}>Hide</button>
            </div>
        );
    } else {
        return (
            <div className="editEducation">
                {element.schoolName}
                <button className="educationbutton" onClick={()=>setShow(!show)}>Show</button>
            </div>        
        );
    }
}

function EnteredEducations({array,updateArray,setSchool,setMajor,setEducationDate}) {
    const educationList = array.map((education) => <EducationItem key={education.id} array={array} setArray={updateArray} element={education} setSchool={setSchool} setMajor={setMajor} setEducationDate={setEducationDate}/>);
    return educationList;
}

function EducationForm({array,setArray,school,setSchool,major,setMajor,educationDate,setEducationDate}) {
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
            <EnteredEducations array={array} updateArray={setArray} school={school} setSchool={setSchool} major={major} setMajor={setMajor} educationDate={educationDate} setEducationDate={setEducationDate}/>
            <NewField label="School Name:" val={school} setVal={setSchool}/>
            <NewField label="Field of Study:" val={major} setVal={setMajor}/>
            <NewField label="Date of Study:" val={educationDate} setVal={setEducationDate}/>
            <button onClick={()=>saveNew()}>Save</button>
            <button onClick={()=>setShow(!show)}>Add Education</button>
        </div>
        :
        <div className="newEducation">
            <EnteredEducations array={array} updateArray={setArray} school={school} setSchool={setSchool} major={major} setMajor={setMajor} educationDate={educationDate} setEducationDate={setEducationDate}/>
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