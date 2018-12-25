class Plotform2 {
  float x, y, d, h, speedy, speedx;
  Plotform2() {
    x = 970;
    y = 0;
    d = 30;
    h = 150;
    speedy = 6;
    speedx = 6;
  }
  void display() {
    fill(#FFFF00);
    rect(x, y, d, h);
    Portal();
    move();
    check();
  }
  void move() {
    for (int i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i] == true) {
        if (command_keys[i] == 'p') {
          y -= speedy;
        }
        if (command_keys[i] == 'l') {
          y += speedy;
        }
      }
    }
  }

  void check() {
    println("123");
    if (b.x + b.d/2 > x && b.y - b.d/2 > y && b.y +b.d/2 < y + h) {
      b.speedx *= -1;
      println("333382");
    }
  }
  void Portal() {
    if (y < 0 - h) {
      p2.y = 1000;
    }
    if (y > 1000 + h) {
      p2.y = 0;
    }
  }
}