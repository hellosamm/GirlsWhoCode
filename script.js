//Move the catcher with the left and right arrow keys to catch the falling objects.

/* VARIABLES */
let catcher, fallingObject;

let backgroundImg;
let catcherImg, fallingObjectImg;
let collideSound, wooshSound, clapSound;

let score = 0;
let winLose = 0;
let velocity = 3;

var mode;

/* PRELOAD LOADS FILES */
function preload() {
  //images
  catcherImg = loadImage("assets/racket.png");
  fallingObjectImg = loadImage("assets/tennis-ball-1.png");
  fallingObjectImg2 = loadImage("assets/tennis-ball-2.png");
  // backgroundImg = loadImage();

  //sounds
  collideSound = loadSound("assets/tennis-ball-hit-151257.mp3");
  wooshSound = loadSound("assets/whoosh-6316.mp3");
  clapSound = loadSound("assets/moreclaps-104533.mp3");

  //font
  arcadeFont = loadFont("assets/3X5_____.TTF");

  // //falling ball 2
  //   fallingObject2 = new Sprite(fallingObjectImg2, 100, 0, 10)
  //   fallingObject2.vel.y = velocity;
}

/* SETUP RUNS ONCE */
function setup() {
  clear();
  mode = 0;
  score = 0;
  winLose = 0;
  createCanvas(400, 400);
  background(70, 194, 103);

  // Resize
  catcherImg.resize(65, 0);
  fallingObjectImg.resize(50, 50);

  //catcher
  catcher = new Sprite(catcherImg, 200, 365, 100, 20, "k");

  //falling ball
  fallingObject = new Sprite(fallingObjectImg, 100, -30, 10);
  // fallingObject.rotationLock = true;
  // fallingObject.vel.y = velocity;
}

/* DRAW LOOP REPEATS */
function draw() {
  clear();
  if (mode == 0) {
    background(70, 194, 103);

    //text
    fill("white");
    textFont(arcadeFont);
    textSize(20);
    text(
      "move the racquet with \nthe L and R arrow keys to \nhit the tennis balls.",
      90,
      140
    );
    fill("lightgreen");
    text("\n\nPress ENTER to start", 90, 180);
    fill("white");
    textSize(30);
    text("score:" + score, 10, 30);
    if (kb.pressing("left")) {
      catcher.vel.x = -5;
    } else if (kb.pressing("right")) {
      catcher.vel.x = 5;
    } else {
      catcher.vel.x = 0;
    }
  }

  if (mode == 1) {
    background(70, 194, 103);
    //if fallingObject reaches bottom, go to end screen

    if (fallingObject.y >= height) {
      fallingObject.y = 0;
      fallingObject.x = random(width);
      wooshSound.play();
      wooshSound.setVolume(0.15);
      winLose = 1;
    }
    fallingObject.vel.y = velocity;
    fallingObject.vel.x = 0;

    //move with arrow keys
    if (kb.pressing("left")) {
      catcher.vel.x = -13;
      // print("left");
    } else if (kb.pressing("right")) {
      catcher.vel.x = 13;
      // print("right");
    } else {
      catcher.vel.x = 0;
    }

    //stop catcher at edge of the screen
    if (catcher.x < 40) {
      catcher.x = 40;
    } else if (catcher.x > 365) {
      catcher.x = 365;
    }

    //if fallingObject colides with catcher, move back to top
    if (fallingObject.collides(catcher)) {
      collideSound.play();
      collideSound.setVolume(0.15);
      fallingObject.y = 0;
      fallingObject.x = random(20, 380);
      fallingObject.vel.y = velocity;
      fallingObject.direction = "down";

      score = score + 1;
    }

    //calculates new arrow key velocity
    if (score < 10) {
      if (kb.pressing("left")) {
        catcher.vel.x = -7;
      } else if (kb.pressing("right")) {
        catcher.vel.x = 7;
      } else {
        catcher.vel.x = 0;
      }
    } else if (score < 30) {
      if (kb.pressing("left")) {
        catcher.vel.x = -10;
      } else if (kb.pressing("right")) {
        catcher.vel.x = 10;
      } else {
        catcher.vel.x = 0;
      }
    } else if (score < 100) {
      if (kb.pressing("left")) {
        catcher.vel.x = -15;
      } else if (kb.pressing("right")) {
        catcher.vel.x = 15;
      } else {
        catcher.vel.x = 0;
      }
    }

    //calculates new velocity
    if (score / 5 < 1) {
      velocity = 5;
    } else if (score / 10 < 2) {
      velocity = 7;
    } else if (score / 10 < 3) {
      velocity = 8;
    } else if (score / 10 < 4) {
      velocity = 10;
    }

    //you lose
    if (winLose == 1) {
      background(250, 189, 97);

      //sprites off screen
      catcher.pos = { x: 600, y: -300 };
      fallingObject.pos = { x: -100, y: 0 };

      fill(252, 253, 255);
      textSize(30);
      text("nice job!", 145, 180);
      textSize(20);
      text("press enter to play again!", 80, 220);
    }

    fill(252, 253, 255);
    textSize(40);
    text("score:" + score, 10, 40);
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    mode = 1;
  }

  if (winLose === 1 && keyCode === ENTER) {
    setup();
    draw();
    // mode = 0
    // score = 0
    // winLose = 0
    // // Resize
    // catcherImg.resize(65, 0);
    // fallingObjectImg.resize(50, 50);

    // //catcher
    // catcher = Sprite(catcherImg, 200, 365, 100, 20, 'k');

    // //falling ball
    // fallingObject = Sprite(fallingObjectImg, 100, -30, 10)
    // // fallingObject.vel.y = velocity;
  }
}
