
let random=(a,b)=>{
    return Math.floor(Math.random()*(b-a+1))+a;
}
console.log(random(1,6));

const car={
    name:"Maruti suzuki",
    model:"800",
    color:"White",
    maxSpeed:"900 Km/h charo tyre khulne ki sambhawna",
}
console.log(car.name);
console.log(car.maxSpeed);

const person={
    name:"nitin",
    age:"890 years",
    city:"melbourne",
};
console.log(person.city);
person.city="New York";
console.log(person.city);

person.country="United States of America";
console.log(person.country);