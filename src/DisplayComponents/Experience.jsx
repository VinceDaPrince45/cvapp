/* eslint-disable react/prop-types */

function ExperienceList({array}) {
    const experienceList = array.map((experience) => 
    <div key={experience.id} className="experienceItem">
        <div>{experience.company}</div>
        <div>{experience.position}</div>
        <div>{experience.responsibilities}</div>
        <div>{experience.start}</div>
        <div>{experience.end}</div>
    </div>
    );
    return experienceList;
}

export default function ExperienceDisplay({array}) {
    return (
        <div>
            <ExperienceList array={array}/>
        </div>
    );
}