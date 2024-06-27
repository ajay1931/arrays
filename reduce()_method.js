// Premitive method
let donation = [23, 45, 67, 89, 46];
function addingDonation() {
    let totalDonation = donation.reduce((previousVal, currentVal) => {
        return previousVal + currentVal;
    });
    console.log(totalDonation);
}
// addingDonation()

// Reference method
let shoppingCart = [
    { id: 1, item: "Milk", cost: 45 },
    { id: 1, item: "Bread", cost: 25 },
    { id: 1, item: "Biscut", cost: 20 },
    { id: 1, item: "Sugar", cost: 50 },
    { id: 1, item: "Salt", cost: 10 },
];
function addShopingCart() {
    let addCost = shoppingCart.reduce((accumulator, currentVal) => {   //An accumulator is an energy storage device: a device which accepts energy, stores energy, and releases energy as needed (biological name)
       console.log(accumulator);
        return accumulator + currentVal.cost
    }, 0);  // Initial value (0 + 45...)
    console.log(addCost);
}
// addShopingCart()


function addShopingCart1() {
    let addCost = shoppingCart.reduceRight((accumulator, currentVal) => {   //An accumulator is an energy storage device: a device which accepts energy, stores energy, and releases energy as needed (biological name)
       console.log(accumulator);
        return accumulator + currentVal.cost
    }, 0);  // Initial value (0 + 45...)
    console.log(addCost);
}
addShopingCart1()