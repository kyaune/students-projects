class Platform1 {
  float x, y, speed, d, h, timer;
  Platform1() {
    x = 0;
    y = 400;
    speed = 7;
    d = 30;
    h = 150;
  }

  void display(int scoreX, int scoreY) {
    fill(#059BAA);
    rect(x, y, d, h);
    move();
    textSize(30);
    text(score1, scoreX, scoreY);
  }
  void move() {
    for (int i = 0; i < command_keys.length; i++) {
      if (keys_pressed[i]) {
        if (command_keys[i] == 'w') {
          y -= speed;
        }
        if (command_keys[i] == 's') {
          y += speed;
        }
      }
    }
  }

  void check() {
    timer++;
    if (b.x >= x && b.x <= x + 30 && b.y >= y && b.y <= y + 150) {
      b.ballSpeedX *= -1;
      if (timer >= 20) {
        score1 ++;
        timer = 0;
      }
    }
    if(y > 650) {y = 650;}
    if (y < 0) {y = 0;}
  }
}
