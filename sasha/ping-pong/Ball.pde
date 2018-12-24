class Ball {
  float d, x, y, ballSpeedX, ballSpeedY, timer = 0;
  Ball() {
    d = 30; 
    x = 350;
    y = 350;
    ballSpeedX = 11;
    ballSpeedY = 7;
  }
  void display() {
    fill(#E86E1C);

    ellipse(x, y, d, d);
    move();
  }
  void move() {
    timer++;
    for (int i = 0; i < command_keys.length; i++) {
    }
    x += ballSpeedX;
    y += ballSpeedY;
    if (y + d/2 < 0) {
      ballSpeedY *= -1;
    }
    if (y + d/2 > height) {
      ballSpeedY *= -1;
    }
    if (x + d/2 > width && timer >= 30) {
      ballSpeedX *= -1;
      if(score2 > 0) {
      score2 -= 1;}
      timer = 0;
    }
    if (x + d/2 < 0 && timer >= 30) {
      ballSpeedX *= -1;
      if(score1 > 0) {
      score1 -= 1;}
      timer = 0;
    }
  }
}
