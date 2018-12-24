class Platform2 {
  float x2, y2, speed, d, h, timer;
  Platform2() {
    x2 = 770;
    y2 = 400;
    speed = 7;
    d = 30;
    h = 150;
  }
  void display(int scoreX, int scoreY) {
    fill(#DE1B4C);
    rect(x2, y2, d, h);
    move();
    textSize(30);
    text("-  " + score2, scoreX, scoreY);
  }
  void move() {
    for (int i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i]) {
        if (command_keys[i] == 'i') {
          y2 -= speed;
        }
        if (command_keys[i] == 'k') {
          y2 += speed;
        }
      }
    }
  }
  void check() {
    timer++;
    if (b.x >= x2 && b.x <= x2 + d) {
      if (b.y >= y2 && b.y <= y2 + h) {
        b.ballSpeedX = - b.ballSpeedX;
        if (timer >= 40) {
          score2 ++;
          timer = 0;
        }
      }
    }
    if(y2 > 650) {y2 = 650;}
    if (y2 < 0) {y2 = 0;}
  }
}
