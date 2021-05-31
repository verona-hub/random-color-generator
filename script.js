// Variable Declarations

// Body
const body = document.getElementById('body');

// Rgb and Hex color values
let inputs = document.querySelectorAll('input');

// Buttons
const button = document.getElementById('button');


// Main function that generates a random color, changes the background into it and displays the Rgb + hex value on screen
const randomColor = () => {

  // Generates a random number
  const randomColorGen = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Setting the background color to be the randomly generated number
  body.style.backgroundColor = randomColorGen;

  // Display rgb color value
  rgb.value = body.style.backgroundColor;
  // Display hex color value
  hex.value = randomColorGen;
}

// Function that copies the rgb or hex value to the clipboard
const copyToClipboard = () => {
  // Loop through the two inputs
  inputs.forEach(input => {
    // For each input add a click event listener
    input.addEventListener('click', e => {
      // Get the color value of the input
      let targetValue = e.target.value;
      // Create an element to append
      const element = document.createElement('textarea');
      // Copy the click target value to the new element
      element.value = targetValue;
      // Add the new element to the document
      document.body.appendChild(element);
      // Select and copy the value
      element.select();
      document.execCommand('copy');
      // Remove the new element from the body
      document.body.removeChild(element);
    });
  });
};
// Add a click event listener to the body, to listen for a click on rgb or hex
document.addEventListener('click', copyToClipboard);

// The main functions fires on button click
button.addEventListener('click', randomColor);

// The main functions fires when Spacebar or Enter are pressed on the keyboard
document.addEventListener('keydown', event => {
  if (event.code == 'Space' || event.key == 'Enter') {
    randomColor();
  }
});