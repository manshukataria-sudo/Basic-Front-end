let nums=[1,2,3,4,5];
let pro=nums.reduce((res,ele)=>{
    console.log(res);
    console.log(ele);
    console.log("one pass khatam");
    return res*ele;
})
console.log(pro);
let sum=nums.reduce((res,ele)=>{
    console.log(res);
    console.log(ele);
    console.log("one pass khatam");
    return res+ele;
})

console.log(sum);
console.log();
console.log();
console.log();

let arr=[1,34,999,0,-1,-897,4637,-90777,43,2,0,0];
let ele=arr[0];
for(let i=1;i<arr.length;i++){
    if(ele<arr[i]) ele=arr[i];
}
console.log(ele);
let max=arr.reduce((res,ele)=>{
    if(ele>res) res=ele;
    return res;
})
console.log(max);