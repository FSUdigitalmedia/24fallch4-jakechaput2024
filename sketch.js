let courierFont

function preload() {
  courierFont = loadFont("assets/CourierPrime-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(courierFont);
  textSize(35);
}

function draw() {
  background(125);
  fill("black")
  rect(89, 30, 215, 240);
  fill(101,112,174); //changes the text color of "House" to blue, RGB color code
  text("House", 100, 100);
  fill("white");
  text("of Leaves", 100, 135);
}
