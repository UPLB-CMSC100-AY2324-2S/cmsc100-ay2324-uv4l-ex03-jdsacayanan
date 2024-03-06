function validatePassword(firstInput, secondInput) {
    // The two passwords match
    if (firstInput!==secondInput) {
        return false;
    }

    password = String(firstInput);

    // the password has at least 8 character
    if (password.length<8) {
        return false;
    }

    // the password has at least 1 number
    valid = false;
    for (let i=0; i<password.length; i++) {
      if (!isNaN(parseInt(password[i]))) {  // checks if the number is a number (or integer since if a single character can always be parsed as an integer if it is from 0-9)
        valid = true;
        break;
      }
    }
    if (!valid) {
        return false;
    }

    // the password has 1 uppercase character
    valid = false;
    for (let i=0; i<password.length; i++) {
        if (String(password[i])==String(password[i]).toUpperCase() && isNaN(parseInt(password[i]))) {   // checks if the character is not a number and is uppercase
            valid = true;
            break;
        }
    }
    if (!valid) {
        return false;
    }

    // the password has 1 lowercase character
    valid = false;
    for (let i=0; i<password.length; i++) {
        if (String(password[i])==String(password[i]).toLowerCase() && isNaN(parseInt(password[i]))) {   // checks if the character is not a number and it is lowercase
            valid = true;
            break;
        }
    }
    if (!valid) {
        return false;
    }

    // all checks passed
    return true;
}

function reversePassword(input) {
    // ensure that the variable is a string
    input = String(input);

    // a variable to store the reversed password
    reversed = "";
    
    // loop through all the characters of the password
    for (let i=(input.length-1); i>=0; i--) {
        reversed = reversed+input[i];
    }

    // return reversed password
    return reversed;
}

console.log(reversePassword("12345"));