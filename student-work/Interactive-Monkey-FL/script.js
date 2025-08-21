/* VARIABLES */
let innerFaceRadius = 71;
let innerFaceY = 170;
let earsWidth = 50;
let earsHeight = 70;
let eyesY = 170;
let eyesRadius = 25;

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 

  //sets the background color
  background(90,142,115); 
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //face
  fill(102, 51, 0);
  ellipse(width/2, height/2, 185, 200);
  fill(253, 242, 230);
  circle(165, innerFaceY, innerFaceRadius);
  circle(235, innerFaceY, innerFaceRadius);
  ellipse(width/2, 225, 125, 100);
  //ears
  fill(102, 51, 0);
  ellipse(100, height/2, earsWidth, earsHeight);
  ellipse(300, height/2, earsWidth, earsHeight);
  noStroke();
  //eyes
  fill("black");
  if(mouseIsPressed){
    strokeWeight(5);
    stroke("black");
    line(153, eyesY, 178, eyesY);
    line(223, eyesY, 248, eyesY);
    noStroke();
  } else {
    circle(165, eyesY, eyesRadius);
    circle(235, eyesY, eyesRadius);
  }
  //mouth
  fill("pink");
  arc(200, 215, 50, 50, 0, 180);
  //hat
  fill(255, 255, 104);
  triangle(145, 120, 255, 120, 200, 25);
  fill("white");
  circle(200, 25, 10);
  //banana
  fill(255, 255, 104);
  arc(100, 300, 80, 40, 30, 210);
  fill(102, 51, 0);
  rect(75, 280, 21, 19);

  //text
  fill(253, 242, 230);
  textSize(20);
  // text("By: Fiona L", 275, 375);
  text("Click to let the \nmonkey sleep", 15, 35);
}
