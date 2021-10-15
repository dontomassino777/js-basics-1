// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
// At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

const readline = require("readline")

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log("Welcome to the password validator tool!")

reader.question("Please enter your password here (must be at least 10 characters long!)", function(answer) {
    if (answer.length < 10) {
        console.log("Sorry, that password is too short! Must be at least 10 characters!")
    } else if (answer.length >= 10) {
        console.log("Success! Password validated.")
    }
})

