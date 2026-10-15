// Classroom Assignment: Looping Statements

// Learning Objective:
// Learn the fundamentals of looping statements in JavaScript


// Assignment Details:
// Write a JavaScript function named `printOddNumbers` that prints odd numbers between 1 and 25
// Assignment Requirements:

// 1. Create a function - print odd numbers (from 1 to 25) and execute in debug mode
// 2. Call that function from the javascript
// 
// Hints to Solve:
// Use the modulo operator for odd number detection and a for loop to iterate values from 1 to 25



function prinOddNumbers(){


for (let i = 0; i<=25; i++ )
    {

    if (i%2 == 1) {
          
        console.log ("Printing the Odd number from 1 to 25 is",i);

    }


}

}

prinOddNumbers();