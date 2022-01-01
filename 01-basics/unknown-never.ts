// TypeScript Unknown and Never Types

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// Without a conditional check, userName cannot hold values that is not string
if (typeof userInput === "string") {
    userName = userInput;
}

// Error Generator // Never Type "never returns anything"
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

const result = generateError("An Error Occured! Banzai!", 500);
console.log(result);