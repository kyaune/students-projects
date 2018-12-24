let x1 = 0;
let x = 20
let ff = 0;
let y = 20;
let d = 5;
let w = 10;
let do_pobedi = 50;
let timer;
let g1 = new Guard ();
let drops = [];
let emn = [];

function setup() {
  createCanvas(800, 800);
  timer = millis();
  army();
}

function draw() {
  background('#0A0A0A');
  win();

  if (ff > 0) {
    noStroke();

    for (let i = 0; i < drops.length; i++) {
      let r = drops[i];
      r.display();
    }

    for (let j = 0; j < emn.length; j++) {
      let e1 = emn[j];
      e1.display();
      e1.dvizenie();
      e1.check();
      e1.lost();
      e1.i_back_soon();
    }

    g1.move();
    g1.idk();
    pressed();
  } else {
    background('#0A0A0A');
    textSize(20);
    fill(255);
    text("spase Пробка:super(cамая межгалактически достоверная игра в мире)!11",70,330);
    text("Press e!!11!",130,360);
    if(keyIsPressed == true) {
      if(key == 'e') {
        ff += 1;
      }
    }
  }
}


function drawSprite(x, y, spriteName) {
  let x0 = x;
  let y0 = y;

  for (let i = 0; i < spriteName.length; i++) {
    for (let j = 0; j < spriteName[i].length; j++) {
      if (spriteName[i][j] == 1) {
        fill('#0A68FA');
      } else {
        fill(255, 255, 255, 0);
      }
      rect(x, y, d, d);
      x += d;
    }
    x = x0;
    y += d;
  }
}



function pressed() {
  if (mouseIsPressed == true) {
    if (millis() - timer > 500) {
      drops.push(new Bullet());
      console.log(`Пуля должна быть добавлена drops.length = ${drops.length}`);
      timer = millis();
    }
  }
}

function army() {
  let x = 10;
  let y = 10;
  let row = 5;
  let cow = 10;
  let xSave = x;
  let ySave = y;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cow; j++) {
      emn.push(new Enemy(x, y));
      x = x + w * 7;
    }
    y = y + w * 6;
    x = xSave;
  }
  x = xSave;
  y = ySave;
}

function win() {
  if (do_pobedi == 0) {
    fill('#F50000');
    textSize(50);
    text ("Пробан закончился:Respect+", 80, 350);
    noLoop();
  }
}

function Bullet() {
  this.x = g1.x;
  this.y = g1.y;

  this.display = function () {
    fill(255);
    drawSprite(this.x, this.y, bullet);
    console.log(`Должна лететь – this.y = ${this.y}`);
    this.y -= 8;
  };
}

function Guard() {
  this.x = 370;
  this.y = 750;
  let speed = 5;

  this.move = function() {
    drawSprite(this.x, this.y, chess);
    if (keyIsPressed == true) {
      if (key == 'a') {
        this.x -= speed;
      }
      if (key == 'd') {
        this.x += speed;
      }
    }
  };

  this.idk = function(){
    if (this.x > 825) {
      this.x =- 30;
    }
    if(this.x < -35) {
      this.x = 820;
    }
  };
}

function Enemy(xStart, yStart) {
  let dv = 1;
  this.x = xStart;
  this.y = yStart;
  let sp = 5;

  this.display = function() {
    drawSprite(this.x, this.y, chess2);
  };

  this.dvizenie = function(){
    if (dv == 1) {
      this.x += sp;
    }
    if (dv == 2) {
      this.x -= sp;
    }
    if (dv == 1 && this.x > 770) {
      dv += 1;
      this.y += 50;
      this.x = 760;
      sp += random(3,5);
      sp -= random(1,3);
    }

    if (dv == 2 && this.x < 10) {
      dv = 1;
      this.y += 50;
      this.x = 14;
      sp += random(1,9);
      sp -= random(1,9);
    }
  };

  this.check = function() {
    for (let i = 0; i < drops.length; i++) {
      let r1 = drops[i];
      for (let j = 0; j < emn.length; j++) {
        let e = emn[j];
        let d1 = dist(e.x, e.y, r1.x, r1.y);
        if ( d1 < 50 ) {
          emn.splice(j, 1);
          drops.splice(i, 1);
          do_pobedi -= 1;
        }
      }
    }
  };

  this.lost = function() {
    for ( let j = 0; j < emn.length; j++) {
      let e1 = emn[j];
      let d2 = dist(e1.x, e1.y, g1.x, g1.y);
      // console.log(`e1.x = ${e1.x}, e1.y = ${e1.y}, g1.x = ${g1.x}, g1.y = ${g1.y}`);
      // let d2 = 100;

      if ( d2 < 50 ) {
        fill(255);
        textSize(30);
        fill('#00F029');
        text("Ты застряв в межгалактической пробке!",100,400);
        textSize(15);
        fill('#00F029');
        text("Также ты можеш УБИТЬ БАТИНУ ЗАРПЛАТУ!",100,430);
        textSize(12);
        fill('#00F029');
        text("Ведь за каждую задоначеную сотку )",100,450);noLoop();
        textSize(30);
        fill('#00F029');
        text("МЫ облегчаем игру!",100,480);noLoop();
      }
    }
  };

  this.i_back_soon = function() {
    if(this.x < -10) {
      this.x = 760;
      sp += 3;
    }
  };
}

let chess = [
  [0, 0, 1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 1, 0, 1, 1, 0, 0]
];

let chess2 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]
];

let chess3 = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
];

let bullet = [
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0],
];
