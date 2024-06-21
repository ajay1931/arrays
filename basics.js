let fruit = ["apple", "grape", "orange", "banana", "pinapple"]
// console.log(fruit)


                         // push method
                         
function addFruit1(){
fruit.push("gauva","lemon")
console.log(fruit);
}
// addFruit1()


                         // unshift method

function addFruit2(){
 fruit.unshift("gauva","strawberries");
console.log(fruit);
}
// addFruit2()

                         // splice method

function addFruit3(){
fruit.splice(2,0,"gauva","kiwi")
console.log(fruit);
}
addFruit3()


                          // push method

var numbers = [1, 2, 3, 4, 5]
function addNumber(arr) {
    arr.push(6);
console.log(numbers)
}
// addNumber(numbers)