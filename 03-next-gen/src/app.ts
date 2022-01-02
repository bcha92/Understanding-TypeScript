// Next Generation TypeScript and JavaScript (ES6 - Present)
const userName = "Max";
// userName = "Maximilian";
// let age = 30;

// age = 29;
// let result;

// function add(a: number, b: number) {
//     result = a + b;
//     return result;
// }

// console.log(result);

// if (age > 20) {
//     var isOld = true;
//     console.log(isOld);
// }

// const add = (a: number, b: number = 1) => a + b;
const printOutput: (a: number | string) => void = output => console.log(output);
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", event => console.log(event));
}

// printOutput(add(5));

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const person = {
    name: "Max",
    age: 30
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => numbers.reduce((a, b) => a + b, 0);

const addedNumbers = add(5, 10, 2, 3, 7);
console.log(addedNumbers);

// Object Destructuring
const { age } = person;
console.log(age);