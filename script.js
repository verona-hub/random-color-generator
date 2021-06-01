// Variable Declarations

// Body
const body = document.getElementById('body');
// Rgb and Hex color values
const inputs = document.querySelectorAll('input');
const rgb = document.getElementById('rgb');
const hex = document.getElementById('hex');
const copyText = document.querySelector('.copy-text');
const tooltipText = document.getElementById('tooltiptext');
// Button
const button = document.getElementById('button');

// Main function:
// a) generate a random color
// b) change the background into it
// c) display the Rgb + hex value on screen
const randomColorGen = () => {

  // Generate a random number
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Change the background color to the randomly generated number
  body.style.backgroundColor = randomColor;
  // Display the rgb color value on screen
  rgb.value = body.style.backgroundColor;
  // Display the hex color value on screen
  hex.value = randomColor;
}

// Function that copies the rgb or hex value to the clipboard
const copyToClipboard = () => {
  // Loop through the two inputs
  inputs.forEach(input => {
    // For each input add a click event listener
    input.addEventListener('click', e => {
      // Get the color value of the clicked input
      const targetValue = e.target.value;
      // Create a new element
      const element = document.createElement('textarea');
      // Copy the clicked value to the new element
      element.value = targetValue.toUpperCase();
      // Add the new element to the document
      document.body.appendChild(element);
      // Select and copy the value
      element.select();
      document.execCommand('copy');
      // Remove the new element from the body
      document.body.removeChild(element);
      // Remove the copy-text
      copyText.style.visibility = 'hidden';
      // Show the tooltip
      tooltipText.style.visibility = 'visible';
      // Remove the tooltip after 2s
      setTimeout(() => {
        tooltipText.style.visibility = 'hidden';
        // Bring back the copy-text
        copyText.style.visibility = 'visible';
      }, 2000);
    });
  });
};

// Add a click event listener to the body; the clicked value is copied to the clipboard
document.addEventListener('click', copyToClipboard);

// The main function fires on button click
button.addEventListener('click', randomColorGen);

// The main functions fires when Spacebar or Enter are pressed on the keyboard
document.addEventListener('keyup', event => (event.code == 'Space' || event.key == 'Enter') && randomColorGen());