let courierFont

function preload() {
  courierFont = loadFont("assets/CourierPrime-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(courierFont)
}

function draw() {
  background(125);
  fill("blue");
  text("House", 100, 100);
  fill("white");
  text("of Leaves", 100, 115);
}
