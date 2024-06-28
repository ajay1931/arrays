let array = [1, 2, 3, 4, 5, 6];

// Slice method
function sliceMethod() {
    let result = array.slice(2, 5)
    console.log(result);
}
// sliceMethod()

// for loop method

function loopMethod() {
    for (var i = 0; i <= array.length; i++) {
        console.log(i);
    }
}
// loopMethod()


let tempArray = [];
for (var i = 0; i < array.length; i++) {
    tempArray[i] = array[i];
    // console.log(tempArray);
}

// Spread operater
    tempArray = [...array];
    console.log(tempArray);
