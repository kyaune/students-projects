void singlePlayer() {
  if (singlePlayer == true) {
    startingScreen = false;
    background(#F7F748);
    p2.display(2000, 2000);
    b.display();
    p1.display(100, 780);
    p1.check();
    p1.move();
    p2.check();
    p2.y2 = 0;
    p2.x2 = 750;
    p2.d = 50;
    p2.h = 900;
    if (b.x <= 0) {
      textSize(50);
      fill(255, 100, 100);
      text("GAME OVER!", 250, 400);
      noLoop();
    }
  }
}
