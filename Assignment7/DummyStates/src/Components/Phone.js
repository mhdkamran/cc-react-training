
import React, { useState } from 'react';
import './style.css'

export default function Phone() {
    const [PhoneNum, setPhoneNum] = useState("");
    const [HasData, setHasData] = useState("");

    const HandlePhone=(e)=>
    {
        setPhoneNum(e.target.value)
    }
    const HandleHasData=(e)=>{
        setHasData(e.target.value)
    }

    const Submit=(e)=>
    {
        let msg=`Phone number: ${PhoneNum} Do you Have data? ${HasData}`
        alert(msg)
    }
    return (
        <div className="container">
             <form  onSubmit={Submit}>
            <label htmlFor="Phone"><b>Phone</b></label>
            < input type='tel' placeholder="Enter your Number" onChange={HandlePhone} minLength="10" maxLength="12" required/>
            <p>{PhoneNum}</p>
            <label htmlFor="HasData"><b>Have Data Pack?</b></label>
      <div onChange={HandleHasData}>
        <input type="radio" value="Yes" /> Yes
        <input type="radio" value="No" /> No
        <p>{HasData}</p>
      </div>
      <button>Submit</button>
      </form>
        </div>
    )
}
