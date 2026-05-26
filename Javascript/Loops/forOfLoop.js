let array=["mango","banana","orange","litchi"];
let i=1;
array.push("kiwi");
for(fruit of array){
    console.log(`${i}. ${fruit}`);
    i++;
}

console.log();
console.log();

let nums=[1,2,3,4,5,6];
for(ele of nums){
    console.log(ele);
}

console.log();
console.log();

let fName="Chaman Verma";
for(ele of fName){
    console.log(ele);
}

console.log();
console.log();

let nest=[["Siya",10],["Zaffar",9],["Jalla",2]];
for(ele of nest){
    console.log(ele);
}

console.log();
console.log();
let j=1;
for(array of nest){
    console.log(`Student ${j} is : `);
    for(ele of array){
        console.log(ele);
    }
    j++;
}