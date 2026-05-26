let para=document.querySelector("p");
console.dir(para);

console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);

para.innerText="I am <b>Peter Parker</b>";

para.innerHTML="I am <b>Peter Parker</b>";

// let mainH1=document.querySelector("h1");
// mainH1.innerHTML="<u>Spider Man</u>";

let mainH1=document.querySelector("h1");
mainH1.innerHTML=`<u>${mainH1.innerText}</u>`;