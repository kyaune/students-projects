class DEBIL {
  float x, y, d;
  
  DEBIL(){
    x = width/2;
    y = height/2;
    d = 150;
 }
 void display(){
  image(DEBIL, x, y,d,d);
  x = mouseX;
  y = mouseY;
 }
}