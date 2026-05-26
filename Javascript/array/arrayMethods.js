// push, pop, shift, unshift
let cars=["xuv","bmw","maruti","mercedes"];
console.log(cars);
cars.push("ferrari");
console.log(cars);
cars.push(1);
console.log(cars);
cars.push(99.90,90);
console.log(cars);

console.log(cars.pop());   // return the popped value
console.log(cars);

cars.unshift("audi","lamborghini");
console.log(cars);


console.log(cars.shift());
console.log(cars);

// indexOf and includes
let nums=[1,2,3,4,5,6,7,8];
console.log(nums.indexOf(1));
console.log(nums.indexOf(2));
console.log(nums.indexOf("hello"));
console.log(nums.indexOf(9));
console.log(nums.indexOf(-7));

console.log(nums.includes(10));
console.log(nums.includes(1));
console.log(nums.includes(0));
console.log(nums.includes(6));
console.log(nums.includes("Hello"));

// concat and reverse
let x=[0,1,2,3];
let y=[10,11,12];
let z=x.concat(y);
console.log(z);

let a=y.concat(x);
console.log(a);

x.reverse();
console.log(x);
x.reverse();
console.log(x);

//slice
let v=[0,1,2,3,4,5];
console.log(v.slice());
console.log(v.slice(3));
console.log(v.slice(2,4));
console.log(v.slice(-2));


// splice
let idx=[0,1,2,3,4,5,6];
console.log(idx);
console.log(idx.splice(5));
console.log(idx);

idx=[0,1,2,3,4,5,6];
console.log(idx);
console.log(idx.splice(0,3));
console.log(idx);

idx=[0,1,2,3,4,5,6];
console.log(idx);
console.log(idx.splice(2,3,0,0,0));
console.log(idx);

idx=[0,1,2,3,4,5,6];
console.log(idx);
console.log(idx.splice(2,3,0,0,0,0,0,0));
console.log(idx);

// sort    -> first converts all the elements into strings and then sorted on the basis of dictionary order
let m=[3,1,4,5,7,8,2];
console.log(m);
m.sort();
console.log(m);

let planets=["mercury","venus","earth","mars","Mars","Jupiter"];
console.log(planets);
planets.sort();
console.log(planets);

let integers=[0,-90,45,89,90,888,-96,999,-1,-0];
integers.sort();
console.log(integers);



