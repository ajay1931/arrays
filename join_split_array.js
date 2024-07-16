const dailyRoutine=["wake up","eat","have fun","sleep"];
let fullName = "Ajay prakash";
let postTittle = "This is my post"

// Joining of arrays
function joinArray(){
    let routine = dailyRoutine.join("'s ");
    console.log(routine);
}
joinArray()

// Spliting of arrays
function splitArray(){
let userName = fullName.split(" ")  //we can split between the gap of the name
let firstName =userName[0];
let lastName = userName[1];
console.log(`my first name is ${firstName} and my last name is ${lastName}`);

}
// splitArray()


// split and join
function splitJoin(){
    let postSlug = postTittle.split(" ");
    let finalslug = postSlug.join("_")
    console.log(finalslug);
}
// splitJoin()