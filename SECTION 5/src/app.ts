// an interface is used to describe an object. It can be used to define the structure of an object.

// type AddFn = (a: number, b: number) => number;

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) this.name = n;
  }

  greet(phrase: string) {
    if (this.name) console.log(phrase + " " + this.name);

    console.log("Hi");
  }
}

let user1: Greetable;
user1 = new Person();

user1.greet("Hi there - I am");

console.log(user1);

//READONLY means that the property can only be set once and then never again. It is a feature of TypeScript and not JavaScript.

//In INTERFACES/Classes, properties/methods can be optional by adding a question mark after the property/method name.
