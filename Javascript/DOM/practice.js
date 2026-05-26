// let body=document.querySelector("body");
// let para1=document.createElement("p");
// para1.innerText="Hey, I am red!";
// body.insertAdjacentElement("afterbegin",para1);
// para1.classList.add("redText");

// let h3=document.createElement("h3");
// h3.innerText="Hey! I'm H3";
// h3.classList.add("blueText");
// body.insertAdjacentElement("beforeend",h3);

// let div=document.createElement("div");
// div.classList.add("div");
// body.insertAdjacentElement("beforeend",div);

// let newH1=document.createElement("h1");
// newH1.innerText="I am in Div";
// div.insertAdjacentElement("beforeend",newH1);

// let newP=document.createElement("p");
// newP.innerText="Mee Too";
// div.insertAdjacentElement("beforeend",newP);

// console.log(window);
// console.log(window.document);
// console.log(document);
// console.dir(document);
// console.dir(window.document);
// console.log(document.all);
// console.log(window.document.all);
// let htmlCollection=window.document.all;
// console.log(htmlCollection);
// console.log(htmlCollection[7]);
// console.dir(htmlCollection[7]);
// htmlCollection[7].innerText="Javascript is king";
// console.log(htmlCollection[7].id);
// htmlCollection[7].id="h1";
// console.log(htmlCollection[7].id);

// let img=document.getElementById("mainImg");
// console.log(img.id);
// console.log(img.innerHTML);
// console.log(img.innerText);
// console.log(img);
// console.dir(img);
// console.log(document.getElementById("topDiv"));
// console.log(img.src);
// console.log(document.getElementById("manshu"));
// img.src="/assets";

// let oldImg=document.getElementsByClassName("oldImg");
// console.log(oldImg);
// console.log(oldImg[0]);
// console.log(oldImg[1]);
// console.log(oldImg[2]);
// console.dir(oldImg[0]);
// console.dir(oldImg[1]);
// console.dir(oldImg[2]);
// console.log(oldImg[0].src);
// console.log(oldImg[0].id);
// console.log(document.getElementsByClassName("Hello"));
// for(ele of oldImg){
//     console.log(ele);
// }
// for(img of oldImg){
//     console.dir(img);
//     console.log(img.src);
// }

// let pTag=document.getElementsByTagName("p");
// console.log(pTag);
// for(ele of pTag){
//     console.dir(ele);
// }
// console.log(document.getElementsByTagName("span"));
// for(ele of pTag){
//     console.log(ele.innerText);
//     console.log(ele.id);
// }
// console.log(document.getElementsByTagName("html")[0].innerHTML);

// console.log(document.querySelector("li"));
// console.dir(document.querySelector("li"));
// console.log(document.querySelector("p"));
// console.log(document.querySelector(".creationDev h2"));
// console.log(document.querySelectorAll(".creationDev h2"));
// console.log(document.querySelector("#description").innerText);
// console.log(document.querySelectorAll("#description")[0].innerText);

// let a=document.querySelectorAll("body p");
// console.log(a);
// for(ele of a){
//     ele.innerText="Hello";
//     console.log(ele.id);
// }

// let para=document.querySelector("p");
// console.log(para.innerText);
// console.log(para.innerHTML);
// console.log(para.textContent);
// console.log(para);
// console.dir(para);

// para.innerText="<b>Hello</b>";
// para.innerHTML="<u>kaisa</u> hai <b>bidu</b>";
// para.innerHTML=`<u>${para.innerText}</u>`
// para.innerHTML=`I am Peter parker. <u>${para.innerText}</u>`

// let img=document.querySelector("#mainImg");
// console.log(img.getAttribute("src"));
// console.log(img.getAttribute("id"));
// console.log(img.getAttribute("alt"));
// console.log(img.getAttribute("width"));
// console.log(img.getAttribute("class"));
// console.log(img.getAttribute("style"));

// img.setAttribute("alt","dil ka chain");
// console.log(img.getAttribute("alt"));
// img.setAttribute("class","hi");
// img.setAttribute("class","bye");
// console.log(img.getAttribute("class"));

// let head=document.querySelector(".head");
// head.setAttribute("style","color='red'");

// let head=document.querySelector(".head");
// console.dir(head);
// console.log(head.style);
// // head.style.backgroundColor="black";
// // head.style.color="red";
// head.style.border="1px solid black";

// let links=document.querySelectorAll(".pubInfo a");
// console.log(links);
// // links.style.color="yellow";
// for(let link of links){
//     link.style.color="red"
// }

// let head=document.querySelector(".head");
// console.dir(head);
// console.log(head.classList);
// head.classList.add("hello");
// console.log(head.classList);
// console.log(head.classList.contains("joker"));
// console.log(head.classList.contains("head"));
// head.classList.remove("head");
// console.log(head.classList);
// head.classList.add("Hi","joker","lofar");
// console.log(head.classList);

// head.setAttribute("class","joker lofar jofer");
// console.log(head.getAttribute("class"));

// head.classList.toggle("head");
// head.classList.toggle("bulla");
// console.log(head.classList);

// head.classList.add("underLine");

// let head=document.querySelector(".head");
// console.log(head.parentElement);
// let html=document.querySelector("html");
// console.log(html.children);
// let body=document.querySelector("body");
// console.log(body.previousElementSibling);

// let list=document.querySelector("#first");
// console.log(list);
// console.log(list.parentElement);
// console.log(list.parentElement.childElementCount);
// console.log(list.parentElement.children);
// console.log(list.nextElementSibling);
// console.log(list.previousElementSibling);


// let input=document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("placeHolder","Type Here!")
// let body=document.querySelector("body");
// body.insertAdjacentElement("afterbegin",input);
// let btn=document.createElement("button");
// btn.innerText="CLICK ME";
// body.insertAdjacentElement("afterbegin",btn);
// input.setAttribute("placeHolder","username");
// btn.setAttribute("id","btn");
// console.log(btn.id);

// let btn2=document.querySelector("#btn");
// // btn2.style.backgroundColor="blue";
// // btn2.style.color="white";
// btn2.classList.add("blue-background","white-text");

// let h1=document.createElement("h1");
// h1.innerText="DOM PLAYGROUND";
// h1.style.color="purple";
// body.insertAdjacentElement("afterbegin",h1);

// let newPara=document.createElement("p");
// newPara.innerHTML="International space station takes <b>90min</b> to complete one round of earth";
// body.insertAdjacentElement("beforeend",newPara);

// let body=document.querySelector("body");
// let toDelete=document.querySelector(".pubInfo")
// toDelete.remove();
// body.removeChild(document.querySelector(".pubInfo"));