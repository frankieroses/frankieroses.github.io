//navigation

document.getElementById("showNav").addEventListener("click", function(event){
    document.getElementById("nav").style.top = "0px";
});

document.getElementById("hideNav").addEventListener("click", function(event){
    document.getElementById("nav").style.top = "-100px";
});

//dark + light mode

let div = document.getElementById("changeMe")
let textBox = document.getElementById("textBox")
let background = document.getElementById("pageBg")
let nav = document.getElementById("nav")

document.getElementById("darkMode").addEventListener("click", function(event){
    div.classList.replace('lightDiv', 'darkDiv');
    textBox.classList.replace('lightText', 'darkText');
    background.classList.replace('lightBg', 'darkBg');
    nav.classList.replace('lightNav', 'darkNav');
});

document.getElementById("lightMode").addEventListener("click", function(event){
    div.classList.replace('darkDiv', 'lightDiv');
    textBox.classList.replace('darkText', 'lightText');
    background.classList.replace('darkBg', 'lightBg');
    nav.classList.replace('darkNav', 'lightNav');
});

//click button

let explainer = document.getElementById("textBox");

document.getElementById("clickEvent").addEventListener("click", function(event){
    console.log(event);
    explainer.innerHTML =
      "Thanks for clicking me! I am finally free. Don't ask what this means, you don't wanna know.";
});

//hover buttton

document.getElementById("hoverEvent").addEventListener("mouseover", function(event){
    console.log(event);
    explainer.innerHTML =
      "Did you mean to hover over me? If you did, thanks. If you didn't, thanks anyway?";
});

//find time

document.getElementById("findTime").addEventListener("click", function(event){
    console.log(event);
    const time = new Date().toLocaleTimeString(); 
    explainer.innerHTML =
        `It's currently ${time}.`
});


