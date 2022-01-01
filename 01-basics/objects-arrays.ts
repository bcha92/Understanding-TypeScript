// TypeScript Basic Object Assignment

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[]
//     role: [number, string];
// } = {

// ENUM Construct
enum Role {
    ADMIN = 5, READ_ONLY = 100, AUTHOR = "Banksy"
};

const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// Not the best practice above, but it works in certain cases

// Push and Replace in array in object
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"]

// Variables
// let favoriteActivities: any[];
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person);

// For Loop
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log(" is author.")
}