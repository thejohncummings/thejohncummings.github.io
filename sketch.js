// Tiny One

let myFont;
function preload() {
  myFont = loadFont('assets/BASKVILL.ttf');
}

function setup() {
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  text('p5*js', 10, 50);
}

function draw() {
  background(220);
}