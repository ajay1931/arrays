let items = [
    { id: 1, name: "Android Mobiles", cost: 9000 },
    { id: 2, name: "Iphone Mobiles", cost: 25000 },
    { id: 3, name: "Windows Mobiles", cost: 11000 },
    { id: 4, name: "Ipad", cost: 20000 },
    { id: 5, name: "Mobiles", cost: 15000 },
];

// Find method
function findPrice() {
    let price = items.find(value => {
        return value.cost < 12000;
    })
    console.log(price);
}
findPrice()  //  Result=>{ id: 1, name: 'Android Mobiles', cost: 9000 }

// FindIndex method
function findPrice1() {
    let price = items.findIndex(value => {
        return value.cost < 12000;
    })
    console.log(price);
}
findPrice1()  //  Result=>0