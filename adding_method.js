let fruit = ["apple", "grape", "orange", "banana", "pinapple"]
console.log(fruit)  //Result =>["apple", "grape", "orange", "banana", "pinapple"]


                         // push method
                         
function addFruit1(){
fruit.push("gauva","lemon")
console.log(fruit);
}
addFruit1() //Result =>['apple','grape','orange','banana','pinapple', 'gauva', 'lemon']


                         // unshift method

function addFruit2(){
 fruit.unshift("gauva","strawberries");
console.log(fruit);
}
addFruit2()  //Result =>['gauva','strawberries','apple','grape','orange','banana','pinapple']

                         // splice method

function addFruit3(){
fruit.splice(2,0,"gauva","kiwi")
console.log(fruit);
}
addFruit3()  //Result =>['apple','grape','gauva','kiwi','orange','banana','pinapple']


                          // push method

var numbers = [1, 2, 3, 4, 5]
function addNumber(arr) {
    arr.push(7);
console.log(numbers)
}
addNumber(numbers) //Result =>[ 1, 2, 3, 4, 5, 7 ]