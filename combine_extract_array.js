let shopping_cart = ["carrot", "beans", "beetroot",];
let additional_cart = ["coliflower", "ladiesfinger"];


                     // Combine array
function addon() {
    let totalItems = shopping_cart.concat(additional_cart);
    console.log(totalItems);
}
addon()  // Result=>[ 'carrot', 'beans', 'beetroot', 'coliflower', 'ladiesfinger' ]


                     // Extract array
function Extracton() {
    let totalItems = shopping_cart.concat(additional_cart);
    let extractitems = totalItems.splice(1, 3);
    console.log(extractitems);
}
Extracton()  // Result=>[ 'beans', 'beetroot', 'coliflower' ]


                     // spread operater
function toCombine() {
    let totalItems = [...shopping_cart, "mint", { name: "ajay", age: 24 }, ...additional_cart];
    console.log(totalItems);
}
toCombine()
// OUTPUT =>
//     [
//         'carrot',
//         'beans',
//         'beetroot',
//         'mint',
//         { name: 'ajay', age: 24 },
//         'coliflower',
//         'ladiesfinger'
//       ]