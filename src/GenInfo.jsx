function Name({val}) {

}

function Email({val}) {

}

function PhoneNum({val}) {

}

export default function GenInfo({nameVal,emailVal,phoneVal}) {
    return (
        <div>
            <Name val={nameVal} />
            <div>{nameVal}</div>
            <Email val={emailVal} />
            <div>{emailVal}</div>
            <PhoneNum val={phoneVal} />
            <div>{phoneVal}</div>
        </div>
    );
}