/* VARIABLES */
let eyeWidth = 50;
let eyeHeight = 40;
let pupilWidth = 22;
let pupilHeight = 22;
let toggle = false

/* SETUP RUNS ONCE */
function setup() {
  //sets the screen size
  createCanvas(400,400); 
  print(width)

  //sets the background color
  background(179, 224, 255);
}

/* DRAW LOOP REPEATS */
function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);

  //hair
  fill(250, 235, 142);
  noStroke();
  rect(200, 240, 250, 300, 400, 400, 100,100);

  //face
  fill(243, 210 ,165);
  noStroke();
  ellipse(200,200,165 ,180,);

  //bangs
  fill(250, 235, 142);
  noStroke();
  ellipse(170, 120, 80, 40);

  fill(250, 235, 142);
  noStroke();
  ellipse(230, 120, 80, 40);

  fill(250, 235, 142);
  noStroke();
  ellipse(200, 100, 80, 20);

  //ears
  fill(243, 210 ,165);
  ellipse(115, 190, pupilWidth, 40);
  ellipse(285, 190, pupilWidth, 40);

  //left earrings
  fill(250, 248, 240);
  noStroke();
  circle(115, 205, 4);

  fill(250, 248, 240);
  noStroke();
  circle(110, 200, 3);

  fill(250, 248, 240);
  noStroke();
  circle(110, 175, 3);

  //right earrings
  fill(250, 248, 240);
  noStroke();
  circle(285, 205, 4);

  fill(250, 248, 240);
  noStroke();
  circle(290, 200, 3);

  //nose
  fill(217, 187, 145);
  triangle(200, 180, 190, 220, 210, 220);

  //eyes
  if(mouseIsPressed){
    //eyes closed
    fill(0);
    ellipse(170, 170, eyeWidth, eyeHeight/8);
    //ellipse(230, 170, eyeWidth, eyeHeight/8);
  fill(255, 255, 255);
  ellipse(230, 170, eyeWidth, eyeHeight);
  //R pupil
    fill(0, 0, 0);
    ellipse(230, 170, pupilWidth, pupilHeight);
  //highlight
    fill(225, 225, 225);
    ellipse(225, 168, pupilWidth/2, pupilHeight/2);

  }

  else{
    //eyes open
    fill(255, 255, 255);
    ellipse(170, 170, eyeWidth, eyeHeight);
    ellipse(230, 170, eyeWidth, eyeHeight);

    //pupils
    fill(0, 0, 0);
    ellipse(170, 170, pupilWidth, pupilHeight);
    ellipse(230, 170, pupilWidth, pupilHeight);

    //highlight
    fill(225, 225, 225);
    ellipse(165, 168, pupilWidth/2, pupilHeight/2);
    ellipse(225, 168, pupilWidth/2, pupilHeight/2);
    }

  //mouth
  fill(225, 102, 153);
  stroke(225, 0, 102);
  strokeWeight(3);
  arc(200, 230, 50, 50, 0, 180);

  //text
  textSize(15)
  fill(0, 102, 255);
  noStroke();
  text('helloooooooo!', 20, 20);    

  //directions for mouse press
text("click to see me wink :D", 200, 375)
}

//functions
function mousePressed(){
  mousePressed  
}


