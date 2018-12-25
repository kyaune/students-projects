let point = 0;
let end = 0;
let hero, background, duck;
let hunter;
let pack = [];

function setup() {
  createCanvas(640, 480);
  hero = loadImage("rifle2.png");
  duck = loadImage("duck1.png");
  background = loadImage("bg.png");
  // background.resize(width, height);
  hunter = new Hero();
}

function draw () {
  image(background, 0, 0, width, height);
  textSize(40);
  fill('#BF6D21');
  text(point, 50, 50);
  createPack();
  hunter.display();

  for (let i = 0; i < pack.length; i++) {
    pack[i].display();
    if (end > 0) {
      fill('#FFFFFF');
      rect(0, 0, width, height);
      textSize(30);
      fill('#020303');
      textAlign(CENTER);
      text("Wasted", width/2, height/2);
      noLoop();
    }
  }
}

function createPack() {
  if (pack.length < 4) {
    pack.push(new Duck());
  }
  for (let i = 0; i < pack.length; i++) {
    let d = new Duck();
    d = pack[i];
    if (d.x > width) {
      pack.splice(i);
      end++;
    }
    if (mouseIsPressed) {
      if (hunter.x  > d.x && hunter.x < d.x + d.d && hunter.y  > d.y && hunter.y < d.y + d.d) {
        pack.splice(i, 1);
        point++;
      }
    }
  }
}

// Duck
function Duck() {
  this.x = random(0, width / 5);
  this.y = random(0, height-150);
  this.d = 75;
  this.speed = random(1, 3);

  this.display = function() {
    image(duck, this.x, this.y, this.d, this.d);
    this.x += this.speed;
  }
}

// Hero
function Hero() {
  this.x = width/2;
  this.y = height/2;
  this.d = 150;

  this.display = function() {
    image(hero, this.x, this.y, this.d, this.d);
    this.x = mouseX;
    this.y = mouseY;
  };
}
