PImage pikachu;
char[] command_keys = {'w', 's', 'i', 'k'};
boolean startingScreen = true, draw2 = false, singlePlayer = false, multiPlayer = false, tutorial = false;
boolean[] keys_pressed = new boolean [command_keys.length];
int score1 = 0, score2 = 0;
Ball b = new Ball();
Platform1 p1 = new Platform1();
Platform2 p2 = new Platform2();
void setup() {
  size(800, 800);
  pikachu = loadImage("pikachu.png");
}

void draw() {
  println(tutorial);
  draw2();
  startingScreen();
  singlePlayer();
  tutorial();
}

void keyPressed() {
  for (int i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = true;
  }
}

void keyReleased() {
  for (int i = 0; i < command_keys.length; i++) {
    if (key == command_keys[i]) keys_pressed[i] = false;
  }
}
