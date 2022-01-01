// TypeScript Function Return Types and Void

// Add Function
function add(n1: number, n2: number) {
    return n1 + n2;
}

// Print Result Function
function printResult(num: number): void { // void type used (no return statement)
    console.log("Result: " + num);
    return;
}

console.log(add(2, 2));
printResult(add(5, 12));
console.log(printResult(add(6, 11)));

// Function as Types
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) { // Callback Type
    const result = n1 + n2;
    cb(result); // Callback
}

addAndHandle(10, 20, (result) => {
    console.log(result);
});