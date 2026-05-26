function printName(name){
    console.log(name);
}

printName("Nayan");

function printInfo(name, age){
    console.log(`${name} is ${age} years old`);
}
printInfo("manshu",20);
printInfo("Chaman",24);
printInfo("Abc");
printInfo(20);


function add(a,b){
    console.log(a+b);
}
// add(1,8);
// add(1.78,8);
// add(-901,897);
// add(17,832);
// add(11,81);
// add(18,8);

function avg(a,b,c){
    console.log(`Average is : ${(a+b+c)/3}`);
}
avg(1,2,3);
avg(5,20,3);
console.log(avg);

console.log();
console.log();
console.log();

function table(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} * ${i} = ${n*i}`);
    }
}

table(4);
table(978);
table(1.5);