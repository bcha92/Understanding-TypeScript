// Advanced Types of TypeScript

// Intersection Types
type Admin = {
    name: string;
    privileges: string[];
    startDate: Date;
};

type Employee = {
    name: string;
    startDate: Date;
};

interface ElevatedEmployee extends Employee, Admin {};
// type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Brandy",
    privileges: ["server-admin"],
    startDate: new Date()
}

console.log(e1);
// Optional Chaining
console.log(e1?.privileges);

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

// Function Overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
// Combinable Function
function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(add("West", "Side"), add("West", 49), add(93, 33));

type UnknownEmployee = Employee | Admin;
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    console.log("Privileges: " + emp.startDate);
}

printEmployeeInformation({name: "Manuel", startDate: new Date()});

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount: number) {
        console.log("Loading cargo ..." + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
interface Bird {
    type: "bird";
    flyingSpeed: number;
}
interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Moving at speed: " + speed);
}

moveAnimal({type: "bird", flyingSpeed: 10});
moveAnimal({type: "horse", runningSpeed: 40});

// Type Casting
const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
const paragraph = document.createElement("p");
paragraph.id = "message-output";
paragraph.innerText = "Hi There!";
userInputElement.appendChild(paragraph);

interface ErrorContainer {
    // { email: "Not valid email address", username: "Must start with a character"}
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: "Not a valid email address!",
    username: "Must start with a capital character!"
}