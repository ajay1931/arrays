const orders = [
    { id: 1, item: "smartphone", quantity: 3 },
    { id: 1, item: "A.C", quantity: 3 },
    { id: 2, item: "watch", quantity: 9 },
    { id: 3, item: "airpods", quantity: 2 },
    { id: 4, item: "shoes", quantity: 1 },
    { id: 5, item: "laptop", quantity: 2 },
]

let result = orders.find(function(order){
    return order.item ==="watch"
})
let result1 = orders.findIndex(function(order){
    return order.item ==="shoes"
})

console.log(result);
console.log(result1);