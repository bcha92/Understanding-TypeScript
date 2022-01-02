// use "npx tsc --init" or "yarn tsc --init" to initialize a tsconfig.json
// after which, only "tsc" is used without pointing to a file for compiling
const userName = "Hello World";
console.log(userName);

// Click Handler
function clickHandler(message: string) {
    console.log("Clicked!" + message);
}
// Button
const button = document.querySelector("button")!;
if (button) {
    button.addEventListener("click", clickHandler.bind(null, "GameFreak"))
}

// Add
function add(n1: number, n2: number) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    // return;
}