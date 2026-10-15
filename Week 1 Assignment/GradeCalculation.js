// Classroom Assignment: Grade Calculation

// Learning Objective:
// Learn to use switch statements in JavaScript to categorize data based on multiple conditions.

// Assignment Details:
// Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement
// to assess score ranges.

// Assignment Requirements:
// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result.

// Hints to Solve:
// Use a `switch` statement with `true` for score range checks to assign grades.


  function calculateGrade(score){
     switch(true){
     case score >=90:
     console.log("Grade A");
     break;
     case score >=80:
     console.log("Grade B");
     break;
     case score >=70:
     console.log ("Grade c");
     break;
     case score >=60:
     console.log ("Grade d");
     break;
     case score >=40:
     console.log("Grade E")
     default:
    console.log("Grade F");
     break;
     }

  }
calculateGrade(0);
