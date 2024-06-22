let shopping_cart = ["carrot", "beans", "beetroot",];
let additional_cart = ["coliflower", "ladiesfinger"];

// Combine array
function addon() {
    let totalItems = shopping_cart.concat(additional_cart);
    console.log(totalItems);
}
// addon()

// Extract array
function Extracton() {
    let totalItems = shopping_cart.concat(additional_cart);
    let extractitems = totalItems.splice(1, 3);
    console.log(extractitems);
}
Extracton()
