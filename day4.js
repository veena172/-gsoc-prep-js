// ===============================
// Day 4 – Functions Practice
// ===============================

// Add two numbers
function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

// Even / Odd
function checkOddEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkOddEven(7));

// Count pass students
function countPass(marks) {
  let count = 0;

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
      count++;
    }
  }

  return count;
}

console.log(countPass([30, 60, 80, 20]));
