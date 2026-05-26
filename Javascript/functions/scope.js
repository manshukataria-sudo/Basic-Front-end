let sum="Apun to bahr ka hai bidu";             //global scope
function add(a,b){
    // let sum=a+b;                                // function scope
    let student={
        name:"a",
        age:20,
        isPassed:true
    };
    console.log(sum);
}
add(10,20);
console.log(sum);                   
// console.log(student);

                        // block scope
{
    let num=10;
    const pi=3.1415;
    var str="Aan meri jaan";
    console.log(pi);
    console.log(num);
    console.log(str);
}
// console.log(num);
// console.log(pi);
console.log(str);

for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(i);

if(true){
    let a="inside if statement";
    console.log(a);
}
// console.log(a);

                        // lexical scope
console.log();
console.log();

function outer(){
    let x=1;
    let y=2;
    function inner(){
        let a=100;
        console.log(x);
        console.log(y);
    }
    // console.log(a);
    inner();
}
// inner();
outer();

