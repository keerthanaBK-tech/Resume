// console.log("AssignmentScript.js loaded sucessfully!");
// console.log(4+5);

// const teammates = [{name:"rishi", age: 22}, {name:"sachin", age: 23}, {name:"saurabh", age: 24}];
// const newarray = teammates.filter((teammate) => teammate.age > 22).map((teammate) => teammate.age).join(", ");
// console.log(newarray);
// const students = [
//   { name: "keerthu", age: 22 },
//   { name: "diya", age: 23 },
//   { name: "riya", age: 24 }
// ];

// const result = students
//   .filter((student) => student.age > 22)
//   .map((student) => student.name);

// console.log(result);

const students = {name: "keerthu", age: 22, city: "Chennai" , 
  showname() {return this.name +"  from "+ this.city}};
  console.log(students.showname());