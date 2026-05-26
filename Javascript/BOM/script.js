// console.log(window);

//location

// console.log(window.location);

// location.reload();                       // infinite loop of reload

// setTimeout(()=>{
//     location.reload();
// },2000);

// console.log(location.href);
// location.href="slfjonconoe";
// location.href="index.html";
// location.href="script.js";
// location.href="https://developer.mozilla.org/en-US/";


// window.history
// console.log(window.history);
// console.log(window.history.length);
// window.history.back();
// window.history.forward();
// history.go(-1);
// history.go(-4);          // 4 pages backward from current page
// history.go(0);
// history.go(5);



// window.innerHeight  && innerWidth
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.outerWidth);


// open()
// open();
// open('index.html');              // infinite loop never open this
// open("script.js");
// open('https://developer.mozilla.org/en-US/');
//console.log(window.name);        // i.e why name is deprecated as its already exists in window object
// open('https://developer.mozilla.org/en-US/','manshu');    // name is assigned to the newly opened tab


// window.close()
// can close only those windows that are opened by using javascript (window.open())
// window.close();


// resizeTo()           works when opened by using window.open('url','name','resizeable');
// window.resizeTo(500,500);
// open("https://developer.mozilla.org/en-US/","manshu","resizeable");
// resizeTo(500,500)
// undefined
// resizeTo(50,50)
// undefined
// resizeTo(500,400)

//resizeBy() works when opened by using window.open('url','name','resizeable');
// increses size in horizontal and vertical direction
// resizeBy(50,50);        //size increases
// resizeBy(-100,-50)      //size decreases

// moveTo(--,--)  moveBy(--,--)  moves the window in X and Y direction
// open("https://developer.mozilla.org/en-US/","manshu","resizeable");
// moveTo(0,0)
// undefined
// moveTo(0,0)
// undefined
// moveTo(0,200)
// undefined
// moveTo(200,0)
// moveBy(10,50)
// moveBy(-100,-100)


// window.scroll();
// scrollTo(0,100);
// scrollTo(100,100)        // scrolls in X and Y diection
// scrollBy(0,-200)

// window.print()
// print();


// window.document
// console.log(window.document);