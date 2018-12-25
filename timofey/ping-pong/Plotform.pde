class Plotform {
  float x, y, d, h, speedy, speedx;
  Plotform() {
    x = 0;
    y = 0;
    d = 30;
    h = 150;
    speedy = 8;
    speedx = 8;
  }
  void display() {
    fill(#FF0000);
    rect(x, y, d, h);
    Portal();
    move();
    check();
  }
  void move() {
    Portal();
    if (singlePlayer == false) {
      for (int i = 0; i < command_keys.length; i++) {
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
  }

  void check() {
    println("123");
    if (b.x - b.d/2 < x + d && b.y - b.d/2 > y && b.y +b.d/2 < y + h) {
      b.speedx *= -1;
      println("333382");
    }
  }
  void Portal() {
    if (y < 0 - h) {
      p.y = 1000;
    }
    if (y > 1000 + h) {
      p.y = 0;
    }
  }
}