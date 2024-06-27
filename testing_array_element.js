// Testing array elements by true or false by using premitive values

let age = [15, 47, 73, 19, 21]
let age1 = [14, 46, 73, 19, 22]


// allow only adults above 18(every & some)
function isAdults() {
    let adult = age.every((value, index, array) => {
        return value > 18;
    });
    console.log(adult);
}
// isAdults()

function isAdults1() {
    let adult = age1.some((value, index, array) => {
        return value > 18;
    });
    console.log(adult);
}
// isAdults1()

// Testing is it odd or even

//every method
function isodd() {
    let odd = age.every((value) => {
        return value % 2 !== 0;
    });
    console.log(odd);
}
// isodd()

// Some method
function iseven() {
    let even = age1.some((value) => {
        return value % 2 === 0;
    });
    console.log(even);
}
// iseven()

// Testing an elements by using Reference type

let items = [
    { id: 1, name: "mobiles", isDeliverable: true },
    { id: 2, name: "A.C", isDeliverable: true },
    { id: 3, name: "T.V", isDeliverable: false },
    { id: 4, name: "Speakers", isDeliverable: true },
    { id: 5, name: "Oven", isDeliverable: true },
];

// Every method
function isDeliver() {
    let deliver = items.every((value) => {
        return value.isDeliverable == true;
        // return value.isDeliverable = true;
    });
    console.log(deliver);
}
isDeliver()

// Some method
function isDeliver1() {
    let deliver = items.some((value) => {
        return value.isDeliverable = true;
    });
    console.log(deliver);
}
isDeliver1()