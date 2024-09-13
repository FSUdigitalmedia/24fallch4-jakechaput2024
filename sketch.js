let courierFont
let loc1 = 10

function preload() {
  courierFont = loadFont("assets/CourierPrime-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(courierFont);
  //textSize(35);

}

function draw() {
  background(252, 238, 215);

  //test
  //----
  fill("black")
  textSize(12);
  text('Little solace comes to those who grieve', loc1, 120);
  textSize(12);
  text('when thoughts keep drifting as walls keep shifting', loc1, 140);
  textSize(12);
  text('and this great blue world of ours seems a house of leaves', loc1, 160);
  textSize(12);
  text('moments before the wind', loc1, 180);
  loc1 = loc1 + 5
  if (loc1 > width) {
    loc1 = 0;
  }

  fill("black")
  rect(89, 30, 240, 240);
  fill(101,112,174); //changes the text color of "House" to blue, RGB color code
  textSize(35);
  text("House", 100, 100);
  fill("white");
  textSize(35);
  text("of Leaves", 100, 135);

  
}
