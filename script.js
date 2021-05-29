// Variable Declarations
const button = document.getElementById('button');
const body = document.getElementById('body');
const rgbText = document.getElementById('rgb');
const hexText = document.getElementById('hex_text');
const hexValue = document.getElementById('hex_value');
const copy = document.getElementById('copy');
rgbText.value = "rgb(233, 150, 122)";

// Main function that generates a random color, changes the background into it and displays the Rgb value on screen
const randomColor = () => {

  // Generates a random number
  const randomColorGen = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Setting the background color to be the randomly generated number
  body.style.backgroundColor = randomColorGen;

  // Display the color value in rgb and hex
  // rgbText.innerHTML = body.style.backgroundColor;
  rgbText.innerHtml = body.style.backgroundColor;
  console.log(rgbText);
  rgbText.placeholder = rgbText.innerHtml;
  rgbText.value = rgbText.placeholder;
  
  hexValue.innerHTML = randomColorGen;
  
  
  
  
  const copyToClip = () => {
    rgbText.select();
    rgbText.setSelectionRange(0, 9999);
    document.execCommand('copy');
  }
  
  copy.addEventListener('click', copyToClip);
  
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
/*rgbText.addEventListener('click', () => window.prompt("If you want to copy the RGB value to clipboard: press CTRL+C, then ENTER", rgbText.textContent));
hexText.addEventListener('click', () => window.prompt("If you want to copy the HEX value to clipboard: press CTRL+C, then ENTER", hexValue.textContent));*/


// let areaText = document.getElementById('rgb');

// console.log(rgbText.placeholder);





/*const area = document.getElementById('area');
console.log(area.innerHTML);


const copyToClip = () => {
  area.select();
  area.setSelectionRange(0, 9999);
  document.execCommand('copy');
}

copy.addEventListener('click', copyToClip);*/


/*const areaText = document.getElementById('area');

const copyToClip = () => {
  console.log(areaText.value);
  areaText.select();
  areaText.setSelectionRange(0, 9999)
  document.execCommand('copy');
}

copy.addEventListener('click', copyToClip);*/
