const calculator={
    add:function(a,b){
            return a+b;
        },
    sub:function(a,b){
        return a-b;
    },
    mul(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }
};
console.log(calculator);
console.log(calculator.add);
console.log(calculator.add(1,2));
console.log(calculator.add(14,24));
console.log(calculator.sub(14,24));
console.log(calculator.mul(14,24));
console.log(calculator.div(14,24));