var command_keys = ['w', 's', 'i', 'k'];
var keys_pressed = new Array ();
var startingScreen = true, draw2 = false, singlePlayer = false, multiPlayer = false, tutorial = false;

var score1 = 0, score2 = 0;
var b = new Ball();
var p1 = new Platform1();
var p2 = new Platform2();

function setup() {
  createCanvas(800, 800);
//  pikachu = loadImage("pikachu.png");
}

function draw() {
//  println(tutorial);
  ssss();
  startScreen();
  singlePlay();
  tutorialScreen();
}

function keyPressed() {
  for (var i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = true;
  }
      if (key == 'm' && startingScreen == true) {
    startingScreen = false;
    draw2 = true;
  }

  if (key == 's' && startingScreen == true) {
    startingScreen = false;
    singlePlayer = true;
  }
  
  if (key == 't' && startingScreen == true) {
    startingScreen = false;
    tutorial = true;
  }
  
  if (key == 'c' && tutorial == true) {
    startingScreen = true;
    tutorial = false;
  }
}

function keyReleased() {
  for (var i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = false;
  }
}

function ssss() {
  if (draw2 == true) {
    background('#656889');
    b.display();
    p1.display(350, 200);
    p1.check();
    p2.check();
    p2.display(390, 200);
    p1.move();
    p2.move();
    fill(255);
    if(score1 == 5) {text ("Player 1 wins!", 300, 400); noLoop();}
    if(score2 == 20) {text ("Player 2 wins!", 300, 400); noLoop();}
  }
}

function startScreen() {
  if (startingScreen == true) {
    background('#1286B2');
//    pikachu.recreateCanvas(200, 200);
//    image(pikachu, 300, 300);
    fill('#FEFF31');
  textSize(30);
  text("WELCOME TO THE WORST PING PONG GAME EVER!", 50, 200);
  text("Press 'T' to see a tutorial:)", 100, 600);
  }

  
}

function tutorialScreen() {
  if (tutorial == true) {
    startingScreen = false;
    background(0);
    fill(200, 250, 100);
    textSize(20);
    text("Welcome to the tutorial!", 350, 100);
    text("* Press 'S' for singleplayer mode!", 100, 300);
    text("* Press 'M' for multiplayer mode!", 100, 400);
    text("* In silgleplayer, if you will miss - you'll lose!", 100, 500);
    text("* In multiplayer, if you will get 20 points - you'll win!", 100, 600);
    text("* Press 'C' to close tutorial", 100, 700);
  }
}
function singlePlay() {
  if (singlePlayer == true) {
    startingScreen = false;
    background('#F7F748');
    p2.display(2000, 2000);
    b.display();
    p1.display(100, 780);
    p1.check();
    p1.move();
    p2.check();
    p2.y2 = 0;
    p2.x2 = 750;
    p2.d = 50;
    p2.h = 900;
    if (b.x <= 0) {
      textSize(50);
      fill(255, 100, 100);
      text("GAME OVER!", 250, 400);
      noLoop();
    }
  }
}

function Ball() {
  
    this.d = 30; 
    this.x = 350;
    this.y = 350;
    this.ballSpeedX = 11;
    this.ballSpeedY = 7;
    this.timer = 0;
  
this.display = function() {
    fill('#E86E1C');

    ellipse(this.x, this.y, this.d, this.d);
    this.move();
};
 this.move = function() {
    this.timer++;
    for (var i = 0; i < command_keys.length; i++) {
    }
    this.x += this.ballSpeedX;
    this.y += this.ballSpeedY;
    if (this.y + this.d/2 < 0) {
      this.ballSpeedY *= -1;
    }
    if (this.y + this.d/2 > height) {
      this.ballSpeedY *= -1;
    }
    if (this.x + this.d/2 > width && this.timer >= 30) {
      this.ballSpeedX *= -1;
      if(score2 > 0) {
      score2 -= 1;}
      this.timer = 0;
    }
    if (this.x + this.d/2 < 0 && this.timer >= 30) {
      this.ballSpeedX *= -1;
      if(score1 > 0) {
      score1 -= 1;}
      this.timer = 0;
    }
  }
}

function Platform1() {
  
    this.x = 0;
    this.y = 400;
    this.speed = 7;
    this.d = 30;
    this.h = 150;
    this.timer = 0;

 this.display = function( scoreX,  scoreY) {
    fill('#059BAA');
    rect(this.x, this.y, this.d, this.h);
    this.move();
    textSize(30);
    text(score1, scoreX, scoreY);
  }
 this.move = function() {
    for (var i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i]) {
        if (command_keys[i] == 'w') {
          this.y -= this.speed;
        }
        if (command_keys[i] == 's') {
          this.y += this.speed;
        }
      }
    }
  };

this.check = function() {
    this.timer++;
    if (b.x >= this.x && b.x <= this.x + 30 && b.y >= this.y && b.y <= this.y + 150) {
      b.ballSpeedX *= -1;
      if (this.timer >= 20) {
        score1 ++;
        this.timer = 0;
      }
    }
    if(this.y > 650) {this.y = 650;}
    if (this.y < 0) {this.y = 0;}
  }
}

function Platform2() {
 
    this.x2 = 770;
    this.y2 = 400;
    this.speed = 7;
    this.d = 30;
    this.h = 150;
    this.timer = 0;
    
  this.display = function(scoreX, scoreY) {
    fill('#DE1B4C');
    rect(this.x2, this.y2, this.d, this.h);
    this.move();
    textSize(30);
    text("-  " + score2, scoreX, scoreY);
  }
 this.move = function () {
    for (var i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i]) {
        if (command_keys[i] == 'i') {
          this.y2 -= this.speed;
        }
        if (command_keys[i] == 'k') {
          this.y2 += this.speed;
        }
      }
    }
  }
this.check = function () {
    this.timer++;
    if (b.x >= this.x2 && b.x <= this.x2 + this.d) {
      if (b.y >= this.y2 && b.y <= this.y2 + this.h) {
        b.ballSpeedX = - b.ballSpeedX;
        if (this.timer >= 40) {
          score2 ++;
         this.timer = 0;
        }
      }
    }
    if(this.y2 > 650) {this.y2 = 650;}
    if (this.y2 < 0) {this.y2 = 0;}
  }
}