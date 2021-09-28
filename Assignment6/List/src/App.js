//import logo from './logo.svg';
//import './App.css';
import React, {Component} from 'react';

class App extends Component {
  state = {
    people : [
      {id : 1, firstName:"Akshay", lasttName:"Kumar", contact:9467890501},
      {id : 2, firstName:"Sidhu", lasttName:"Singh", contact:9467890511},
      {id : 3, firstName:"Sahil", lasttName:"Khan", contact:9467890512},
      {id : 4, firstName:"Rohan", lasttName:"Tiwari", contact:9467890521},
  ]
}
  render(){
    const { people } = this.state;
    const personJSX = [];
    people.forEach((person) =>{
      personJSX.push(
    <li key={person.id}>Person name is {`${person.firstName} ${person.lasttName} ${person.contact}`}</li>
      )
    });
return (
 <div>
   <h2>Q.1. Create a List Component that renders a list of items from an array. The list could be any list of your choice.
</h2>
   {/*<ul>
     <li>Person name is {`${this.state.people[0].firstName} ${this.state.people[0].lasttName} ${this.state.people[0].contact}`}</li>
     <li>Person name is {`${this.state.people[0].firstName} ${this.state.people[1].lasttName} ${this.state.people[1].contact}`}</li>
     <li>Person name is {`${this.state.people[0].firstName} ${this.state.people[2].lasttName} ${this.state.people[2].contact}`}</li>
     <li>Person name is {`${this.state.people[0].firstName} ${this.state.people[3].lasttName} ${this.state.people[3].contact}`}</li>
   </ul>
   <ul>
     {people.map((person)=>{
       return <li key={person.id}>Person name is {`${person.firstName} ${person.lasttName} ${person.contact}`}</li>
     })}
   </ul>*/}
   <ul>
     {personJSX}
   </ul>
 </div>
);
}
}
export default App;
