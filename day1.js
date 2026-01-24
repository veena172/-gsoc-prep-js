// ===============================
// Day 1 – JavaScript Basics Practice
// ===============================

// Question 1: Pass / Fail
let marks = 40;

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// -------------------------------
// Question 2: Age Eligibility
let age = 18;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// -------------------------------
// Question 3: Print Name Function
function printName(name) {
  console.log("Hello " + name);
}

printName("Veena");

// -------------------------------
// Question 4: Check Result Function
function checkResult(marks) {
  if (marks >= 40) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}

checkResult(70);
checkResult(30);

// -------------------------------
// Question 5: Positive / Negative Number
function checkNumber(num) {
  if (num >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
}

checkNumber(10);
