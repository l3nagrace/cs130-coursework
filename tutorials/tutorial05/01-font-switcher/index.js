const makeBigger = () => {
   
   var header = document.querySelector("h1");
   var text = document.querySelector("div.content");

   style = window.getComputedStyle(header, text, null).getPropertyValue("font-size");
   currSize = parseFloat(style);

   header.style.fontSize = (currSize + 6) + "px";
   text.style.fontSize = (currSize + 4) + "px";
};

const makeSmaller = () => {
   
   var header = document.querySelector("h1");
   var text = document.querySelector("div.content");

   style = window.getComputedStyle(header, text, null).getPropertyValue("font-size");
   currSize = parseFloat(style);
   
   header.style.fontSize = (currSize - 4) + "px";
   text.style.fontSize = (currSize - 6) + "px";
};

document.querySelector("#a1").addEventListener("click", makeBigger);
document.querySelector("#a2").addEventListener("click", makeSmaller);