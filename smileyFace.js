function smileFaceTimo(x, y, d) {
    //skin
    fill("yellow");
    circle(x, y, d);
  
    //right eye
    fill("black");
    circle(x + d*0.20, y - d*0.10, d*0.15);
    fill("#000000");
    circle(x + d*0.20, y - d*0.10, d*0.3);
  
    //left eye
    fill("black");
    circle(x - d*0.20, y - d*0.10, d*0.15);
    fill("#000000");
    circle(x - d*0.20, y - d*0.10, d*0.3);
  
    //mouth
    noFill();
    arc(x, y +d*0.30 ,d*0.40, d*0.10, 0, Math.PI);
  }
  
  
  function smileFaceCalin(x, y, d) {
      //skin
      fill("red");
      circle(x, y, d);
    
      //right eye
      fill("black");
      circle(x + d*0.20, y - d*0.10, d*0.15);
      fill("#000000");
      circle(x + d*0.20, y - d*0.10, d*0.3);
    
      //left eye
      fill("black");
      circle(x - d*0.20, y - d*0.10, d*0.15);
      fill("#000000");
      circle(x - d*0.20, y - d*0.10, d*0.3);
    
      //mouth
      noFill();
      arc(x, y + d*0.30 , d*0.40, d*0.1, 0, Math.PI);
    }

function senseSmileyFaceCheckY(y, ray, s) {
      //verificare limita TOP
      if (y < limitTop + ray) {
         return 1; //schimbare de sens
      }
      //verificare limmita Bottom 
      if (y > limitBottom - ray) {
        return -1; //schimbare de sens
      }
      
      return s;
}


function senseSmileyFaceCheckX(x, ray, s) {
 //verificare limmita Left 
 if (x < limitLeft + ray) {
    return 1; //schimbare de sens
  }
  //verificare limmita Right 
  if (x > limitRight - ray) {
    return -1; //schimbare de sens
}
return s;

}

