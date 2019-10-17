// define variable that will contain a string of random characters to form the password
let pwArray = [];
// define variable with dummy item in index=0 to allow for concatenation later
let password = " ";
// define final password string
let finalPw;

// Function will trigger password generator to launch when "Generate Password" button is clicked
function generatePW() {

    var userLength;

    // prompt the user for a password length and return an error alert if 
    // number chosen is not between 8 and 128 charaters
    function userChoice() {
        userLength = prompt("Select the length of the password, between 8 and 128 characters");
        let lengthUser = parseInt(userLength);
        console.log("input: " + lengthUser);
        console.log(typeof(lengthUser));
        if (userLength < 8 || userLength > 129) {
            alert("That entry is not valid!");
            userChoice();
        }
        // console.log("truth? " + lengthUser !== NaN);
        // console.log("truth? " + lengthUser !== "NaN");
        else if (!Number.isInteger(lengthUser)) {
            alert("That entry is not valid!");
            userChoice();
        }
        else {
            return null;
        }
    }
    userChoice();


    // define variables to ask for choice of characters to be used and a variable containing the choices selected
    let specialUse;
    let numericUse;
    let lowercaseUse;
    let uppercaseUse;
    let charSelection;

    // function that will prompt the user what kind of characters they want to use.
    // if none selected, user will receive all prompts again until they select at least one type of character
    function selection() {
        specialUse = confirm("Would you like to include special characters?");
        numericUse = confirm("Would you like to include numeric characters?");
        lowercaseUse = confirm("Would you like to include lower case characters?");
        uppercaseUse = confirm("Would you like to include upper case characters?");
        charSelection = [specialUse, numericUse, lowercaseUse, uppercaseUse];
        if (specialUse == false && numericUse == false && lowercaseUse == false && uppercaseUse == false) {
            alert("You must select at least one type of character.");
            selection();
        }
        else {
            return null;
        }
    }
    selection();
    console.log("selection: " + charSelection);

    // define all the possible characters than can be used in the password
    let specialChar = [" ", "!", "", "#", "$", "%", "&", '"', "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    let numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let lowecaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    // variable will account for all the times computer randomly selected as a character a group
    // that wasn't selected by the user
    var falseChar = 0;

    // define a variable that will randomly select an index for the array charSelection (i.e., type of character to be used)
    let typeChar;
    function randomChar() {
        typeChar = Math.floor(Math.random() * 4);
    }

    // function will randomly select an individual character given the type of character 
    // (e.g., special, numeric, lowecase, uppercase) & will push it to the password
    let character = [];
    function char(x) {
        character = x[Math.floor(Math.random() * x.length)];
        pwArray.push(character);
        console.log(character);
    }

    // fundtion that selects individual characters to be pushed onto the password
    function pushPassword() {
        // connect character randomly selected with the corresponding array of characters &
        // determine if character randomly chosen had been confirmed by user
        if (typeChar == 0 && charSelection[typeChar] == true) {
            char(specialChar);
        }
        else if (typeChar == 1 && charSelection[typeChar] == true) {
            char(numericChar);
        }
        else if (typeChar == 2 && charSelection[typeChar] == true) {
            char(lowecaseChar);
        }
        else if (typeChar == 3 && charSelection[typeChar] == true) {
            char(uppercaseChar);
        }
        // every time the type of character randomly selected had not been confirmed by the user,
        // add 1 to the falseChar count
        else if (charSelection[typeChar] == false) {
            falseChar++;
        }
    }

    // loop will select individual characters and push them to the password
    for (var i = 0; i < userLength; i++) {
        randomChar();
        console.log("type" + i);
        pushPassword();
    }

    // function that replaces the false elements that had not been selected and selects new characters
    function remainingChar() {
        let pendingChar = falseChar;
        falseChar = 0;
        for (var i = 0; i < pendingChar; i++) {
            console.log("remaining" + i);
            randomChar();
            pushPassword();
        }
    }

    // loop that will call function remainingChar() as long as there are still characters 
    // that need to be selected to fullfill the required length
    do {
        remainingChar();
    }
    while (falseChar > 0);

    console.log("password" + pwArray);
    console.log("falseChar" + falseChar);

    // create a string from the password array
    for (var j = 0; j < userLength; j++) {
        let dummyVariable = password.concat(pwArray[j])
        password = dummyVariable;
    }
    // delete first dummy item of password variable
    finalPw = password.slice(1);
    console.log(finalPw);

    // // display password on screen
    // document.getElementById("password").innerHTML = finalPW;
}

// // Function will copy password to clipboard when "Copy to Clipboard" button is clicked
// function copy() {

// }