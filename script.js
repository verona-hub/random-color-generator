// Variable Declarations
// Body
const body = document.getElementById('body');
const backgroundColor = body.style.backgroundColor;

// Rgb and Hex values
let rgbText = document.getElementById('rgb');
rgbText.value = rgbText.placeholder;

const hexText = document.getElementById('hex_text');
const hexValue = document.getElementById('hex_value');

// Copy and button
const copy = document.getElementById('copy');
const button = document.getElementById('button');


// Main function that generates a random color, changes the background into it and displays the Rgb value on screen
const randomColor = () => {

  // Generates a random number
  const randomColorGen = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Setting the background color to be the randomly generated number
  body.style.backgroundColor = randomColorGen;

  // Display the color value in rgb and hex
  // rgbText.innerHTML = body.style.backgroundColor;
  rgbText.value = body.style.backgroundColor;
  rgbText.placeholder = rgbText.value;

  hexValue.innerHTML = randomColorGen;
}



const copyToClip = () => {
  rgbText.select();
  rgbText.setSelectionRange(0, 9999);
  document.execCommand('copy');
}
copy.addEventListener('click', copyToClip);




// The main functions fires on button click
button.addEventListener('click', randomColor);

// The main functions fires when Spacebar or Enter are pressed on the keyboard
document.addEventListener('keydown', event => {
  if (event.code == 'Space' || event.key == 'Enter') {
    randomColor();
  }
});
