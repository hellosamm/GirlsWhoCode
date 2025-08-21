let eyeWidth = 40;
let eyeHeight = 30;
let glassesOn = false; // New toggle variable

function setup() {
  createCanvas(400, 400);
  background("lightblue");
}

function draw() {
  angleMode(DEGREES);
  rectMode(CENTER);
  background("lightblue");

  // Ears
  noStroke();
  fill("black");
  ellipse(130, 120, 60, 60);
  ellipse(270, 120, 60, 60);

  // Face
  fill("white");
  ellipse(width / 2, height / 2, 200, 200);

  // Eye patches
  fill("black");
  ellipse(150, 190, 60, 80);
  ellipse(250, 190, 60, 80);

  // Eyes
  if (glassesOn) {
    // Sunglasses
    fill("#f93afc");
    rect(200, 190, 160, 8);
    arc(150, 190, 51, 40, 0, 180);
    arc(250, 190, 51, 40, 0, 180);
    rect(150, 190, 51, 18);
    rect(250, 190, 51, 18);
    fill("#ffdbe9");
    ellipse(150, 190, eyeWidth, eyeHeight);
    ellipse(250, 190, eyeWidth, eyeHeight);
  } else {
    // Kawaii Eyes
    fill("white");
    stroke("black");
    strokeWeight(2);
    ellipse(150, 190, eyeWidth, eyeHeight);
    ellipse(250, 190, eyeWidth, eyeHeight);

    // Pupils
    fill("black");
    noStroke();
    ellipse(150, 190, 15, 20);
    ellipse(250, 190, 15, 20);

    // Sparkles
    fill("white");
    ellipse(145, 185, 5, 5);
    ellipse(245, 185, 5, 5);
  }

  // Nose
  noStroke();
  fill("black");
  triangle(200, 210, 190, 230, 210, 230);

  // Kawaii "w" mouth
  stroke("black");
  strokeWeight(2);
  noFill();
  beginShape();
  vertex(190, 245);
  bezierVertex(193, 250, 197, 250, 200, 245);
  bezierVertex(203, 250, 207, 250, 210, 245);
  endShape();

  // Text
  noStroke();
  fill(0);
  text('Kawaii Panda 🐼\n"Stay calm and bamboo on."', 10, 20);
  text("Click to toggle \nsunglasses.", 300, 350);
}

// Toggle sunglasses on mouse click
function mousePressed() {
  glassesOn = !glassesOn;
}