/* eslint-disable react/prop-types */

function EducationList({array}) {
    const educationList = array.map((education) => 
    <div key={education.id} className="educationItem">
        <div className="top">
            <div>{education.schoolName}</div>
            <div>{education.date}</div>
        </div>
        <div className="bottom">
            <div>{education.major}</div>
        </div>
    </div>
    );
    return educationList
}

export default function EducationDisplay({array}) {
    return (
        <div className="educationDisplay">
            {" "}
            <div className="header">Education</div>
            <EducationList array={array}/>
        </div>
    );
}