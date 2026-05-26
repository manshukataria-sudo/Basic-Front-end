function add(a,b=10){
    return a+b;
}

console.log(add(1));
console.log(add(1,20));
console.log(add(1,1));
console.log(add(34));

function sum(a=2,b){
    return a+b;
}
console.log(sum(10,2));
console.log(sum(10));
console.log(sum(1,2));