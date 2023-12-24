/* eslint-disable react/prop-types */

function Field({label,val,setVal}) {
  return (
      <label>
      {label}{"\n"}
        <input 
          type="text"
          value={val}
          onChange={(event)=>setVal(event.target.value)}
        />
      </label>
  );
}

function GenInfoForm({
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
      <div className="genInfo">
          <Field label={val1name} val={val1} setVal={setVal1}/>
          <Field label={val2name} val={val2} setVal={setVal2}/>
          <Field label={val3name} val={val3} setVal={setVal3}/>
      </div>
  );
}


export {GenInfoForm as GenInfoForm, Field as Field};