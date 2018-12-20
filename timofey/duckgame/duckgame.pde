PImage  DEBIL, background, duck;

DEBIL hunter = new DEBIL();

ArrayList <Duck> pack = new ArrayList <Duck>(); 

int point = 0;

int end = 0;

void setup() {
  size(1200, 800);
  DEBIL = loadImage("rifle1.png");
  background= loadImage("background.jpg");
  duck = loadImage("duck1.png");
}

void draw() {
  image(background, 0, 0, width, height);
  textSize(40);
  fill(#FC0303);
  text(point, 50, 50);
  hunter.display();
  createPack();
  for ( int i=0; i < pack.size(); i++) {
    Duck d = pack.get(i);
    d.display();
  }
  if (end > 0) {
    fill(#000000);
    rect(0, 0, width, height);
    textSize(50);
    fill(255, 0, 0);
    text("GAME OVER", width/2, height/2);
  }
}
void createPack() {
  if (pack.size() < 4) {
    pack.add(new Duck());
  }
  for ( int i=0; i < pack.size(); i++) {
    Duck d = pack.get(i);
    if (d.x > width) {
      pack.remove(i);
      end ++;
    }
    if(mousePressed == true){
      if(hunter.x > d.x && hunter.x < d.x + d.d && hunter.y > d.y && hunter.y < d.y + d.d){
        pack.remove(i);
        point++;
    }
  }
}
}