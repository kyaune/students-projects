var bullets = [];
var enemies = [];
var s1 =[];
var n1 = new MyShip();
var pixelSize = 4;
var state = 0;


var ship = [
  [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1], 
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1], 
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1], 
  [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1], 
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1], 
  [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1], 
  [1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1], 
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1], 
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]
];
var enemyShip =[
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0], 
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1], 
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1], 
  [1, 0, 1, 0, 1, 1, 0, 1, 0, 1], 
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0], 
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0], 
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0]
];
var shot =[
  [0, 0, 1, 0, 0], 
  [0, 1, 0, 1, 0], 
  [1, 0, 5, 0, 1], 
  [0, 1, 0, 1, 0], 
  [0, 0, 1, 0, 0], 
];

function setup() {
  createCanvas(800, 800);
  noStroke();
  create_army();
  for (var i = 0; i < 500; i++)
  { 
    s1.push(new Star());
  }
//    n1 = new MyShip();
}

function draw() {
  if (state == 0) {
    state0();
    
  } else {
    background(0);
    n1.display();
    for (var i = 0; i < bullets.length; i ++)
    {
      bullets[i].display();
    }
    for (var i = 0; i < enemies.length; i ++)
    {
      enemies[i].display();
    }
    for (var i = 0; i < 500; i++)
    { 
      s1[i].display();
    }
      check();
  }
}




function drawSprite(x, y, spriteName) {
  var x0 = x;
  var y0 = y;
    
  for (var i = 0; i < spriteName.length; i ++) {
    for (var j = 0; j < spriteName[i].length; j ++) {
      if (spriteName[i][j] == 0) {
        fill(0);
      }
      if (spriteName[i][j] == 1) {
        fill('#00FF5B');
      }
      if (spriteName[i][j] == 3) {
        fill('#FF0303');
      }
      if (spriteName[i][j] == 4) {
        fill('#E9FF03');
      }
      if (spriteName[i][j] == 5) {
        fill(255);
      }
      if (spriteName[i][j] == 2) {
        fill('#FF0000');
      }
      rect(x, y, pixelSize, pixelSize);
      x += pixelSize;
    }
    x = x0;
    y += pixelSize;
  }
  y = y0;
}
function create_army() {
  var row = 4;
  var col = 5;
  var xs = 50;
  var ys = 50;
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      enemies.push(new Enemy(xs, ys));
      xs = xs + 60;
    }
    xs -= 60 * col;
    ys += 60;
  }
}
function win() {    
  background (0);
  fill('#00FF5B');
  textSize(50);
  text("SO EAZY", 350, 350);
  noLoop();
}
function state0() {
  star2();
  background(0);
  fill('#00FF5B');
  textSize(30);
  text("press 'q' to start", 300, 400);
  textSize(30);
  text("Use w a s d to control ypur ship", 200, 500);
  textSize(30);
  text("Press space to shoot", 200, 600);
  textSize(45);
  text("SPACE INVAIDORS", 170, 150);
  textSize(14);
  text("versia sashik", 700, 760);
}

function check() {
    for (var i =0; i < bullets.length; i++) {
      for (var j = 0; j < enemies.length; j++) {
        if (enemies[j].y > 800) {
          Enemy.lost();
        }
          var a = bullets[i].x - enemies[j].x;
          var b = bullets[i].y - enemies[j].y;
          a *= a;
          b *= b;
          var dist = Math.sqrt(a + b);
        if (dist < Math.sqrt(2)*50) {
          enemies.splice(j, 1);
          bullets.splice(i, 1);
            break;
        }
          if (enemies.length == 0) {
            win();
          }
        }
      } 
}
function star2() {

  var x, y, d, speed;
  speed = random(2, 10);
  d = random(1, 3);
  x = width + 10;
  y = random(0, 800);
  fill(255);
  ellipse(x, y, d, d);
  x = x - speed;
  if (x <0)
  {
    x = 810;
  }
}
//Класс твоего корабля, отвечает за движение
function MyShip() {
   this.timer = 0;
   this.x = 600;
   this.y = 400;
  //Движение корабля
      

  this.display = function() {
    drawSprite(this.x, this.y, ship);
//    this.move();
    this.timer = this.timer + 1;  
  }
  
}
function Enemy(xs, ys) {
   this.x = xs;
   this.y = ys;
    this.speed = 5;
  
  this.display = function() {
    drawSprite(this.x, this.y, enemyShip);
    this.move();
  };
  this.move = function() {
    if (this.x > width || this.x < 0) 
    {

      this.y += 70;
      this.speed = -1 * this.speed;
    }
    this.x = this.x + this.speed;
  };
  this.lost = function() {
    fill('#00FF5B');
    textSize(50);
    text("Alians has destroyed people", 50, 300);
    noLoop();
  }
}

function Bullets(xc, yc) {
  
    this.x = xc;
    this.y = yc;
    this.speed = 20;
    
 this.display = function() {
    drawSprite(this.x + 16, this.y, shot);
    this.y -= this.speed;
     this.check();
  };
    this.check = function(){
        for(let i = 0; i < bullets.length; i++){
            if(bullets[i].y < 0){
                bullets.splice(i, 1);
            }
        }
    }
}

function Star() {
  
    this.speed = random(2, 10);
    this.d = random(1, 3);
    this.x = width + 10;
    this.y = random(0, 800);

  this.display = function() {
    fill(255);
    ellipse(this.x, this.y, this.d, this.d);
    this.x = this.x - this.speed;
    if (this.x <0)
    {
      this.x = 810;
    }
  }
}

function keyPressed(){
    if (key == 'q') {
        state = 1;
      }
    if (key == 'w') {
        n1.y = n1.y - 12;       
      }
    if (key == 'a') {
        n1.x -= 12;
      }
    if (key == 's') {
        n1.y += 12;
      }
    if (key == 'd') {
        n1.x += 12;
      }
    if (key == ' ' ) {
        bullets.push(new Bullets(n1.x, n1.y));
        n1.timer = 0;
      }
}