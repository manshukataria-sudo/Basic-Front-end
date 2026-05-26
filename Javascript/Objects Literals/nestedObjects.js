//                  object of objects
const classInfo={
    1:{
        fullName:"Mohan",
        marks:"10",
        rollNo:1
    },
    2:{
        fullName:"Kanahiya",
        marks:"9.7",
        rollNo:2
    },
    3:{
        fullName:"Ramya",
        marks:"10",
        rollNo:3
    }
};

// console.log(classInfo);
console.log(classInfo[1]);
console.log(classInfo["2"]);
console.log(classInfo[1].fullName);
console.log(classInfo[3].fullName);
classInfo[2].fullName="Radhika";
console.log(classInfo[2].fullName);
console.log(classInfo[2]);

//                      array of objects
let games=[
    {
        fullName:"RDR2",
        yearOfLaunch:2018
    },
    {
        fullName:"COC",
        yearOfLaunch:2013
    },
    {
        fullName:"PUBG",
        yearOfLaunch:2017
    },
    {
        fullName:"Minecraft",
        yearOfLaunch:2011
    }
]
console.log(games);
console.log(games[0]);
console.log(games[0].fullName);
console.log(games[games.length-1].fullName);
console.log(games[1].yearOfLaunch);

games[0].collection="1 Billion USD";

console.log(games[0]);