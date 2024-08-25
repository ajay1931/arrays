//             Premitive method

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function arrayMap() {
    let maping = number.map(val => {
        return val * 3;
    });
    console.log(maping);
}
arrayMap()  //[3,  6,  9, 12, 15,18, 21, 24, 27, 30]

//            Reference method

let people = [
    { id: 1, first_name: "Ajay", last_name: "prakash" },
    { id: 2, first_name: "Gokul", last_name: "prakash" },
    { id: 3, first_name: "Mohan", last_name: "kumar" },
    { id: 4, first_name: "Bhuvan", last_name: "karthi" },
    { id: 5, first_name: "Sri", last_name: "Vartshan" },
];

function mergeName() {
    let fullName = people.map(val => {
        // return val.first_name + val.last_name;
        return [val.first_name,val.last_name].join(" ");
    });
    console.log(fullName);
}
mergeName()
// OUTPUT =>
//     [
//         'Ajay prakash',
//         'Gokul prakash',
//         'Mohan kumar',
//         'Bhuvan karthi',
//         'Sri Vartshan'
//       ]

function mergeName1(){
    let personName = people.map(val=>{
        let fullName =[val.first_name,val.last_name].join(" ");
        // let object = {id:val.id,fullName:fullName};
        let object = {id:val.id,fullName};
        return object;
    });
    console.log(personName);
}
mergeName1()
// OUTPUT =>
//     [
//         { id: 1, fullName: 'Ajay prakash' },
//         { id: 2, fullName: 'Gokul prakash' },
//         { id: 3, fullName: 'Mohan kumar' },
//         { id: 4, fullName: 'Bhuvan karthi' },
//         { id: 5, fullName: 'Sri Vartshan' }
//     ]