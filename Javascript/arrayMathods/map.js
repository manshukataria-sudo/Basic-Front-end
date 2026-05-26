let nums=[1,2,3,4,5,6];
let double=nums.map((ele)=>{
    return ele*2;
});

double.forEach((ele)=>{
    console.log(ele);
});

let arr=nums.map((ele)=>{});
arr.forEach((ele)=>{
    console.log(ele);
})

let students=[
    {
        name:"abc",
        marks:75
    },
    {
        name:"bcd",
        marks:99
    },
    {
        name:"cde",
        marks:81
    },
];
// let gpa=students.map((ele)=>{
//     let marks=ele.marks;
//     let grade;
//     if(marks>90){
//         grade="A";
//     }
//     else if(marks>80){
//         grade="B";
//     }
//     else if(marks>70){
//         grade="C";
//     }
//     return grade;
// })

// gpa.forEach((ele)=>{
//     console.log(ele);
// })

let gpa=students.map((ele)=>{
    let marks=ele.marks;
    let grade;
    if(marks>90){
        grade="A";
    }
    else if(marks>80){
        grade="B";
    }
    else if(marks>70){
        grade="C";
    }
    ele.gpa=grade;
    return ele;
});

gpa.forEach((ele)=>{
    console.log(ele);
});
