/* eslint-disable react/prop-types */

import { useState } from "react";
import { Field } from "./GenInfoForm";
import { v4 as uuid } from "uuid";

function ExperienceItem({array,setArray,element}) {
    const [companyName,setCompanyName] = useState(element.company);
    const [position,setPosition] = useState(element.position);
    const [responsibilities,setResponsibilities] = useState(element.responsibilities);
    const [startDate,setStartDate] = useState(element.start);
    const [endDate,setEndDate] = useState(element.end);
    const [show,setShow] = useState(false);
    const [edit,setEdit] = useState(false);

    const editFunc = () => {
        const newArray = array;
        for (let i=0;i<newArray.length;i++) {
            if (element.id == array[i].id) {
                newArray[i] = {id:element.id,company:companyName,position:position,responsibilities:responsibilities,start:startDate,end:endDate};
                element.company = companyName;
                element.position = position;
                element.responsibilities = responsibilities;
                element.start = startDate;
                element.end = endDate;
            }
        }
        setArray(newArray);
        setShow(!show);
        setEdit(!edit);
    }

    const exit = () => {
        setShow(!show);
        setEdit(!edit);
    }

    if (show && edit) {
        return (
            <div className="editExperience">
                <Field label="Company Name:" val={companyName} setVal={setCompanyName}/>
                <Field label="Position Title:" val={position} setVal={setPosition}/>
                <Field label="Responsibilities:" val={responsibilities} setVal={setResponsibilities}/>
                <Field label="Date Started:" val={startDate} setVal={setStartDate}/>
                <Field label="Date Ended:" val={endDate} setVal={setEndDate}/>
                <button className="experiencebutton" onClick={editFunc}>Save</button>
                <button className="experiencebutton" onClick={exit}>Hide</button>
            </div>
        );
    } else if (show && !edit) {
        return (
            <div className="editExperience">
                {element.company}{" "}
                {element.position}{" "}
                {element.responsibilities}{" "}
                {element.start}{" "}
                {element.end}
                <button className="experiencebutton" onClick={()=>setEdit(!edit)}>Edit</button>
                <button className="experiencebutton" onClick={()=>setShow(!show)}>Hide</button>
            </div>
        );
    } else {
        return (
            <div className="editExperience">
                {element.company}
                <button className="experiencebutton" onClick={()=>setShow(!show)}>Show</button>
            </div>        
        );
    }
}

function EnteredExperiences({array,updateArray}) {
    const experienceList = array.map((experience) => <ExperienceItem key={experience.id} array={array} setArray={updateArray} element={experience}/>);
    return experienceList;
}

function ExperienceForm({array,setArray}) {
    const [companyName,setCompanyName] = useState('');
    const [position,setPosition] = useState('');
    const [responsibilities,setResponsibilities] = useState('');
    const [startDate,setStartDate] = useState('');
    const [endDate,setEndDate] = useState('');
    const [show,setShow] = useState(true);

    const saveNew = (idDefault=uuid()) => {
        // create new object
        const newArray = array;
        newArray.push({id:idDefault,company:companyName,position:position,responsibilities:responsibilities,start:startDate,end:endDate});
        setArray(newArray);
        setCompanyName('');
        setPosition('');
        setResponsibilities('');
        setStartDate('');
        setEndDate('');
        setShow(!show);
    }

    return (
        show
        ?
        <div className="newExperience">
            <EnteredExperiences array={array} setArray={setArray}/>
            <Field label="Company Name:" val={companyName} setVal={setCompanyName}/>
            <Field label="Position Title:" val={position} setVal={setPosition}/>
            <Field label="Responsibilities:" val={responsibilities} setVal={setResponsibilities}/>
            <Field label="Date Started" val={startDate} setVal={setStartDate}/>
            <Field label="Date Ended" val={endDate} setVal={setEndDate}/>
            <button onClick={()=>saveNew()}>Save</button>
            <button onClick={()=>setShow(!show)}>Add Experience</button>
        </div>
        :
        <div className="newExperience">
            <EnteredExperiences array={array} setArray={setArray}/>
            <button onClick={()=>setShow(!show)}>Add Experience</button>
        </div>
    );
}

export { ExperienceForm as ExpForm }