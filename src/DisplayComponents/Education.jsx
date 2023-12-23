/* eslint-disable react/prop-types */

function EducationList({array}) {
    const educationList = array.map((education) => 
    <div key={education.id} className="educationItem">
        <div>{education.schoolName}</div>
        <div>{education.major}</div>
        <div>{education.date}</div>
    </div>
    );
    return educationList
}

export default function EducationDisplay({array}) {
    return (
        <div>
            <EducationList array={array}/>
        </div>
    );
}