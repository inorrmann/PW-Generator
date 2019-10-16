//Start with an onclick function that starts the first prompt

let userLength = prompt("Select the length of the password, between 8 and 128 characters");
if (userLength < 8 || userLength > 129) {
    alert("That number is not valid");
    userLength = prompt("Select the length of the password, between 8 and 128 characters");
}

let specialUse = confirm("Would you like to include special characters?");
let numericUse = confirm("Would you like to include numeric characters?");
let lowercaseUse = confirm("Would you like to include lower case characters?");
let uppercaseUse = confirm("Would you like to include upper case characters?");
let charSelection = specialUse, numericUse, lowercaseUse, uppercaseUse

let specialChar = [" ", "!", "", "#", "$", "%", "&", '"', "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/\/", "]", "^", "_", "`", "{", "|", "}", "~"]
let numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let lowecaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



let password = [];

console.log(specialUse);
console.log(numericUse);

for (var i = 0; i < userLength; i++) {
    if (specialUse == true) {
        // will be using a special character and randomly pushing it into the array
    }










    password.push(i)
}

console.log(password);