const dailyRoutine=["wake up","eat","have fun","sleep"];
let fullName = "Ajay prakash";
let postTittle = "This is my post"

// Joining of arrays
function joinArray(){
    let routine = dailyRoutine.join("'s ");
    console.log(routine);
}
joinArray() 
 //Result =>wake up's eat's have fun's sleep 

// Spliting of arrays
function splitArray(){
let userName = fullName.split(" ")  //we can split between the gap of the name
let firstName =userName[0];  // =>Ajay 
let lastName = userName[1];  // =>prakash 
console.log(`my first name is ${firstName} and my last name is ${lastName}`);

}
splitArray()
  //Result =>my first name is Ajay and my last name is prakash 

// split and join
function splitJoin(){
    let postSlug = postTittle.split(" ");  // =>["This", "is", "my", "post"]
    let finalslug = postSlug.join("_")
    console.log(finalslug);
}
splitJoin()
  //Result =>This_is_my_post 