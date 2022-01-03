// Interfaces
interface Identity {
    readonly name?: string;
    readonly age: number;
    outputName?: string; // ? is for Optional Parameters
}

interface Greetable extends Identity {
    greet(phrase: string): void;
}

// Class Person gets Greetable
class Person implements Greetable {
    name?: string;
    age: number;

    constructor(a: number, n?: string) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        if (!this.name) {
            console.log("Hi! " + phrase);
        }
        else {
            console.log("My name is " + this.name + ", and " + phrase);
        }
    }
}

let user1: Greetable;

user1 = new Person(29)
console.log(user1);
user1.greet("I am a coder.");

// Custom Function Type Example as Comparison
type addFn = (a: number, b: number) => number;
let add: addFn;
add = (n1: number, n2: number) => n1 + n2;
console.log(add(6, 5))