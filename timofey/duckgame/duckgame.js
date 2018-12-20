//PImage
let hunt, background, duck;
let hunter;
let pack = [];

let point = 0;
let end = 0;

function setup() {
  createCanvas(640, 480);
  hunter = new DEBIL();
  hunt = loadImage("rifle1.png");
  background = loadImage("background.jpg");
  duck = loadImage("duck1.png");
}

function draw() {
  image(background, 0, 0, width, height);
  textSize(40);
  fill('#FC0303');
  text(point, 50, 50);

  hunter.display();
  createPack();

  for (let i = 0; i < pack.length; i++) {
    pack[i].display();
  }
  if (end > 0) {
    fill('#000000');
    rect(0, 0, width, height);
    textSize(50);
    fill(255, 0, 0);
    text("GAME OVER", width / 2, height / 2);
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
      end ++;
    }
    if(mouseIsPressed){
      if(hunter.x > d.x && hunter.x < d.x + d.d && hunter.y > d.y && hunter.y < d.y + d.d){
        pack.splice(i, 1);
        point++;
    }
  }
}
}

//DEBIL class aka hunter
function DEBIL() {
  this.x = width / 2;
  this.y = height / 2;
  this.d = 150;

 this.display = function() {
   image(hunt, this.x, this.y, this.d, this.d);
   this.x = mouseX;
   this.y = mouseY;
  };
}

//Duck
function Duck() {
  this.x = random(-200, 0);
  this.y = random(0,width- 150);
  this.speed = random(1, 5);
  this.d = 80;

  this.display = function() {
    image(duck, this.x, this.y, this.d, this.d);
    this.x += this.speed;
 };
}
