var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; //ERROR , switching to any would fix this
if (typeof userInput === "string") {
    userName = userInput;
}
// Never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
