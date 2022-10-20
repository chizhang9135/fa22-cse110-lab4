let student = {
    name: "Sarah",
    major: "Computer Science",
    'Grad Year': '2022',
    greeting: function() { console.log('Hello!'); },
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

// Accessing the value of the name property in the student object
console.log(student.name);
// Accessing the value of the Grad Year property in the student object
console.log(student['Grad Year']);
// Calling the function for the greeting property in the student object
student.greeting();
// Accessing the name property of the object in the Favorite Teacher property in student
console.log(student['Favorite Teacher'].name);
// Access index zero in the array of the courseLoad property of the student object
console.log(student.courseLoad[0]);
