void startingScreen() {
  if (startingScreen == true) {
    background(#1286B2);
    pikachu.resize(200, 200);
    image(pikachu, 300, 300);
    fill(#FEFF31);
  textSize(30);
  text("WELCOME TO THE WORST PING PONG GAME EVER!", 50, 200);
  text("Press 'T' to see a tutorial:)", 100, 600);
  }
  if (keyCode == 'M' && startingScreen == true) {
    startingScreen = false;
    draw2 = true;
  }

  if (keyCode == 'S' && startingScreen == true) {
    startingScreen = false;
    singlePlayer = true;
  }
  
  if (keyCode == 'T' && startingScreen == true) {
    startingScreen = false;
    tutorial = true;
  }
  
  if (keyCode == 'C' && tutorial == true) {
    startingScreen = true;
    tutorial = false;
  }
  
}
