// let hello = function () {
//   console.log("Hello");
// };

// // greet();

// let demo=function(){
//     console.log("calling hello inside demo");
//     hello();
//     console.log("hello done inside demo");
// }
// console.log("demo Called");
// demo();


let one=function(){
    return 1;
}
let two=function(){
    return one()+one();
}
let three=function(){
    let ans=two()+one();
    console.log(ans);
}

three();