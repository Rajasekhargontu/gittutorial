const logos={
    pl:["./assets/C.png","./assets/Java.png","./assets/Python.png","./assets/JavaScript.png"],
    db:["./assets/MySQL.png","./assets/MongoDB.png"],
    fsd:["./assets/HTML5.png","./assets/CSS3.png","./assets/JavaScript.png","./assets/Bootstrap.png","./assets/React.png","./assets/Express.png","./assets/Nodejs.png"],
    tools:["./assets/VSCode.png","./assets/Postman.png"],
    vc:["./assets/Git.png","./assets/GitHub.png"]
}
// window.addEventListener("DOMContentLoaded",())
const logodiv=document.getElementsByClassName('logos')[0];
function show(key){
    logodiv.innerHTML="";
    logos[key].forEach(src => {
        code=`<img src=${src} class="logo">`;
        logodiv.innerHTML+=code;
    });
}
