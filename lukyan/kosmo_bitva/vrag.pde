class Enemy {
  float x, y, dv,sp;

  Enemy(float xStart, float yStart) {
    dv=1;
    x=xStart;
    y=yStart;
    sp = 2;
  }

  void display() {
    drawSprite(x, y, chess2);
  }
  void dvizenie() {
    if ( dv==1) {
      x+=sp;
    }
    if ( dv==2) {
      x-=sp;
    } 
    if (dv == 1 && x > 770) {
      dv+=1;
      y+=50;
      x = 760;
 sp+=random(3,5); 
       sp-=random(1,3);
    }
    if (dv == 2 && x <10) {
      dv=1;
      y+=50;
      x=14;
     sp+=random(1,9); 
       sp-=random(1,9);
    }
 
    }
   
    




  void check() {
    for ( int i = 0; i < drops.size(); i++) {
      Bullet r1 = drops.get(i);
      for ( int j = 0; j < emn.size(); j++) {
        Enemy e1 = emn.get(j);
        float d1 = dist(e1.x, e1.y, r1.x, r1.y);
        if ( d1 < 50 ){ emn.remove(j); drops.remove(i);do_pobedi-=1;}
      }
    }
  }
  
  void lost(){

      for ( int j = 0; j < emn.size(); j++) {
        Enemy e1 = emn.get(j);
        float d2 = dist(e1.x, e1.y, g1.x, g1.y);
        if ( d2 < 50 ){   textSize(30);
   fill(#00F029);
  text("Ты застряв в межгалактической пробке!",100,400);
  textSize(15);
     fill(#00F029);
text("Также ты можеш УБИТЬ БАТИНУ ЗАРПЛАТУ!",100,430);
 textSize(12);
     fill(#00F029);
text("Ведь за каждую задоначеную сотку )",100,450);noLoop();
 textSize(30);
     fill(#00F029);
text("МЫ облегчаем игру!",100,480);noLoop();
}
      }
      
 
  
  
   
 
    
    
    
  }


 void i_back_soon(){
 if(x<-10){x = 760; sp+=3;
  }
  







}}
  
  
  
  
