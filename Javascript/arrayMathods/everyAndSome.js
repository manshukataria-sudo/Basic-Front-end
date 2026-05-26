// every logical AND
let nums=[1,3,5,7];
let result=nums.every((ele)=>{
    return !(ele%2==0);
})

console.log(result);

let arr=[2,4];
console.log(arr.every((ele)=>(ele%2==0)));


// some logical OR
let a=[1,2,3];
let res=a.some((ele)=>{
    return ele%2==0;
});
console.log(res);
