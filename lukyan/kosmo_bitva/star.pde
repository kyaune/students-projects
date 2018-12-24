class star {
  float w, x, y;
  star() {
    w = random(4, 16);
    x=random(830, 850);
    y = random(20, 780);
  }

  void stars() {
    fill(#FFFFFF);
    ellipse(x, y, w, w); 
    x = x + 5;
    if (x < -20) {
      w = random(4, 16);
      x=random(830, 850);
      y = random(20, 780);
    }
  }
}
