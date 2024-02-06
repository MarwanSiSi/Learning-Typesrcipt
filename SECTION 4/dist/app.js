"use strict";
const user = "Max";
let age = 30;
age = 29;
function add(a, b) {
    let result;
    result = a + b;
    return result;
}
const add2 = (a, b = 1) => a + b;
console.log(add2(2, 5));
const printOutput = (output) => console.log(output);
printOutput(add(5, 2));
printOutput(add2(5));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
console.log(activeHobbies);
const person = {
    name: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const copiedPerson2 = Object.assign({}, person);
console.log(copiedPerson);
console.log(copiedPerson2);
const add3 = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(add3(5, 10, 2, 3.7));
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies, hobbies);
const { name: userName, age: userAge } = person;
console.log(userName, userAge, person);
//# sourceMappingURL=app.js.map