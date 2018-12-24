class Guard {
  float x, y;

  Guard () {
    x = 370;
    y = 750;
  }

  void move() {
    drawSprite(x, y, chess);

    if (keyPressed == true) {
      if (key == 'a') {
        x -= 5;
      }
      if (key == 'd') {
        x += 5;
      }
    }
  }
  void idk(){
if(x >825){
x=-30;  
}
 if(x <-35){
x=820;  
}   
    
    
    
  }
}
