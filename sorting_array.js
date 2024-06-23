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
// Sorting()

// sorting of array in decending order
function sorting1() {
    let sortArray = students.sort((a, b) => {
        return b - a;
    });
    console.log(sortArray);
}
// sorting1()

// Reverse order of students
function reverseOrder() {
    let Reverse = students.reverse();
    console.log(Reverse);
}
// reverseOrder()

// Sorting arrayObject in alphebetical order
function alphebetOrder() {
    let order = stds.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        else return 0;
    });
    // console.log(order);
}
// alphebetOrder()   // using ASCII format -American Standard Code for Information Interchange

// Sorting arrayObject in ID order
function numberOrder() {
    let order = stds.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        else return 0;
    });
    console.log(order);
}
numberOrder()