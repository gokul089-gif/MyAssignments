// Classroom Assignment: Conditional Statements

// Learning Objective:
// Learn if-else and switch case

// Assignment Details:
// Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, and
// `runTests` with `switch` for test type messages.

// Assignment Requirements:
// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

// Hints to Solve:

// For `launchBrowser`, use `if-else` to check if `browserName` is "chrome" and print accordingly. For
// `runTests`, use a `switch` statement to handle different `testType` values, including a default case.


function launchBrowser (browserName){
        
    if(browserName==="chrome"){

        console.log("lanuch the Chrome browser")  
    }
     else {
        console.log("lanuch the Other browser")
     }  

}

function runtests(testtype){

    switch(testtype){
        case "smoke":
        console.log("Execting Smoke Tests");
        break;
        case "sanity":
        console.log("Execting sanity Tests");
        break;
        case "regression":
        console.log("Execting regression Tests");
        break;
        default:
        console.log("Execting Smoke Tests");
        break
  

    }


}

launchBrowser("chrome")
runtests("default")  



