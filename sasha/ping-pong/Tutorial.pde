void tutorial() {
  if (tutorial == true) {
    startingScreen = false;
    background(0);
    fill(200, 250, 100);
    textSize(20);
    text("Welcome to the tutorial!", 350, 100);
    text("* Press 'S' for singleplayer mode!", 100, 300);
    text("* Press 'M' for multiplayer mode!", 100, 400);
    text("* In silgleplayer, if you will miss - you'll lose!", 100, 500);
    text("* In multiplayer, if you will get 20 points - you'll win!", 100, 600);
    text("* Press 'C' to close tutorial", 100, 700);
  }
}
