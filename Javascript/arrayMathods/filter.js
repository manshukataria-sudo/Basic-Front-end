let nums=[1,2,3,4,5,6,7,8,9];
// let even=nums.filter((ele)=>{
//     return ele%2==0;
// })
let even=nums.filter((ele)=>(ele%2==0));


even.forEach((ele)=>{
    console.log(ele);
})

let lessThan5=nums.filter((ele)=>{
    return ele<5;
})

lessThan5.forEach((ele)=>{
    console.log(ele);
})