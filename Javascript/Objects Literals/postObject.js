const post={
    userName:"Elon Musk",
    content:"video",
    likes:"4.3M",
    reposts:"500k",
    tags:["#spaceX","#tesla","#nasa"]
};
console.log(post);

console.log(post.userName);
console.log(post["userName"]);
console.log(post["likes"]);
console.log(post["tags"]);
console.log(`This was posted by the account having usename : ${post.userName}`);
console.log(`This was posted by the account having usename : ${post["userName"]}`)

console.log(post.tags[0]);
console.log(post.tags[1]);
console.log(post.tags[2]);


let str="tags";
console.log(post[str]);

