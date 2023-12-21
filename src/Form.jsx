function Field({label,val,setVal}) {
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

function Form({
    formName,
    val1name,
    val2name,
    val3name,
    val1,
    val2,
    val3,
    setVal1,
    setVal2,
    setVal3
    }) {
    return (
        <div className={formName}>
            <Field label={val1name} val={val1} setVal={setVal1}/>
            <Field label={val2name} val={val2} setVal={setVal2}/>
            <Field label={val3name} val={val3} setVal={setVal3}/>
        </div>
    );
}

function ExperienceForm({
    formName,
    val1name,
    val2name,
    val3name,
    val4name,
    val5name,
    val1,
    val2,
    val3,
    val4,
    val5,
    setVal1,
    setVal2,
    setVal3,
    setVal4,
    setVal5,
    toggled
    }) {
    return toggled 
        ?
        <div className={formName}>
            <Field label={val1name} val={val1} setVal={setVal1}/>
            <Field label={val2name} val={val2} setVal={setVal2}/>
            <Field label={val3name} val={val3} setVal={setVal3}/>
            <Field label={val4name} val={val4} setVal={setVal4}/>
            <Field label={val5name} val={val5} setVal={setVal5}/>
        </div>
        :
        null;
}

export {Form as InfoForm, ExperienceForm as ExpForm};