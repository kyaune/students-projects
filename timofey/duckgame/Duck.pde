class Duck {
    float x, y, d, speed;

    Duck(){
    x = random(-200, 0);
    y = random(0,width- 150);
    speed = random(5,15);
    d = 80;
 }
 void display(){
  image(duck, x, y,d,d);
  x +=speed;
 }
}