// functions as argument
function mulGreet(func,n){
    for(let i=0;i<n;i++){
        func();
    }
}

let greet=function(){
    console.log("Hello World");
}

// mulGreet(greet,2);
mulGreet(greet,4);
mulGreet(function(){console.log("Namaste")},4)

// returning functions
function oddEvenReq (request){
    if(request=="even"){
        return function(n){
            console.log((n%2==0));
        }
    }
    else if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else{
        console.log("wrong request");
    }
}

let evenTest=oddEvenReq("even");
let oddTest=oddEvenReq("odd");
evenTest(10);
evenTest(11);
evenTest(0);
evenTest(1);
oddTest(1);
oddTest(0);
oddTest(6);
oddTest(9);