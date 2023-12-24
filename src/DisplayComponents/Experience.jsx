/* eslint-disable react/prop-types */

function ExperienceList({array}) {
    const experienceList = array.map((experience) => 
    <div key={experience.id} className="experienceItem">
        <div className="top">
            <div>{experience.company}</div>
            <div className="date">
                <div>{experience.start}</div>{" - "}
                <div>{experience.end}</div>
            </div>
        </div>
        <div className="bottom">
            <div>{experience.position}</div>
            <div>{experience.responsibilities}</div>
        </div>
    </div>
    );
    return experienceList;
}

export default function ExperienceDisplay({array}) {
    return (
        <div>
            {" "}
            <div className="header">Experience</div>
            <ExperienceList array={array}/>
        </div>
    );
}