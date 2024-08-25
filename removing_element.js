// Removing an element in the array

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                     //pop method
function removeElement() {
    number.pop()
    console.log(number);
}
removeElement()  //  [1, 2, 3, 4,5, 6, 7, 8]

                     //shift method
function removeElement1() {
    number.shift()
    console.log(number);
}
removeElement1()  //  [2, 3, 4, 5, 6, 7, 8, 9]

                      //splice method
function removeElement2(){
    number.splice(3,2)
    console.log(number);
}
removeElement2()  //[1, 2, 3, 4, 7, 8, 9]