let movies={
    a:{
        name:"avatar",
        released:2008,
        type:"sci-fi"
    },
    b:{
        name:"endgame",
        released:2019,
        type:"action"
    },
    c:{
        name:"bahubali",
        released:2015,
        type:"action"
    }
};

console.log(movies);
console.log(movies.a);
console.log(movies.b);
console.log(movies.a.name);
console.log(movies["a"]);
console.log(movies["b"].type);
// console.log(movies[b].type);
console.log(movies["b"]["name"])
movies.d={
    name:"rrr",
    released:2022,
    type:"action"
};
movies.b.boxOffice="1 Billon USD";
movies.c.name="bahubali-The begining";
console.log(movies);


let obj={
    1: "val1",
    2: "val2",
    true: "val3",
    undefined: "val4",
    NaN: "val5",
    object:"val6"
}
console.log(obj);

console.log(obj[1]);
console.log(obj["1"]);
console.log(obj["true"]);
console.log(obj[NaN]);
console.log(obj[undefined]);


let books=[
    {
        name:"Atomic Habits",
        author:"james",
    },
    {
        name:"Gaban",
        author:"Premchand"
    },
    {
        name:"Wings of fire",
        author:"APJ Abdul kalam"
    },
    {
        name:"RashmiRathi",
        author:"Ramdhari Singh Dinkar"
    }
]

console.log(books[0]);
console.log(books[1]);
console.log(books[2]);
console.log(books[3]);
console.log(books[0].name);
books[3].name="Deewano ki hasthi";
console.log(books[3]);