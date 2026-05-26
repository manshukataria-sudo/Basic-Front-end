const h1 = document.querySelector("h1");
// h1.addEventListener("keypress",(e)=>{
//     console.log(e);
//     console.log(e.target);
//     console.log(`code : ${e.code}`);
//     console.log(`key : ${e.key}`);
// })

// h1.addEventListener("keydown", (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.code);
// });

h1.addEventListener("keyup", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.code);
});
