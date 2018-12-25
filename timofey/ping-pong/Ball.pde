class Ball {
  float x, y, d, speedy, speedx;
  Ball() {
    x = 400;
    y = 400;
    d = 50;
    speedy = 4;
    speedx = -4;
  }
  void display() {
    fill(#FFFFFF);
    ellipse(x, y, d, d);
    move();
    theend();
  }
  void move() {
    y += speedy;
    if ( y + d/2 < 0) {
      speedy *= -1;
    }

    if (y + d/2 >height) {
      speedy *= -1;
    }
    x += speedx;
    //if( y + d/2 < 0){
    //  speedx *= -1;
  }
  void theend() {
    if (x < 0) {
      textFont(font);
      textSize(50);
      text("Game Over player Spock", 100, 300);
      textSize(40);
      text("press to R for restart", 100, 350);
      noLoop();
    }
    if (x > 1000) {
      textFont(font);
      textSize(50);
      text("Game Over player Kirck", 100, 300);
      textSize(40);
      text("press to R for restart", 100, 350);
      noLoop();
    }
  }
}