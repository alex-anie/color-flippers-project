// HTML Variable
let heroSection = document.querySelector('.hero-section');
let span = document.querySelector('span');
let btn = document.querySelector('.btn');


// JS Variable
let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

btn.addEventListener('click', ()=>{
  let hexCode = "#";
  for(let i = 0; i < hexValues.length - 13; i++) {
    hexCode += hexValues[Math.floor(Math.random() * hexValues.length)];
}
  span.textContent = hexCode;
  heroSection.style.backgroundColor = hexCode;
});
