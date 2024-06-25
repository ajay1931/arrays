let age = [15,34,24,14,56,33];

function isAdults(){
    let adult = age.filter((value)=>{
        return value >18;
    });
    console.log("Adults:",adult);
}
isAdults() 

function iseven(){
    let even= age.filter(value=>{
        return value %2==0;
    });
    console.log("Even numbers:",even);
}
iseven()