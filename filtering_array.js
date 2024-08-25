// Primitive type

let age = [15, 34, 24, 14, 56, 33];

function isAdults() {
    let adult = age.filter((value) => {
        return value > 18;
    });
    console.log("Adults:", adult);
}
isAdults() //Adults: [ 34, 24, 56, 33 ]

function iseven() {
    let even = age.filter(value => {
        return value % 2 == 0;
    });
    console.log("Even numbers:", even);
}
iseven()  // Result=>Even numbers: [ 34, 24, 14, 56 ]

// Reference type

let items = [
    { id: 1, name: "Android Mobiles", cost: "9000" },
    { id: 1, name: "Iphone Mobiles", cost: "25000" },
    { id: 1, name: "Windows Mobiles", cost: "11000" },
    { id: 1, name: "Ipad", cost: "20000" },
    { id: 1, name: "Mobiles", cost: "15000" },
];

function lessPrice() {
    let price = items.filter(value => {
        return value.cost < 12000;
    })
    console.log(price);
}
lessPrice()
// OUTPUT =>
//     [
//         { id: 1, name: 'Android Mobiles', cost: '9000' },
//         { id: 1, name: 'Windows Mobiles', cost: '11000' }
//     ]