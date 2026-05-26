// for(let i=1;i<=5;i++){
//     console.log(i);
// }

// for(let i=6;i<=13;i++){
//     console.log(i);
// }

// for(let i=5;i>=1;i--){
//     console.log(i);
// }
/*
let array=["apple","ornage","banana","litchi","cherry",-90.8,90.88,56,23.32];
for(let i=0;i<array.length;i++){
    console.log(`${i}  ${array[i]}`);
}
console.log();
console.log();
console.log();

for(let i=array.length-1;i>=0;i--){
    console.log(`${i}  ${array[i]}`);
}

*/

let array=[[1,2,3,4,5],[2,3,4,5,6,7,8,9],[3,4,5,6,7,2,3,4,5,1,2,3,1]];
for(let i=0;i<array.length;i++){
    console.log(`Row #${i+1}`);
    for(let j=0;j<array[i].length;j++){
        console.log(array[i][j]);
    }
}