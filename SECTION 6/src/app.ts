//INTERSECTION TYPES is used to combine types and create a new type

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevtedEmployee = Admin & Employee;

const e1: ElevtedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//Type Guards

function add(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log("Moving at speed: " + animal.flyingSpeed);
      break;
    case "horse":
      console.log("Moving at speed: " + animal.runningSpeed);
  }
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

///////////////////////////////////////////////////

//TYPE CASTING

//syntax 1

// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

//syntax 2

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// userInputElement.value = "Hi there!";

///////////////////////////////////////////////////

//INDEX PROPERTIES

interface ErrorContainer {
  [prop: string]: string; //this means that the key will be a string and the value will be a string
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

////////////////////////////////////////////////////////

//FUNCTION OVERLOADS: when we want to have multiple function signatures, meaning that the function can be called with different parameters and return different things

function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: number): string;
function add1(a: number, b: string): string;
function add1(n1: Combinable, n2: Combinable) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}

const result = add1("Max", " Schwarz");
result.split(" ");

//////////////////////////////////////////////////////

//OPTIONAL CHAINING

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

//////////////////////////////////////////////////////

//NULLISH COALESCING OPERATOR: it is used to check if a value is null or undefined and if it is, it will return a default value

const userInput = null;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
