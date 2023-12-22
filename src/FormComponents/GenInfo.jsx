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
        <div>
            <Name val={nameVal} />
            <Email val={emailVal} />
            <PhoneNum val={phoneVal} />
        </div>
    );
}