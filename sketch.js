// Big One

let droppedImage;
let textInputLine1;
let textInputLine2;
let exportButton;
let font;

function preload() {
  font = loadFont('assets/BASKVILL.ttf');
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.drop(gotFile);

  let dropArea = select("#drop_area");
  dropArea.drop(gotFile);
  textFont(font);
  textInputLine1 = select("#text_line1");
  textInputLine2 = select("#text_line2");
  exportButton = select("#export_button");
  exportButton.mousePressed(exportImage);
}

function gotFile(file) {
  if (file.type === "image") {
    droppedImage = createImg(file.data, "");
    droppedImage.hide();
  } else {
    console.log("Not an image file!");
  }
}

function draw() {
  background(220);
  if (droppedImage) {
    let textLine1 = textInputLine1.value();
    let textLine2 = textInputLine2.value();

    textSize(32);
    textAlign(CENTER, BOTTOM);
    fill(255);
    text(textLine1, width / 2, height / 2 - 20);
    text(textLine2, width / 2, height / 2 + 20);

    image(droppedImage, 0, 0, width, height);
  }
}

function exportImage() {
  if (droppedImage) {
    let graphics = createGraphics(width, height);
    let textLine1 = textInputLine1.value();
    let textLine2 = textInputLine2.value();

    graphics.image(droppedImage, 0, 0, width, height);

    graphics.textSize(32);
    graphics.textAlign(CENTER, BOTTOM);
    graphics.fill(255);
    graphics.text(textLine1, width / 2, height / 2 - 20);
    graphics.text(textLine2, width / 2, height / 2 + 20);

    let imageFileName = "image_with_text_overlay.jpg";
    graphics.save(imageFileName);
    console.log(`Image with text overlay saved as ${imageFileName}`);
  }
}

function drawRect() {
  fill(100, 100, 100, 50)
  noStroke()
  rect(0, 200, width, 150)
}
