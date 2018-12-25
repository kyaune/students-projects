Ball b = new Ball();
Plotform p = new Plotform();
Plotform2 p2 = new Plotform2();
PFont font;
import processing.sound.*;
SoundFile file;
PImage Startreck;
boolean singlePlayer = false;

void setup() {
  size(1000, 800);
  Startreck = loadImage("12.jpg");
  font = loadFont("Serif.bold-48.vlw");
  file = new SoundFile(this, "Black.mp3");
  file.play();
}

void draw() {
  image(Startreck, 0, 0, width, height);
  //background(#09EA4E);
  b.display();
  p.display();
  p2.display();
  oneplayer();
}
char[] command_keys = {'w', 'd', 's', 'a', 'p', 'l'};
boolean [] keys_pressed = new boolean[command_keys.length];

void keyPressed() {
  for (int i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = true;
  }
  Esc();
}

void keyReleased() {
  for (int i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = false;
  }
}
void Esc() {
  if (key == 'r') {
    b.x = 400;
    b.y = 400;
    loop();
  }
}
void oneplayer() {
  if (key == 'g') {
    singlePlayer = true;
  }
}