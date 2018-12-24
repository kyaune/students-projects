void draw2() {
  if (draw2 == true) {
    background(#656889);
    b.display();
    p1.display(350, 200);
    p1.check();
    p2.check();
    p2.display(390, 200);
    p1.move();
    p2.move();
    fill(255);
    if(score1 == 5) {text ("Player 1 wins!", 300, 400); noLoop();}
    if(score2 == 20) {text ("Player 2 wins!", 300, 400); noLoop();}
  }
}
