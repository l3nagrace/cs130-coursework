const makeBigger = () => {
   // alert('make bigger!');
   var header = document.querySelector('h1');
   var text = document.querySelector('div.content');

   style = window.getComputedStyle(header, text, null).getPropertyValue('font-size');
   currSize = parseFloat(style);

   header.style.fontSize = (currSize + 10) + 'px';
   text.style.fontSize = (currSize + 8) + 'px';
};

const makeSmaller = () => {
   // alert('make smaller!');
   var header = document.querySelector('h1');
   var text = document.querySelector('div.content');

   style = window.getComputedStyle(header, text, null).getPropertyValue('font-size');
   currSize = parseFloat(style);
   
   header.style.fontSize = (currSize - 10) + 'px';
   text.style.fontSize = (currSize - 12) + 'px';
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);