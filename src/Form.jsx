export default function Form({label,val,setVal}) {
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