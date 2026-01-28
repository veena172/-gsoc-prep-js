// ===============================
// Day 3 – JavaScript Objects
// ===============================

// Object example
let student = {
  name: "Veena",
  age: 22,
  marks: 75
};

console.log(student.name);
console.log(student.marks);

// Array of objects
let students = [
  { name: "Veena", marks: 80 },
  { name: "Aman", marks: 35 },
  { name: "Riya", marks: 60 }
];

// Print pass students
for (let i = 0; i < students.length; i++) {
  if (students[i].marks >= 40) {
    console.log(students[i].name, students[i].marks);
  }
}
