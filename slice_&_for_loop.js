let array = [1, 2, 3, 4, 5, 6];

// Slice method
function sliceMethod() {
    let result = array.slice(2, 5)
    console.log(result);
}
sliceMethod()
// OUTPUT =>[ 3, 4, 5 ]

// for loop method

function loopMethod() {
    for (var i = 0; i <= array.length; i++) {
        console.log(i);
    }
}
loopMethod()
// OUTPUT =>
// 0
// 1
// 2
// 3
// 4
// 5
// 6


let tempArray = [];
for (var i = 0; i < array.length; i++) {
    tempArray[i] = array[i];
    console.log(tempArray);
    // OUTPUT =>
    // [ 1 ]
    // [ 1, 2 ]
    // [ 1, 2, 3 ]
    // [ 1, 2, 3, 4 ]
    // [ 1, 2, 3, 4, 5 ]
    // [ 1, 2, 3, 4, 5, 6 ]
}

// Spread operater
tempArray = [...array];
console.log(tempArray);  //[ 1, 2, 3, 4, 5, 6 ]
