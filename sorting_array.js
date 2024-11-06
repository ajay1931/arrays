let students = [3, 2, 5, 7, 9, 8, 1, 6, 4];
let stds = [
    { id: 3, name: "Ajay" },
    { id: 2, name: "Prakash" },
    { id: 5, name: "Gokul" },
    { id: 7, name: "Puna" },
    { id: 9, name: "Alien" },
    { id: 8, name: "Mapla" },
    { id: 1, name: "Kaka" },
    { id: 6, name: "Sri" },
    { id: 4, name: "Vivek" }
]

// Sorting of array
function Sorting() {
    let sortArray = students.sort();
    console.log(sortArray);
}
// Sorting()       //Output=> [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sorting of array in decending order
function sorting1() {
    let sortArray = students.sort((a, b) => {
        return b - a;
    });
    console.log(sortArray);
}
// sorting1()   //Output=> [9, 8, 7, 6, 5, 4, 3, 2, 1]

// Reverse order of students
function reverseOrder() {
    let Reverse = students.reverse();
    console.log(Reverse);
}
// reverseOrder()  //Output=> [4, 6, 1, 8, 9, 7, 5, 2, 3]

// Sorting arrayObject in alphebetical order
function alphebetOrder() {
    let order = stds.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        else return 0;
    });
    console.log(order);
}
// alphebetOrder()   // using ASCII format -American Standard Code for Information Interchange
// Output =>[
//   { id: 3, name: 'Ajay' },
//   { id: 9, name: 'Alien' },
//   { id: 5, name: 'Gokul' },
//   { id: 1, name: 'Kaka' },
//   { id: 8, name: 'Mapla' },
//   { id: 2, name: 'Prakash' },
//   { id: 7, name: 'Puna' },
//   { id: 6, name: 'Sri' },
//   { id: 4, name: 'Vivek' }
// ]

// Sorting arrayObject in ID order
function numberOrder() {
    let order = stds.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        else return 0;
    });
    console.log(order);
}
// numberOrder()
// Output =>[
//     { id: 1, name: 'Kaka' },
//     { id: 2, name: 'Prakash' },
//     { id: 3, name: 'Ajay' },
//     { id: 4, name: 'Vivek' },
//     { id: 5, name: 'Gokul' },
//     { id: 6, name: 'Sri' },
//     { id: 7, name: 'Puna' },
//     { id: 8, name: 'Mapla' },
//     { id: 9, name: 'Alien' }
//   ]
