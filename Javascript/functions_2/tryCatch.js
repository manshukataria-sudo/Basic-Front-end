console.log("hello");
console.log("hello");
// let a=10;
try{
    console.log(a);
} catch (error){
    // console.log("error... variable is not defined");
    console.log(error);
}

console.log("hello2");
console.log("hello2");


let divide=(a,b)=>{
    if(b===0){
        throw("Division by zero is not allowed");
    }
    return a/b;
};
try{
    divide(10,0);
}
catch(err){
    console.log(err);
}