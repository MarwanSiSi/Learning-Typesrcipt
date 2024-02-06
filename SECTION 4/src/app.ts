const user = "Max";
// user = "hi";
let age = 30;
age = 29;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

const add2 = (a: number, b: number = 1) => a + b;

console.log(add2(2, 5));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

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
const copiedPerson2 = { ...person };

console.log(copiedPerson);
console.log(copiedPerson2);

const add3 = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(add3(5, 10, 2, 3.7));

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, remainingHobbies, hobbies);

const { name: userName, age: userAge } = person;
console.log(userName, userAge, person);
