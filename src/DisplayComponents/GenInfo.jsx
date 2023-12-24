/* eslint-disable react/prop-types */

function Name({val}) {
    return (
        <div>{val}</div>
    );
}

function Email({val}) {
    return (
        <div>{val}</div>
    );
}

function PhoneNum({val}) {
    return (
        <div>{val}</div>
    );
}

export default function GenInfo({nameVal,emailVal,phoneVal}) {
    return (
        <div className="genInfoDisplay">
            <div className="name">
                <Name val={nameVal} />
            </div>
            <div className="emailnumber">
                <Email val={emailVal}/>{"  |  "}
                <PhoneNum val={phoneVal}/>
            </div>
        </div>
    );
}