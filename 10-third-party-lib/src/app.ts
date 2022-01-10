// Third Party Libraries
// Lodash is a .js library, must be translated via @types/lodash
import _ from "lodash";
import "reflect-metadata";
// import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

// declar for last resort calling of variable in HTML
declare var GLOBAL: any;

console.log(_.shuffle([1, 2, 3]));
console.log(GLOBAL);

// Class Transformer (via product.model.ts): no types needed
const p1 = new Product("A Book", 12.99);
console.log(p1.getInformation());

const products = [
    {title: "A Carpet", price: 29.99},
    {title: "A Book", price: 10.99}
]
const newProd = new Product("", 5.99);
validate(newProd).then(err => {
    if (err.length > 0) {
        console.log("VALIDATE ERRORS!");
        console.log(err);
    } else {
        console.log(newProd.getInformation());
    }
})
const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
});
// const loadProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}