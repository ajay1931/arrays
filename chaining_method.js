let items = [
    { id: 1, name: "Android Mobiles", cost: 9000 },
    { id: 2, name: "Iphone Mobiles", cost: 25000 },
    { id: 3, name: "Windows Mobiles", cost: 11000 },
    { id: 4, name: "Ipad", cost: 20000 },
    { id: 5, name: "Mobiles", cost: 15000 },
];

// Sort to a lower price
let sortByPrice = items.sort((a, b) => {
    // if (a.cost < b.cost) return -1;
    // if (a.cost > b.cost) return 1;

    return (a.cost - b.cost); //Ascending
    // return (b.cost -a.cost); //Decending
});
console.log(sortByPrice);
// OUTPUT =>
//     [
//         { id: 1, name: 'Android Mobiles', cost: 9000 },
//         { id: 3, name: 'Windows Mobiles', cost: 11000 },
//         { id: 5, name: 'Mobiles', cost: 15000 },
//         { id: 4, name: 'Ipad', cost: 20000 },
//         { id: 2, name: 'Iphone Mobiles', cost: 25000 }
//       ]


// Sort it by  name ascending
let sortByName = sortByPrice.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
});
console.log(sortByName);
// OUTPUT =>
//     [
//         { id: 1, name: 'Android Mobiles', cost: 9000 },
//         { id: 4, name: 'Ipad', cost: 20000 },
//         { id: 2, name: 'Iphone Mobiles', cost: 25000 },
//         { id: 5, name: 'Mobiles', cost: 15000 },
//         { id: 3, name: 'Windows Mobiles', cost: 11000 }
//       ]


// Filter items less than 12000
let filterByPrice = sortByName.filter(val => {
    return val.cost < 12000;
});
console.log(filterByPrice);
// OUTPUT =>
//     [
//         { id: 1, name: 'Android Mobiles', cost: 9000 },
//         { id: 3, name: 'Windows Mobiles', cost: 11000 }
//       ]

//Map it like this: Android Mobiles -₹9000
let final = filterByPrice.map(val => {
    return val.name + "- ₹" + val.cost;
});
console.log(final);  // Result=>[ 'Android Mobiles- ₹9000', 'Windows Mobiles- ₹11000' ]


function chainingMethod() {
    let final1 = items.sort((a, b) => {
        return (a.cost - b.cost);
    }).sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
    }).filter(val => {
        return val.cost < 12000;
    }).map(val => {
        return val.name + "- ₹" + val.cost;
    });
    console.log(final1);
}
chainingMethod()  // Result=>[ 'Android Mobiles- ₹9000', 'Windows Mobiles- ₹11000' ]