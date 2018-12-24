class Bullet {
  float x, y;
  
  Bullet() {
    x =g1.x;
    y = g1.y;
  }
  
  void display() {
    drawSprite(x, y, bullet);
    y-=8;
    

    }
  }
