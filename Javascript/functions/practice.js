let nums=[5,8,34,-9,0,1,78,43];
let num=2;

let elements=function(arr,num){
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(elements(nums,num));
// function elements(arr,num){
//     let ans=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>num){
//             ans.push(arr[i]);
//         }
//     }
//     return ans;
// }

let uniqueEle=function(str){
    let strCopy=[];
    for(let i=0;i<str.length;i++){
        strCopy.push(str[i]);
    }
    strCopy.sort();
    let ansStr=strCopy[0];
    for(let i=1;i<strCopy.length;i++){
        if(strCopy[i]!=ansStr[ansStr.length-1]){
            ansStr+=strCopy[i];
        }
    }
    return ansStr;
}

let str="aabbccdd";
console.log(uniqueEle(str));

let longStr=function(array){
    let ans=array[0];
    for(let i=1;i<array.length;i++){
        if(ans.length<array[i].length){
            ans=array[i];
        }
    }
    return ans;
}
let names=["Australia", "Germany", "United States of America"];
console.log(longStr(names));


let countVowel=function(str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
            count++;
        }
    }
    return count;
}
let vow="aeiou";
console.log(countVowel(vow));


let genRandom=function(start,end){
    return Math.floor(Math.random()*(end-start+1))+start;
}

console.log(genRandom(3,7));


