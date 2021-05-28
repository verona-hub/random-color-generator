// Variable Declarations
const button = document.getElementById('button');
const body = document.getElementById('body');
const rgbText = document.getElementById('rgb');
const hexText = document.getElementById('hex_text');
const hexValue = document.getElementById('hex_value');

// Main function that generates a random color, changes the background into it and displays the Rgb value on screen
const randomColor = () => {

  // Generates a random number
  const randomColorGen = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Setting the background color to be the randomly generated number
  body.style.backgroundColor = randomColorGen;

  // Display the color value in rgb and hex
  rgbText.innerHTML = body.style.backgroundColor;
  hexValue.innerHTML = randomColorGen;
}

// The main functions fires on button click
button.addEventListener('click', randomColor);

// The main functions fires when Spacebar or Enter are pressed on the keyboard
document.addEventListener('keydown', event => {
  if (event.code == 'Space' || event.key == 'Enter') {
    randomColor();
  }
});

// Creates a window prompt to copy color value after clicking the rgb/hex text
rgbText.addEventListener('click', () => window.prompt("If you want to copy the RGB value to clipboard: press CTRL+C, then ENTER", rgbText.textContent));
hexText.addEventListener('click', () => window.prompt("If you want to copy the HEX value to clipboard: press CTRL+C, then ENTER", hexValue.textContent));
