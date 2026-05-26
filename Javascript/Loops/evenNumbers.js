let num=17;
for(let i=2;i<=num;i++){
    if(i%2==0){
        console.log(i);
    }
}
for(let i=2;i<=num;i+=2){
    console.log(i);
}
if(num%2!=0) num-=1;
for(let i=num;i>=2;i-=2){
    console.log(i);
}