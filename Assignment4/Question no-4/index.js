let users = [
    {id: 1, name:"Raksha", surname:"Sharma", age:28},
    {id: 2, name:"Srinivas", surname:"lyengar", age:30},
    {id: 3, name:"Usha", surname:"Janardhana", age:54},
];
//console.log(users);

let newusers = users.map( (cvalue) => {
    return `fullName: ${cvalue.name} ${cvalue.surname} id: ${cvalue.id}`;
} );
console.log(newusers);
document.getElementById('Result').innerHTML = newusers;
