let nums=[1,2,3,4,5,6,7,8];
// function double(a){
//     a*=2;
//     return a;
// }
nums.forEach(double);

nums.forEach((ele)=>{
    console.log(ele);
});

nums.forEach(function(ele){
    console.log(ele);
})

let objArr=[
    {
        name:"abc",
        marks:10
    },
    {
        name:"bcd",
        marks:0
    },
    {
        name:"cde",
        marks:9
    },
];

objArr.forEach((ele)=>{
    console.log(ele.name);
})