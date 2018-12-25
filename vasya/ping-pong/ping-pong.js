var command_keys = ['w', 's', 'p', 'l'];
var keys_pressed = new Array ();

var b = new Ball();
var b2 = new Ball2();
var p = new Platform1();
var p2 = new Platform2();
var a = true, singlePlayer = false, multiPlayer = false, tutorial = false;
var count1 = 0, count2 = 0, level = 1;




function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background('#9392F5');
  if (a) {
    background(0);
    b2.display();
    fill('#00FF0A');
    textSize(100);
    text("PING-PONG", width/2-300, height/2-50);
    textSize(20);
    fill('#FAFF00');
    text("GAME MODES:", width/2-100, height/2+100);
    text("SINGLEPLAYER", width/2-300, height/2+150);
    text("MULTIPLAYER", width/2+100, height/2+150);
    fill("#05FF13");
    text("TUTORIAL", width/2-90, height/2+300);
    if (multiPlayer == true || singlePlayer == true || tutorial == true) {
      a = false;
    }
  } else {
    multiplayer();
    singleplayer();
    tutorialScreen();
  }
}

function singleplayer() {
  if (singlePlayer == true) {
    p.d2 = 2*height;
    p.y = 0 - 300;
    b.display();
    p.display();
    p2.display();
    leveL();
    score1();
  }
}

function multiplayer() {
  if (multiPlayer == true) {
    b.display();
    p.display();
    p2.display();
    leveL();
    score1();
    score2();
    rect(width/2, 1, 0, height);
  }
}

function tutorialScreen() {
  if (tutorial == true) {
    p.display();
    p2.display();
    textSize(20);
    fill("#F00515");
    text("to control player 1 use 'W' and 'S'", 150, height/2-200);
    fill("#0513FF");
    text("to control player 2 use 'P' and 'L'", 600, height/2-200);
    fill(255, 255, 255, 150);
    text("press ENTER to quit", 400, 700);
  }
}

function mouseClicked() {
  var d1 = dist(mouseX, mouseY, width/2-200, height/2+170);
  var d2 = dist(mouseX, mouseY, width/2+120, height/2+170);
  var d3 = dist(mouseX, mouseY, width/2-70, height/2+270);
  if (d1 <= 50) {
    singlePlayer = true;
  }
  if (d2 <= 50) {
    multiPlayer = true;
  }
  if (d3 <= 50) {
    tutorial = true;
  }
}


function keyPressed() {
  for (var i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = true;
  }
  if(key == ' '){
    b.x = 500;
    b.y = 400;
    loop();
    b.speedx++;
    b.speedy++;
    level++;
    count1 = 0;
    count2 = 0;
  }
  if(keyCode == ENTER) {
    a = true;
    tutorial = false;
    multiPlayer = false;
    singlePlayer = false;
  }
}

function keyReleased() {
  for (var i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = false;
  }
}

function leveL() {
  textSize(70);
  fill(255, 255, 255, 150);
  text("LEVEL", width/2-120, height/2-300);
  text(level, width/2+90, height/2-300);
}

function score1() {
  textSize(30);
  fill(200, 200, 255, 150);
  text("player 1's score:", 200, height/2-200); 
  text(count1, 440, height/2-200);
}

function score2() {
  textSize(30);
  fill(200, 200, 255, 150);
  text("player 2's score:", 600, height/2-200); 
  text(count2, 840, height/2-200);
}
function Ball() {
  
    this.x = 500;
    this.y = 100;
    this.d = 20;
    this.speedx = 5;
    this.speedy = 5;
  
 this.display = function () {
    fill("#0FF005");
    ellipse(this.x, this.y, this.d, this.d);

    this.x -= this.speedx;
    this.y -= this.speedy;
    if (this.x >= p.x && this.x <= width) {
      if (this.y >= p.y && this.y <= p.y+p.d2) {
        this.speedx = -this.speedx;
        count2++;
      }
    }
    if (this.x <= p2.x+p2.d1 && this.x >= 0) {
      if (this.y >= p2.y && this.y <= p2.y+p.d2) {
        this.speedx = - this.speedx;
        count1++;
      }
    }
    if (this.y - this.d/2 <=0 || this.y + this.d/2 >= height) {
      this.speedy = -this.speedy;
    }
    
    if (this.x >= width) {
      background(0);
      textSize(50);
      fill("#F00515");
      text("PLAYER 1 WON!", width/2-200, height/2 - 50);
      textSize(20);
      text("p r e s s  s p a c e  t o  r e s t a r t", width/2-175, height/2); 
      noLoop();
      count1 = 1;
    }
    if (this.x <= 0) {
      background(0);
      textSize(50);
      fill("#0597F0");
      text("PLAYER 2 WON!", width/2-200, height/2 - 50);
      textSize(20);
      text("p r e s s  s p a c e  t o  r e s t a r t", width/2-175, height/2);
      noLoop();
      count2 = 1;
    }
  }
}

function Ball2() {
  
    this.d = 20;
//    this.w = width - this.d;
//    this.h = height - this.d;
    this.x = Math.random() * (1000 - this.d) + this.d;
    this.y = Math.random() * (800 - this.d) + this.d;
    this.speedx = Math.random() * ( 8 - 5) + 5;
    this.speedy = Math.random() * ( 8 - 5) + 5;
  
  
this.display = function() {
    fill("#0FF005");
    ellipse(this.x, this.y, this.d, this.d);
    this.x += this.speedx;
    this.y += this.speedy;
    
    if(this.x >= width-this.d/2 || this.x <= this.d/2) {
      this.speedx = - this.speedx;
    }
    if(this.y >= height-this.d/2 || this.y <= this.d/2) {
      this.speedy = - this.speedy;
    }
  }
  
}

function Platform1() {
 
    this.d1 = 20;
    this.d2 = 240;
    this.x = 980;
    this.y = 100;
    this.speed = 7;
  

  this.display = function() {
    fill("#0597F0");
    rect(this.x, this.y, this.d1, this.d2);
    
    if (this.y >= height) {
      this.y = 0-230;
    }
    if (this.y <= 0-this.d2) {
      this.y = height - 3;
    }
    
    for (var i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i] == true) {
        if (command_keys[i] == 'p') {
          this.y -= this.speed;
        }
        if (command_keys[i] == 'l') {
          this.y += this.speed;
        }
      }
    }
  }
}



function Platform2() {
  
    this.d1 = 20;
    this.d2 = 240;
    this.x = 0;
    this.y = 100;
    this.speed = 7;
  

 this.display = function() {
    fill("#F00515");
    rect(this.x, this.y, this.d1, this.d2);
    
    if (this.y >= height) {
      this.y = 0-230;
    }
    if (this.y <= 0-this.d2) {
      this.y = height - 3;
    }
    
    for (var i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i] == true) {
        if (command_keys[i] == 'w') {
          this.y -= this.speed;
        }
        if (command_keys[i] == 's') {
          this.y += this.speed;
        }
      }
    }
  }
}