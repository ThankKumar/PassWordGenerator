import React, { useState } from "react";

let PasswordGenerator = () =>{
  let [state, setState] = useState(
    {
    generatedPassword:'',
    passwordLength:20,
    symbols:false,
    numbers:false,
    lower:false,
    upper:false
   });

   let updateInput = (event)=>{
    setState({
        ...state,
        [event.target.name]:event.target.value
    })
   };
   let updateCheck = (event)=>{
    setState({
        ...state,
        [event.target.name]:event.target.checked
    })
   };
   let submit = (event) =>{
event.preventDefault();
// console.log(state);
// let rendomLower = String.fromCharCode(97);
// console.log(rendomLower)
let rendomLower = String.fromCharCode(Math.floor(Math.random()*26) +97);
console.log(rendomLower)
   }

    return (
        <React.Fragment>

        <pre>{JSON.stringify(state)}</pre>
        <div className="container mt-5">
        <div className="row">
        <div className="col-md-4">
        <div className="card shadow-lg">
        <div className="card-header bg-warning p-3">
        <p className="h4">Password Generator</p>
        </div>
        <div className="card-body bg-warning">
        <form onSubmit={submit}>
        <div className="mb-2">
        <div className="input-group">
<span className="input-group-text">Password</span>
<input 
required={true}
value={state.generatePassword}
name="generatedPassword"
onChange={updateInput}
type="text" className="form-control" placeholder="Generated Password"/>
<span className="input-group-text"><i className="fa fa-clipboard"/></span>
        </div>
        </div>
        <div className="mb-2">
        <div className="input-group">
        <input 
        value={state.passwordLength}
        name="passwordLength"
        onChange={updateInput}
        type="number" className="form-control" placeholder="Password Length"/>
        <span className="input-group-text">Password length</span>
        </div>
        </div>

<div className="mb-2">
<div className="input-group">
<span className="input-group-text bg-white">
<input 
onChange={updateCheck}
name="symbols"
type="checkbox" className="form-check-input"  />
</span>
<input type="text" disabled={true} className="form-control" placeholder="Symbols"/>
</div>
        </div>
        <div className="mb-2">
<div className="input-group">
<span className="input-group-text bg-white">
<input 
onChange={updateCheck}
name="numbers"
type="checkbox" className="form-check-input"  />
</span>
<input type="text" disabled={true} className="form-control" placeholder="Numbers"/>
</div>
        </div>
        <div className="mb-2">
<div className="input-group">
<span className="input-group-text bg-white">
<input 
onChange={updateCheck}
name="lower"
type="checkbox" className="form-check-input"  />
</span>
<input type="text" disabled={true} className="form-control" placeholder="Lower Case letters"/>
</div>
        </div>
        <div className="mb-2">
<div className="input-group">
<span className="input-group-text bg-white">
<input

onChange={updateCheck}
name="upper"

 type="checkbox" className="form-check-input"  />
</span>
<input type="text" disabled={true} className="form-control" placeholder="Upper case Letters"/>
</div>
</div>
<div className="mb-2 ">
<input type="submit" value="Generate" className="btn btn-outline-dark " />

</div>
        </form>
        </div>

        </div>

        </div>

        </div>


        </div>
        </React.Fragment>
    )
}
export default PasswordGenerator;