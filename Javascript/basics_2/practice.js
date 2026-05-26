// let str=`aisa hai bidu`;
// if(str[0]==='a' && str.length>3){
//     console.log(`Good String`);
// }
// else{
//     console.log(`Not Good String`);
// }

// let num=-45.90;
// if(num%10===0){
//     console.log("Good");
// }
// else{
//     console.log("Bad");
// }

// let quat=4;
// switch(quat){
//     case 1:
//         console.log(`January`);
//         console.log(`February`);
//         console.log(`March`);
//         break;
//     case 2:
//         console.log(`April`);
//         console.log(`May`);
//         console.log(`June`);
//         break;
//     case 3:
//         console.log(`July`);
//         console.log(`August`);
//         console.log(`September`);
//         break;
//     case 4:
//         console.log(`October`);
//         console.log(`November`);
//         console.log(`December`);
//         break;
//     default:
//         console.log("...INVALID QUARTER...");
//         break;
// }

// let str="winter is coming";
// if(str[0]==='A' || str[0]==='a' && str.length>5){
//     console.log("Golden String");
// }
// else {
//     console.log("Not Golden String");
// }

// let num1=123;
// let num2=904;
// if(num1%10===num2%10){
//     console.log(`${num1} & ${num2} have same last digits`);
// }
// else{
//     console.log(`${num1} & ${num2} have not same last digits`);
// }


// let months=["january","july","march","august"];   //july, june , march , august
// months.shift();
// let first=months.shift();
// months.unshift("june")
// months.unshift(first);
// console.log(months);



// let months=["january","july","march","august"];   //july, june , march , august using splice
// months.splice(0,2,"july","june");
// console.log(months);

// let lang=["c","c++","html","javascript","python","java","c#","sql"];
// console.log(lang.indexOf("javascript"));
// lang.reverse();
// console.log(lang);
// console.log(lang.indexOf("javascript"));

let arr=[["X"," ","O"],[" ","X"," "],["O"," ","X"]];
console.log(arr);
arr[0][1]="O";
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}