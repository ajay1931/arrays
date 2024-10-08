// Method 1
let array1 = [1, 2, 3, 4, 5];

// Method 2
let array2 = [];
array2[0] = "id";
array2[1] = "name";

// Method 3
let array3 = new Array(10);

// Method 4
let array4 = Array.of(10, 20, 30, 40);

console.log(array1); // [ 1, 2, 3, 4, 5 ]
console.log(array2); // [ 'id', 'name' ]
console.log(array3); // [ <10 empty items> ]
console.log(array4); // [ 10, 20, 30, 40 ]