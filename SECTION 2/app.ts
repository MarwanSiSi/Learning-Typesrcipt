let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; //ERROR , switching to any would fix this

if (typeof userInput === "string") {
  userName = userInput;
}

// Never type

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
