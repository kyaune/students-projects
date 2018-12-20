var car1, car2, car3, car4, car5, car6, car7, car8;
var hero;
var l1, l2, l3, l4;
var tree1, tree2, tree3, tree4, tree5, tree6, tree7, tree8;
var t1, t2, t3, t4, t5, t6, t7, t8;

function setup () {
  createCanvas(1200, 800);
//    background('#E3C630');
  car1 = new Cars();
  car2 = new Cars();
  car3 = new Cars();
  car4 = new Cars();
  car5 = new Cars();
  car6 = new Cars();
  car7 = new Cars();
  car8 = new Cars();
  hero = new HeroCar();
  l1 = new Line(0);
  l2 = new Line(1);
  l3 = new Line(2);
  l4 = new Line(3);
  tree1 = new TreesUp();
  tree2 = new TreesUp();
  tree3 = new TreesUp();
  tree4 = new TreesUp();
  tree5 = new TreesUp();
  tree6 = new TreesUp();
  tree7 = new TreesUp();
  tree8 = new TreesUp();
  t1 = new TreesDown();
  t2 = new TreesDown();
  t3 = new TreesDown();
  t4 = new TreesDown();
  t5 = new TreesDown();
  t6 = new TreesDown();
  t7 = new TreesDown();
  t8 = new TreesDown();
}

function draw () {
background('#E3C630');
fill('#9D9987');
  rect(0, 200, 1200, 400);
  
  l1.display();
  l1.move();
  l1.transport();
  
  l2.display();
  l2.move();
  l2.transport();
  
  l3.display();
  l3.move();
  l3.transport();
  
  l4.display();
  l4.move();
  l4.transport();
  
  t2.display();
  t2.move();
  t2.reload();
  
  t3.display();
  t3.move();
  t3.reload();
  
  t4.display();
  t4.move();
  t4.reload();
  
  t5.display();
  t5.move();
  t5.reload();
  
  t6.display();
  t6.move();
  t6.reload();
  
  t7.display();
  t7.move();
  t7.reload();
  
  t8.display();
  t8.move();
  t8.reload();
  
  tree1.display();
  tree1.move();
  tree1.reload();
  
  tree2.display();
  tree2.move();
  tree2.reload();
  
  tree3.display();
  tree3.move();
  tree3.reload();
  
  tree4.display();
  tree4.move();
  tree4.reload();
  
  tree5.display();
  tree5.move();
  tree5.reload();
  
  tree6.display();
  tree6.move();
  tree6.reload();
  
  tree7.display();
  tree7.move();
  tree7.reload();
  
  tree8.display();
  tree8.move();
  tree8.reload();
  
  car1.crash();
  car1.display();
  car1.move();
  car1.reload();
  
  car2.crash();
  car2.display();
  car2.move();
  car2.reload();
  
  car3.crash();
  car3.display();
  car3.move();
  car3.reload();
  
  car4.crash();
  car4.display();
  car4.move();
  car4.reload();
  
  car5.crash();
  car5.display();
  car5.move();
  car5.reload();
  
  car6.crash();
  car6.display();
  car6.move();
  car6.reload();
  
  car7.crash();
  car7.display();
  car7.move();
  car7.reload();
  
  car8.crash();
  car8.display();
  car8.move();
  car8.reload();
  
  hero.display();
//  hero.control();
  hero.transport();
}

function keyPressed() {
  if (keyCode == ENTER) {
     loop();
    car1 = new Cars();
  car2 = new Cars();
  car3 = new Cars();
  car4 = new Cars();
  car5 = new Cars();
  car6 = new Cars();
  car7 = new Cars();
  car8 = new Cars();
  hero = new HeroCar();
  }
              if (key == 'w') {
                hero.y = hero.y - hero.speed;
              }
              if (key == 's') {
                hero.y = hero.y + hero.speed;
              }
              if (key == 'd') {
                hero.x = hero.x + hero.speed;
              }
              if (key == 'a') {
                hero.x = hero.x - hero.speed;
              }
}

function Health() {
    
    
  this.x = 20;
  this.y = 70;
  this.w = 300;
  this.h = 70;
  this.r = 0;
  this.g = 255;
  this.b = 0;
  
  
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
    
    if ((hero.y + 20 <= 200)||(hero.y + 20 >= 600)) {
      this.w = this.w-5;
    }
  }
}
function HeroCar() {
  

    this.h = 20;
    this.w = 80;
    this.x = random(0, 100);
    this.y = random(200, 300);
    this.speed = 27;
  
  
    this.display = function() {
    fill('#03FF00');
    rect(this.x, this.y, this.w, this.h);
    fill('#00FF97');
    rect(this.x+10, this.y-20, 60, 20);
    fill(0);
    ellipse(this.x+15, this.y+20, 20, 20);
    ellipse(this.x+65, this.y+20, 20, 20);
    this.distance = this.distance + this.speed;
    fill(0);
    textSize(50);
    text("Current distance:"+ this.distance, 400, 70);
  };
  
  this.transport = function() {
    if (this.x > width) {
      this.x = -80;
    }
    if (this.x < -80) {
      this.x = 1202;
    }
  };
}
function Cars() {
     this.x = random(1200, 2200);
     this.y = random(200, 600);
     this.speed = random(10, 12);
     this.r = random(0, 255);
     this.g = random(0, 255);
     this.b = random(0, 255);
   
   
     this.display = function() {
     fill(this.r, this.g, this.b);
     rect(this.x, this.y, 80, 20);
     fill(this.r/2, this.g/2, this.b/2);
     rect(this.x+10, this.y-20, 60, 20);
     fill(0);
     ellipse(this.x+15, this.y+20, 20, 20);
     ellipse(this.x+65, this.y+20, 20, 20);
     
   };
   
   this.move = function() {
    this.x = this.x - this.speed;
   };
   
   this.reload = function() {
     if (this.x < -60) {
      this.x = random(1200, 2200);
      this.y = random(200, 600);
      this.r = random(0, 255);
      this.g = random(0, 255);
      this.b = random(0, 255);
      this.speed = random(7, 12);
     }
   };
   
   this.crash = function() {
     if ((hero.x + hero.w - 20 >= this.x) && (hero.x <= this.x+80) && (hero.y + hero.h >= this.y-20) && (hero.y <= this.y+20)) {
       fill('#FF0000');
       textSize(100);
       text("You lose", 350, 450);
       noLoop();
     }
   };
 }

   function Line(num) {
  
  
    this.w = 200;
    this.x = 150*num + num*this.w;
    this.speed = 12;
    this.h = 20;
  
  
    this.display = function() {
    fill(255);
    rect(this.x, 400-this.h/2, this.w, this.h);
  };
  
  this.move = function() {
    this.x = this.x - this.speed;
  };
  
  this.transport = function() {
    if(this.x < -this.w) {
      this.x = 1200;
    }
  };
}
function TreesUp() {

    this.x = random(1200, 2500);
    this.y = random(50, 140);
    this.d = random(50, 70);
    this.speed = 12;
    this.w = this.d/3;
    this.h = this.d;
  
    this.display = function() {
    fill('#BC6100');
    rect(this.x, this.y, this.w, this.h);
    fill('#26AF02');
    ellipse(this.x+this.w/2, this.y, this.d, this.d);
  };
  
  this.move = function() {
    this.x = this.x - this.speed;
  };
  
  this.reload = function() {
    if (this.x < 0-this.d/2) {
      this.x = random(1200, 2500);
      this.y = random(0, 140);
      this.d = random(50, 70);
      this.w = this.d/3;
      this.h = this.d;
    }
  };
}
function TreesDown() {

    this.x = random(1200, 2500);
    this.y = random(650, 750);
    this.d = random(50, 70);
    this.speed = 12;
    this.w = this.d/3;
    this.h = this.d;
  
  
    this.display = function() {
    fill('#BC6100');
    rect(this.x, this.y, this.w, this.h);
    fill('#26AF02');
    ellipse(this.x+this.w/2, this.y, this.d, this.d);
  };
  
  this.move = function() {
    this.x = this.x - this.speed;
  }
  
  this.reload = function() {
    if (this.x < 0-this.d/2) {
      this.x = random(1200, 2500);
      this.y = random(650, 750);
      this.d = random(50, 70);
      this.w = this.d/3;
      this.h = this.d;
    }
  };
}