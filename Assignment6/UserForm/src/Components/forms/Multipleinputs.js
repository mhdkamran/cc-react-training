import React, { useState } from "react";
import "./CSS/style.css";
const Multipleinputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setUserRegistration({ ...setUserRegistration, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecord = {
      ...userRegistration,
      id:new Date().getTime().toString()};
      console.log(records)
    setRecords([...records, newRecord]);
    console.log(records);
    setUserRegistration({ username: "", email: "", phone: "", password: "" });
  }
  return (
    <div className="container">
        <h2>Register here</h2>
        <hr />
      <form action=""onSubmit={handleSubmit}>
        <div>
        
          <label htmlFor="username">User Name</label>
          <input
            required type="text" placeholder="Enter your Name"
            autoComplete="off"  minLength="4" maxLength="8"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required type="text" placeholder="Enter your Email"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            required type="text" placeholder="Enter your Phone"
            autoComplete="off"  minLength="10" maxLength="12"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required type="password" placeholder="Enter your Password"
            autoComplete="off"  minLength="6" maxLength="10"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {records.map((curElem) => {
          const { id, username, email, phone, password } = curElem;
          return (
            <div className="showDAtaStyle" key={id}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{password}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
};
export default Multipleinputs;
