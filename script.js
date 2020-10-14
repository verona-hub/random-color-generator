// Button Listener
const button = document.getElementById('button');

button.addEventListener('click', randomColor);



// Random Color Generator
function randomColor() {

  const body = document.getElementById('body');

  body.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById('rgb').innerHTML = body.style.backgroundColor;

  console.log('The background color is: ' + body.style.backgroundColor);

}



// Spacebar and Enter as actionkeys
document.addEventListener('keydown', function(event) {

  if (event.code == 'Space' || event.key == 'Enter') {

    randomColor();

  }
});



// Window prompt to copy color value
const rgb = document.getElementById('rgb');

rgb.addEventListener('click', function() {

  window.prompt("If you want to copy to clipboard: press CTRL+C, then ENTER", rgb.textContent);

});