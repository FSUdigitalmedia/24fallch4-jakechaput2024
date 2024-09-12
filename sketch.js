let courierFont

function preload() {
  courierFont = loadFont("assets/CourierPrime-Regular.ttf");
}

function setup() {
  createCanvas(400, 400);
  textFont(courierFont)
}

function draw() {
  background(125);
  fill("blue")
  text("House", width/2, height/2)
}
