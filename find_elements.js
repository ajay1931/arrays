// Finding elements in javascript array

let items = ["apple", "grape", "orange", "banana", "pinapple"]
console.log(items.indexOf("orange"));  //2

let fruit = ["apple", "grape", "orange", "banana", "pinapple", "apple"]
console.log(fruit.lastIndexOf("apple"));  //5

let items1 = ["apple", "grape", "orange", "banana", "pinapple"]
console.log(items1.indexOf("banana") !==-1);  //true
console.log(items1.indexOf("red") !==-1);  //false

// if anything is not given in the array "code run to -1"

let fruit1 = ["apple", "grape", "orange", "banana", "pinapple", "apple"]
console.log(fruit1.includes("banana"));  //true
console.log(fruit1.includes("red"));  //false


