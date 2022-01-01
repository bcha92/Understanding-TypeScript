// TypeScript Types

// Type Aliases/Custom Types using number | string union type
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

// Combine Function
function combine(
    input1: Combinable,
    input2: Combinable,
    // Allows these specific strings only
    resultConversion: ConversionDescriptor
) {
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        // Number Addition Operation
        return +input1 + +input2;
    } else { // String Concactenate
        return input1.toString() + input2.toString();
    }

    // if (resultConversion === "as-number") {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
}

// Combine Numbers
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

// Combine Strings
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

// Combine Strings (as numbers)
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);