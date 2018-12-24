int x1=0;
int x = 20,ff=0;
int y = 20;
int d = 5;
float w=10;
int do_pobedi=50;
Guard g1;
star[] galaxy = new star[30];

Enemy e1;
Bullet r1;
star h1;
ArrayList<Bullet>drops;
int timer;
ArrayList<Enemy>emn;

void setup() {

  size(800, 800);

  drops = new ArrayList<Bullet>();
  emn = new ArrayList<Enemy>();
  
  g1 = new Guard ();
  army();
  r1 = new Bullet();
  timer = millis();
  for(int e = 0; e < galaxy.length; e++){
    galaxy[e] = new star();
  }}






void draw() {
 background(#0A0A0A);
  win();
if(ff >0){
  noStroke();
  
  for (int i = 0; i<drops.size(); i++) {
    Bullet r1=drops.get(i);
    r1.display();
  }
  for (int j = 0; j<emn.size(); j++) {
    Enemy e1=emn.get(j); 
    e1.display();
    e1.dvizenie();e1.check();e1.lost();e1.i_back_soon();}
 for(int e = 0; e < galaxy.length; e++){
    galaxy[e].stars();}

  g1.move();
  g1.idk();
  Pressed();
  
}
else{background(#0A0A0A);textSize(20);text("spase Пробка:super(cамая межгалактически достоверная игра в мире)!11",70,330);text("Press e!!11!",130,360);if(keyPressed == true){if(key == 'e'){ff+=1;}}}}




void drawSprite(float x, float y, int[][] spriteName) {
  float x0 = x;
  float y0 = y;
  for (int i = 0; i < spriteName.length; i++) {
    for (int j = 0; j < spriteName[i].length; j++) {
      if (spriteName[i][j] == 1) {
        fill(#0A68FA);
      } else {
        fill(255, 255, 255, 0);
      }
      rect(x, y, d, d);
      x += d;
    }
    x = x0;
    y += d;
  }
}



void Pressed() {
  if (mousePressed == true) {

    if (millis() - timer > 500) {
      drops.add(new Bullet());
      timer = millis();
    }
  }
}

void army() {
  float x, y;
  int row, cow;
  x=10;
  y=10;
  row=5;
  cow = 10;
  float xSave = x;
  float ySave = y;
  for (int i = 0; i <row; i++) {
    for (int j = 0; j < cow; j++) {
      emn.add(new Enemy(x, y));
      x=x+w*7;
    }
    y=y+w*6;
    x = xSave;
  }
  x = xSave;
  y =ySave;
}

void win(){
if(do_pobedi==0){
  fill(#F50000);
  textSize(50);
  
text ("Пробан закончился:Respect+",80,350);
noLoop();  
  
  
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
