// let nums=[1,20,30,40,50];
// let result=nums.every((ele)=>{
//     return ele%10==0;
// })
// console.log(result);

// let arr=[1,3,0,78,45,908,-45,8,-9845,1,1];
// let min=arr.reduce((res,ele)=>{
//     if(ele<res){
//         res=ele;
//     }
//     return res;
// })

// console.log(min);

// let arr=[1,2,3,4,5,6];
// arr.forEach((ele)=>{
//     console.log(ele);
// })
// let str=["hello","world","namaste","duniya"];
// str.forEach((ele)=>{
//     console.log(ele);
// })
// arr.forEach((ele,idx)=>{
//     console.log(idx,ele);
// })
// arr.forEach((ele,idx,arr)=>{
//     console.log(arr);
// })
// arr.forEach((ele,idx,arr)=>{
//     arr[idx]=ele*2;
// })
// console.log(arr);
// str.forEach((ele,idx,str)=>{
//     str[idx]=idx*2;
// });
// console.log(str);
// arr.forEach(()=>{
//     console.log(ele);
// })

// let square=(ele,idx,arr)=>{
//     arr[idx]=ele**2;
// // }
// arr.forEach((ele,idx,arr)=>{
//     arr[idx]=ele*ele;
// });
// console.log(arr);

// let arr=[
//     {
//         name:"AAN",
//         id:12
//     },
//     {
//         name:"baaN",
//         id:13
//     },
//     {
//         name:"ShAN",
//         id:14
//     },
// ];

// arr.forEach((ele)=>{
//     console.log(ele);
// })

// arr.forEach((ele)=>{
//     ele.marks=10;
// })
// console.log(arr);

// arr.forEach((ele)=>{
//     console.log(ele.name);
// })

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(...arr);
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// let str="Hello World";
// console.log(...str);

// console.log(..."aan meri jaan aaj kamayenga kal khayenga");

// let arrCopy=[...arr];
// arrCopy.push(10,20,30);
// console.log(arrCopy);
// arr.push(100,200);
// console.log(arr);
// console.log(arrCopy);

// let strCopy='..."hello"';
// console.log(strCopy);

// let arr1 = [1, 3, 5, 7, 9];
// let arr2 = [2, 4, 6, 8, 10];

// let nums = [...arr1, ...arr2];
// console.log(nums);
// let numRev = [...arr2, ...arr1];
// console.log(...numRev);

// let newNums = [-2, -1, 0, ...arr1, ...arr2, 11, 12, 13];
// console.log(...newNums);

// let str=[..."Hello World"];
// console.log(str);

// for(char of str){
//     console.log(char);
// }

// let student = {
//   name: "chaman",
//   age: 20,
//   marks: 90,
//   id() {
//     let temp = "";
//     temp += this.name[0] + this.marks;
//     return temp;
//   },
// };
// console.log(student.id());

// console.log(...student);
// let studentCopy = { char: "gadha", ...student, college:{name:"NIT SGR"} };
// console.log(studentCopy);
// console.log(student);

// let arr = [1, 2, 3, 4, 5, 6];
// let obj = { name: "arrIdx", ...arr, end: "arrEndend" };
// console.log(obj);

// let str = "Hello World";
// let obj2 = { name: "strIdx", ...str, end: "this is the end" };
// console.log(obj2);

// let totalObj = { ...student, ...studentCopy };
// console.log(totalObj);
// // totalObj.college="IIT Kanpur";
// totalObj.college.name="IIT Kanpur";
// console.log(totalObj);

// console.log(studentCopy.college);

// let nums=[1,2,3,4,5,6,7];
// console.log(nums);
// let ans=nums.map((ele)=>{
//     return ele*2;
// });

// console.log(...ans);
// let arr1=nums.map(()=>{
//     console.log("hello");
// })
// console.log(...arr1);

// let cube=nums.map((ele)=>{
//     return ele*ele*ele;
// })
// console.log(...cube);

// let nums=[2,4,6,8,9];
// let even=nums.every((ele)=>{
//     return ele%2==0;
// })
// console.log(even);

// let nums=[1,2,3,4,5,6,7,8,9];
// let ans=nums.some((ele)=>{
//     return !(ele%2==0);
// })
// console.log(ans);

// let nums=["abc","acd","man","don","har","afg"];
// let ans=nums.filter((ele)=>{
//     return !(ele[0]=="a");
// })
// console.log(...ans);

// let nums=[23,56,-90,0,1,0,23,-67,-564,-37281];
// let lessThan0=nums.filter((ele)=>{
//     return ele<0;
// });
// console.log(...lessThan0);

// let nums=[1,2,3,4,5,6,7,8,9,10];
// let sum=nums.reduce((res,ele)=>{
//     res+=ele;
//     return res;
// });
// console.log(sum);


// let mergeObjects = (obj1, obj2) => {
//   let ans = { ...obj1, ...obj2 };
//   return ans;
// };

// const obj1 = {
//   nam: "abc",
//   mark: 10,
// };
// const obj2 = {
//   name: "bcd",
//   marks: 9,
// };
// let ansObj = mergeObjects(obj1, obj2);
// console.log(ansObj);


// let double=(arr,...arg)=>{
//     let ans=[...arr, ...arg];
//     ans=ans.map((ele)=>{
//         return ele*2;
//     })
//     return ans;
// }
// let arr=[1,2,3,4,5];
// let doubleAns=double(arr,6,7,8,9,0);
// console.log(doubleAns);

// let arr=["a","b","c","d","hello world","123","121","12abcd"];

// let upCase=(arr)=>{
//     let ans=arr.map((ele)=>{
//         return ele.toUpperCase();
//     })
//     return ans;
// }

// console.log(upCase(arr));
// console.log("hello World".toUpperCase());

// let plus5=(arr)=>{
//     arr=arr.map((ele)=>{
//         return ele+5;
//     })
//     return arr;
// }
// console.log(plus5([1,2,3,4,5,6,7]));

let square=(arr)=>{
    arr=arr.map((ele)=>{
        return ele**2;
    })
    return arr;
}
let arr=[1,2,3,4,5];
console.log(square(arr));

let sum=(arr)=>{
    let abc=arr.reduce((res,ele)=>{
        return ele+res;
    })
    return abc;
}
console.log(sum(square(arr)));