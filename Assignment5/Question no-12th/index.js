const students = [
    {name: "Sohan", subject: "JavaScript"},
    {name: "Rohan", subject: "ReactJs"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 3000);
}

let newStudent = {name:"Sunny", subject:"Java"}
enrollStudent(newStudent, getStudents);

