// Generics
// const names: Array<string> = []; // equivalent to string[]
// // names[0].split(" ");
// const promise:Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => {resolve(10)}, 2000);
// });

// promise.then(data => {data.split(" ")});

// Generic Function
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({name: "Brandy", hobbies: ["drawing", "coding"]}, {age: 29});
console.log(mergedObj);

// Constraints with Interface
interface Lengthy { length: number };
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = element.length > 0 ?
    "Got " + element.length + " elements." : "Got no value."
    return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(mergedObj.hobbies));

// KeyOf
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({name: "Maxy"}, "name"));

// Generic Class
class DataStorage<T> {
    private data: T[] = [];
    
    addItem(item: T) {
        this.data.push(item);
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Brandy");
textStorage.addItem("Maxy");
textStorage.removeItem("Maxy");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// Adding and removing objects get "tricky"
const objStorage = new DataStorage<object>();
objStorage.addItem({name: "Max"});
objStorage.addItem({name: "Brandy"});
objStorage.addItem({name: "Keanu"});
// ...
console.log("Before Max Removed:", objStorage.getItems()); // Check
objStorage.removeItem({name: "Max"});
console.log("After Max Removed (Doesn't Work, Keanu is gone instead):", objStorage.getItems()); // Check
// This doesn't work, removes last item in array instead
const reedObj = {name: "Reed"}; // Store in Constant
objStorage.addItem(reedObj);
console.log("Before Removing Reed:", objStorage.getItems()); // Check
objStorage.removeItem(reedObj);
console.log("After Removing Reed (IT WORKS!):", objStorage.getItems());

// Generic Utility Types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
function createCourseGoal(title: string, description: string, completeUntil: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {title, description, completeUntil};
    return courseGoal as CourseGoal
}
console.log(createCourseGoal("TypeScript 101", "Understanding TypeScript", new Date()));

const names: Readonly<string[]> = ["Brandy", "Maxy"];
// names.push("Manu"); // Doesn't work // Read only
// names.pop(); // Doesn't work // Read only
console.log("Readonly string:", names);