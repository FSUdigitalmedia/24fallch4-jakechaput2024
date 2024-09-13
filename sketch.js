let courierFont;
let loc1 = 10; //determines the x value of the poem that begins with "Little solace comes to those..."
let myhouse; //image of house

function preload() {
  courierFont = loadFont("assets/CourierPrime-Regular.ttf"); //font of the site's text
  myhouse = loadImage("assets/myhouse copy.png"); //preloads the house image

}

function setup() {
  createCanvas(windowWidth, windowHeight); //makes the width + height of the canvas the size of the window
  textFont(courierFont);

}

function draw() {
  background(252, 238, 215);
  fill(252, 238, 215)
  rect(400, 1050, 460, 600);
  image(myhouse, 420, 1070); //house image on bottom of screen

  

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
  textSize(35); //size of the text in the black square
  text("House", 100, 100);
  fill("white");
  textSize(35);
  text("of Leaves", 100, 135);

  
}
