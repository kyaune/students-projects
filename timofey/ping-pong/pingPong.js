let b, p, p2;
let Startreck;
let singlePlayer = false;
let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('Black.mp3');
}

function setup() {
  createCanvas(1000, 800);

  b = new Ball();
  p = new Plotform();
  p2 = new Plotform2();

  Startreck = loadImage("12.jpg");

  mySound.setVolume(0.1);
  mySound.play();
}

function draw() {
  image(Startreck, 0, 0, width, height);
  b.display();
  p.display();
  p2.display();
  oneplayer();
}

let command_keys = ['w', 'd', 's', 'a', 'p', 'l'];
let keys_pressed = [command_keys.length];

function keyPressed() {
  for (let i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = true;
  }
  Esc();
}

function keyReleased() {
  for (let i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = false;
  }
}

function Esc() {
  if (key == 'r') {
    b.x = 400;
    b.y = 400;
    loop();
  }
}

function oneplayer() {
  if (key == 'g') {
    singlePlayer = true;
  }
}

//
function Plotform() {
  let x = 0;
  let y = 0;
  let d = 30;
  let h = 150;
  let speedy = 8;
  let speedx = 8;

  this.display = function() {
    fill('#FF0000');
    rect(x, y, d, h);
    Portal();
    move();
    check();
  };

  function move() {
    Portal();
    if (singlePlayer == false) {
      for (let i = 0; i < command_keys.length; i++) {
        if (keys_pressed[i] == true) {
          if (command_keys[i] == 'w') {
            y -= speedy;
          }
          if (command_keys[i] == 's') {
            y += speedy;
          }
        }
      }
    } else {
      p.y = b.y - 50;
    }
  };

  function check() {
    if (b.x - b.d/2 < x + d && b.y - b.d/2 > y && b.y +b.d/2 < y + h) {
      b.speedx *= -1;
      console.log("Проверка есть");
    }
  };

  function Portal() {
    if (y < 0 - h) {
      y = 1000;
    }
    if (y > 1000 + h) {
      y = 0;
    }
  };
}

//
function Plotform2() {
  let x = 970;
  let y = 0;
  let d = 30;
  let h = 150;
  let speedy = 6;
  let speedx = 6;

  this.display = function() {
    fill('#FFFF00');
    rect(x, y, d, h);
    Portal();
    move();
    check();
  };

  function move() {
    for (let i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i] == true) {
        if (command_keys[i] == 'p') {
          y -= speedy;
        }
        if (command_keys[i] == 'l') {
          y += speedy;
        }
      }
    }
  };

  function check() {
    if (b.x + b.d/2 > x && b.y - b.d/2 > y && b.y +b.d/2 < y + h) {
      b.speedx *= -1;
    }
  };

  function Portal() {
    if (y < 0 - h) {
      y = 1000;
    }
    if (y > 1000 + h) {
      y = 0;
    }
  }
};

//
function Ball() {
  this.x = 400;
  this.y = 400;
  this.d = 50;
  let speedy = 4;
  this.speedx = -4;

  this.display = function() {
    fill('#FFFFFF');
    ellipse(this.x, this.y, this.d, this.d);
    this.move();
    this.theend();
  };

  this.move = function() {
    this.y += speedy;
    if (this.y + this.d/2 < 0) {
      speedy *= -1;
    }

    if (this.y + this.d/2 >height) {
      speedy *= -1;
    }
    this.x += this.speedx;
  };

  this.theend = function() {
    if (this.x < 0) {
      textSize(50);
      text("Game Over player Spock", 100, 300);
      textSize(40);
      text("press to R for restart", 100, 350);
      noLoop();
    }
    if (this.x > 1000) {
      textSize(50);
      text("Game Over player Kirck", 100, 300);
      textSize(40);
      text("press to R for restart", 100, 350);
      noLoop();
    }
  };
}
