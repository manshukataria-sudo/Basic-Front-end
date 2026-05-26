let arr=[1,2,3,4,5,6];
let part=arr.slice(2,5);
console.log(part);

function add(a,b){
    return a+b;
}
console.log(add(2,6));
console.log(add(2.85,6.94));
console.log(add(10,61));

console.log();
console.log();

console.log(add(add(3,6),11));


function gcd(a,b){
    if(a==0) return b;
    return gcd(b%a,a);
}

console.log(gcd(27,45));
console.log(gcd(1,6));
console.log(gcd(45,63));
console.log(gcd(45,18));

function sumUpto(n){
    return n*(n+1)/2;
}

console.log(sumUpto(5));
console.log(sumUpto(10));
console.log(sumUpto(100));

function concatStr(arr){
    let str="";
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
    }
    return str;
}
let array=["a","b","c","d","e"];
console.log(concatStr(array));