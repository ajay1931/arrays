const dailyRoutine=["wake up","eat","have fun","sleep"]

// For of loop
function routine1(){
    for(let Routine of dailyRoutine)
        console.log(Routine);
}
// routine1()

// For in loop
function routine2(){
    for(let Routine in dailyRoutine)
        console.log(Routine,".",dailyRoutine[Routine]);
}
// routine2()

// For each 
dailyRoutine.forEach(function(routine,index){
    console.log(index,routine);
})

// () => {}  this is fat array key function
dailyRoutine.forEach((routine,index) =>{
    console.log(index,routine);})
