// const student = {
//   name: "keerthu",
//   age: 22,
//   city: "Chennai",

//   greet: function () {
//     console.log(`Hello, my name is ${this.name}. I am ${this.age} years old `);
//   }
// };

// student.greet();




// const students = {name: "keerthu", age: 22, city: "Chennai" , 
//   showname() {return this.name +"  from "+ this.city}};
//   console.log(students.showname());



const prices = [120, 60, 899];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log("Total:", total);


const students = [
    { name: "Keerthu", marks: 95 },
    { name: "Ziya", marks: 92 },
     { name: "Diya", marks: 82 },
    { name: "Riya", marks: 78 }
];

const student = students.find(s => s.name === "Keerthu");

if (student) {
    console.log("Keerthu's marks:", student.marks);
} else {
    console.log("Not found");
}


function makeGreeter(greeting) {
    return function(name) {
        return `${greeting} ${name}`;
    };
}
const greet = makeGreeter("Hello");
console.log(greet("Riya"));


async function fetchUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();
        users.map(user => console.log(user.name));
    } catch (error) {
        console.log("Error fetching users:", error);
    }
}

fetchUsers();