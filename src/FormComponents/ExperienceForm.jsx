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
                if (label == "Company Name:") {
                    newArray[i].company = val;
                } else if (label == "Position Title:") {
                    newArray[i].position = val;
                } else if (label == "Responsibilities:") {
                    newArray[i].responsibilities = val;
                } else if (label == "Date Started:") {
                    newArray[i].start = val;
                } else {
                    newArray[i].end = val;
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

function ExperienceItem({array,setArray,element,setCompanyName,setPosition,setResponsibilities,setStartDate,setEndDate}) {
    const [show,setShow] = useState(false);
    const [edit,setEdit] = useState(false);
    const [copyCompanyName,setCopyCompanyName] = useState(element.company);
    const [copyPosition,setCopyPosition] = useState(element.position);
    const [copyResponsibilities,setCopyResponsibilities] = useState(element.responsibilities);
    const [copyStartDate,setCopyStartDate] = useState(element.start);
    const [copyEndDate,setCopyEndDate] = useState(element.end);

    const editFunc = () => {
        const newArray = array;
        for (let i=0;i<newArray.length;i++) {
            if (element.id == newArray[i].id) {
                newArray[i] = {id:element.id,company:copyCompanyName,position:copyPosition,responsibilities:copyResponsibilities,start:copyStartDate,end:copyEndDate};
                element.company = copyCompanyName;
                element.position = copyPosition;
                element.responsibilities = copyResponsibilities;
                element.start = copyStartDate;
                element.end = copyEndDate;
            }
        }
        setCompanyName(copyCompanyName);
        setPosition(copyPosition);
        setResponsibilities(copyResponsibilities);
        setStartDate(copyStartDate);
        setEndDate(copyEndDate);
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
            <div className="editExperience">
                <UpdateField label="Company Name:" element={element} val={copyCompanyName} setVal={setCopyCompanyName} array={array} setArray={setArray}/>
                <UpdateField label="Position Title:" element={element} val={copyPosition} setVal={setCopyPosition} array={array} setArray={setArray}/>
                <UpdateField label="Responsibilities:" element={element} val={copyResponsibilities} setVal={setCopyResponsibilities} array={array} setArray={setArray}/>
                <UpdateField label="Date Started:" element={element} val={copyStartDate} setVal={setCopyStartDate} array={array} setArray={setArray}/>
                <UpdateField label="Date Ended:" element={element} val={copyEndDate} setVal={setCopyEndDate} array={array} setArray={setArray}/>
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

function EnteredExperiences({array,setArray,setCompanyName,setPosition,setResponsibilities,setStartDate,setEndDate}) {
    const experienceList = array.map((experience) => <ExperienceItem key={experience.id} array={array} setArray={setArray} element={experience} setCompanyName={setCompanyName} setPosition={setPosition} setResponsibilities={setResponsibilities} setStartDate={setStartDate} setEndDate={setEndDate}/>);
    return experienceList;
}

function ExperienceForm({array,setArray,companyName,setCompanyName,position,setPosition,responsibilities,setResponsibilities,startDate,setStartDate,endDate,setEndDate}) {
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
            <EnteredExperiences array={array} setArray={setArray} companyName={companyName} setCompanyName={setCompanyName} position={position} setPosition={setPosition} responsibilities={responsibilities} setResponsibilities={setResponsibilities} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
            <NewField label="Company Name:" val={companyName} setVal={setCompanyName}/>
            <NewField label="Position Title:" val={position} setVal={setPosition}/>
            <NewField label="Responsibilities:" val={responsibilities} setVal={setResponsibilities}/>
            <NewField label="Date Started" val={startDate} setVal={setStartDate}/>
            <NewField label="Date Ended" val={endDate} setVal={setEndDate}/>
            <button onClick={()=>saveNew()}>Save</button>
            <button onClick={()=>setShow(!show)}>Add Experience</button>
        </div>
        :
        <div className="newExperience">
            <EnteredExperiences array={array} setArray={setArray} companyName={companyName} setCompanyName={setCompanyName} position={position} setPosition={setPosition} responsibilities={responsibilities} setResponsibilities={setResponsibilities} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
            <button onClick={()=>setShow(!show)}>Add Experience</button>
        </div>
    );
}

export { ExperienceForm as ExpForm }