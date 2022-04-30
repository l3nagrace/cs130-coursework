var header = document.querySelector('header');
var content = document.querySelector('div.content');
var button = document.querySelector('button');

const defaultTheme = () => {

   header.style.background = ('');
   header.style.color = ('');
   content.style.background = ('');
   content.style.color = ('');
   button.style.borderBottom = 'solid, 1px';
}

const desertTheme = () => {

   header.style.background = '#A8651E';
   header.style.color = '#EFDEC2';
   document.querySelector('#desert').style.color = '#A8651E';
   content.style.background = '#EFDEC2';
   content.style.color = '#A8651E';
   button.style.borderBottom = 'solid, 1px, #774713';
}

const oceanTheme = () => {

   header.style.background = '#434a6c';
   header.style.color = 'white';
   header.style.fontFamily = 'Montserrat';
   document.querySelector('#ocean').style.color = '#434a6c';
   content.style.background = '#99cccc';
   content.style.color = '#434a6c';
   content.style.lineHeight = '1.6em';
   button.style.borderBottom = 'solid, 1px, #434a6c';
}

const highContrast = () => {

   header.style.background = 'black';
   header.style.color = 'white';
   document.querySelector('#high-contrast').style.color = 'black';
   content.style.background = 'white';
   content.style.color = 'black';
   button.style.borderBottom = 'solid, 1px, black';
}

document.querySelector("#default").addEventListener('click', defaultTheme);
document.querySelector("#desert").addEventListener('click', desertTheme);
document.querySelector("#ocean").addEventListener('click', oceanTheme);
document.querySelector("#high-contrast").addEventListener('click', highContrast);
