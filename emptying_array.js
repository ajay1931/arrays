let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

                    // Solution 1

function emptyingArray() {
    number = [];
    console.log(number);
}
//  emptyingArray()

                    //Solution 2

function emptyingArray1() {
    number.length = 0;
    console.log(number);
}
// emptyingArray1()

                     //Solution 3
                     
function emptyingArray2() {
    number.splice(0, number.length)
    console.log(number);
}
emptyingArray2()