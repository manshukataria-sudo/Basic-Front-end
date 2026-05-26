let add=function(a,b){
    return a+b;
}
console.log(add(10,20));
console.log(add(10.785,20.09));

const table=function(n){
    for(let i=1;i<10;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

add=function(a,b){
    return a-b;
}

console.log(add(10,2));
table(1);