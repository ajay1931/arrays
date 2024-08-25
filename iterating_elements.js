const dailyRoutine = ["wake up", "eat", "have fun", "sleep"]

// For of loop
function routine1() {
    for (let Routine of dailyRoutine)
        console.log(Routine);
}
routine1()
// OUTPUT =>
// wake up
// eat
// have fun
// sleep   

// For in loop
function routine2() {
    for (let Routine in dailyRoutine)
        console.log(Routine, ".", dailyRoutine[Routine]);
}
routine2()
// OUTPUT =>
// 0 . wake up
// 1 . eat
// 2 . have fun
// 3 . sleep

// For each 
dailyRoutine.forEach(function (routine, index) {
    console.log(index,routine);
});
// OUTPUT =>
//   0 wake up
//   1 eat
//   2 have fun
//   3 sleep

// () => {}  this is fat array key function
dailyRoutine.forEach((routine, index) => {
    console.log(index, routine);
});
// OUTPUT =>
//   0 wake up
//   1 eat
//   2 have fun
//   3 sleep