let courierFont;
let loc1 = 10; //determines the x value of the poem that begins with "Little solace comes to those..."
let myhouse; //image of house
let compassmouse; //mouse cursor
let loc2 = 0 //y value of text
let loc3 = 0 //y value, oh boy im gonna have to make a lot of these aren't i?
let loc4 = 0 //y value
let loc5 = 0 //y
let loc6 = 0 //y
let loc7 = 0 //y
let loc8 = 0 //y


function preload() {
  courierFont = loadFont("assets/CourierPrime-Regular.ttf"); //font of the site's text
  myhouse = loadImage("assets/myhouse copy.png"); //preloads the house image
  //compassmouse = loadImage("assets/tinycompass1 copy.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight); //makes the width + height of the canvas the size of the window
  textFont(courierFont);

}

function draw() {
  background(252, 238, 215);
  fill(252, 238, 215)
  rect(400, 1050, 460, 600);
  line(600, 1050, 600, 0)
  image(myhouse, 420, 1070); //house image on bottom of screen

  //Little solace poem
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

  //text flipped on side
  //----
  push();
  translate(200, 1200);
  rotate(radians(270));
  fill("black");
  textSize(16);
  text('The halls of the house on Ash Tree Lane twist and wind and develop into a seedy, black underbelly', loc2, 0);
  loc2 = loc2 + 2
  if (loc2 > height) {
    loc2 = 0;
  }
  pop();
  //----
  push();
  translate(220, 1300);
  rotate(radians(270));
  fill("black");
  textSize(16);
  text('the likes of which provoke Will Navidson into exploring the dark further. The tantalizing urge to discover what lies beyond the realm of the unknown', loc3, 0);
  loc3 = loc3 + 1.5
  if (loc3 > height) {
    loc3 = 0;
  }
  pop();
  //----
  push();
  translate(240, 1320);
  rotate(radians(270));
  fill("black");
  textSize(16);
  text('As he explores the cavernous depths of his home, the viewer finds themself likening Navidson to an explorer of kinds. The notion harkens back to the age of crypt seekers, cave robbers,', loc4, 0);
  loc4 = loc4 + 0.526
  if (loc4 > height) {
    loc4 = 0;
  }
  pop();
  //----
  push();
  translate(260, 1367);
  rotate(radians(270));
  fill("black");
  textSize(16);
  text('Hollywoods greatest film heroes like Indiana Jones (59). But unlike these greats, Navidson is the unassuming family man, the lone father figure unaware of his own house. In the moment, the audience forgets that he has covered wars, seen human suffering face-to-face, and has captured the brutality of war. He becomes like the character in a Lovecraftian novel, having stumbled upon some dark, occult secret. But the brutal shock of the strange situation renders him unable to rely', loc5, 0);
  loc5 = loc5 + 0.6753
  if (loc5 > height) {
    loc5 = 0;
  }
  pop();
  //----
  push();
  translate(280, 1367);
  rotate(radians(270));
  fill("black");
  textSize(16);
  text('on his prior experiences to rationalize the darkness staring before him. There was no rational explanation after all, unless one believes that Navidson himself was the originator of his dilemma.        But the theory falls apart after the consideration of how deep the soot-black, ebony hallways of unnatural house stretch. Alien (1979) set designer Chris Foss described the look and feel of the houses labyrinth as "offputting", and its uncanny nature as "so starkly obvious it was ingenious" (60).', loc6, 0);
  loc6 = loc6 + 1.7
  if (loc6 > height) {
    loc6 = 0;
  }
  pop();
  //----
  push();
  translate(300, 1200);
  rotate(radians(270));
  fill("black");
  textSize(16);
  text('H.R. Giger was reportedly fascinated at the third midnight screening of The Navidson Record(61), and likened the work to his viscerally sexual, organic depictions of otherworldly design(62).    The Navidson Record stirred up the visual arts community, prompting valuable discussion of the films merit as an artistic work. Many contemporaries have taken this approach, but lambast the sense of familiarity created by the solid narrative, as it makes discussion of ethereal and abstract concepts difficult. Will Navidson himself has rejected', loc7, 0);
  loc7 = loc7 + 1.9
  if (loc7 > height) {
    loc7 = 0;
  }
  pop();
  //----
  push();
  translate(320, 1300);
  rotate(radians(270));
  fill("black");
  textSize(16);
  text('these interpretations. "Its a real house, its there" (63), he has said. Yet critics and die-hard fans have fought over his own words meaning. Roger Ebert is quoted as having said "Its rather good fun and all, but the cinematography and characters leave more to be desired"(64)', loc8, 0);
  loc8 = loc8 + 3
  if (loc8 > height) {
    loc8 = 0;
  }
  pop();

  //house of leaves logo
  //----
  fill("black")
  rect(89, 30, 240, 240);
  fill(101,112,174); //changes the text color of "House" to blue, RGB color code
  textSize(35); //size of the text in the black square
  text("House", 100, 100);
  fill("white");
  textSize(35);
  text("of Leaves", 100, 135);

  //image(compassmouse, mouseX, mouseY); //changes cursor to compass

  
  

}
