// const names: Array<string> = ["Max", "Manuel"];

// const promise: Promise<string> = new Promise((resolve, _) => {
//   setTimeout(() => {
//     resolve("This is done");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data.split(""));
// });

////////////////////////////////////////////////////////

// // GENERIC FUNCTION

//here we are using the generic types T,U which can only be objects , but we are telling ts that objA and objB are different objects . Typescript will infer the type of the return value based on the types of the arguments passed to the function. Therefore, T & U are dynamic types that can be any type.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.age);

type Lengthy = {
  length: number;
};

function countAndPrint<T extends Lengthy>(element: T) {
  let description = "Got no value.";
  if (element.length === 1) {
    description = "Got 1 element.";
  } else if (element.length > 1) {
    description = "Got " + element.length + " elements.";
  }
  return [element, description];
}

const count = countAndPrint("Hi there!");
console.log(count);

const count2 = countAndPrint(["Sports", "Cooking"]);
console.log(count2);

const count3 = countAndPrint([]);
console.log(count3);

// keyof constraint means that U is a property of T
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Max" }, "name"));

////////////////////////////////////////////////

// GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string | number>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.addItem(1);
textStorage.removeItem("Max");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });
// objStorage.removeItem(maxObj);
// // objStorage.removeItem({ name: "Max" }); // will not work because the reference is different. It's not the same object.

// console.log(objStorage.getItems());

////////////////////////////////////////////////

// GENERIC UTILITY TYPES

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Partial makes all properties of the interface optional
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly makes all properties of the interface readonly meaning you can't add nor remove properties from the data structure

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); // will not work
