function setup() {
  createCanvas(600, 600);

  initBricks();
}

function draw() {
  background("darkred");

  text(`Level Speed Smileface: ${SmileFaceCalin.speed}`, 10, 10)
  text(`Level Speed Smileface : ${SmileFaceTimo.speed}`, 10, 30)

  SmileFaceCalin.sensX = senseSmileyFaceCheckX(SmileFaceCalin.x,  SmileFaceCalin.ray, SmileFaceCalin.sensX);
  SmileFaceCalin.sensY = senseSmileyFaceCheckY(SmileFaceCalin.y,  SmileFaceCalin.ray, SmileFaceCalin.sensY);
  SmileFaceCalin.sensY = bottomBarChecks(SmileFaceCalin);
  SmileFaceCalin.sensY = bricksCheck(SmileFaceCalin);

  SmileFaceTimo.sensX = senseSmileyFaceCheckX(SmileFaceTimo.x,  SmileFaceTimo.ray, SmileFaceTimo.sensX);
  SmileFaceTimo.sensY = senseSmileyFaceCheckY(SmileFaceTimo.y,  SmileFaceTimo.ray, SmileFaceTimo.sensY);
  SmileFaceTimo.sensY = bottomBarChecks(SmileFaceTimo);
  SmileFaceTimo.sensY = bricksCheck(SmileFaceTimo);
  

  SmileFaceCalin.x += SmileFaceCalin.sensX * SmileFaceCalin.speed;
  SmileFaceCalin.y += SmileFaceCalin.sensY * SmileFaceCalin.speed;

  SmileFaceTimo.x += SmileFaceTimo.sensX * SmileFaceTimo.speed;
  SmileFaceTimo.y += SmileFaceTimo.sensY * SmileFaceTimo.speed;

  smileFaceTimo(SmileFaceTimo.x, SmileFaceTimo.y, SmileFaceTimo.ray * 2);
  smileFaceCalin(SmileFaceCalin.x, SmileFaceCalin.y, SmileFaceCalin.ray *2);

  bottomBar();
  showBricks();
}

function reset(){
  initBricks();

  SmileFaceCalin.x = 300;
  SmileFaceTimo.y = 300;
  SmileFaceCalin.y = 300; 
  SmileFaceTimo.x = 300;
  
  bottomBar();
  showBricks();
}

function levelUp(){
  SmileFaceCalin.speed++;
  SmileFaceTimo.speed++;
}

function levelDown(){
  SmileFaceCalin.speed--;
  SmileFaceTimo.speed--;
}
