function setup() {
  createCanvas(600, 600);

  initBricks();
}

function draw() {
  background("darkred");

  text(`Level Speed Calin : ${SmileFaceCalin.speed}`, 10, 10)
  text(`Level Speed Timo : ${SmileFaceTimo.speed}`, 10, 30)
  text(`Number of rows: ${numberOfRows}`, 200, 20)

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
  numberOfRows = 1;
  initBricks();

  SmileFaceCalin.x = 300;
  SmileFaceCalin.y = 555;
  SmileFaceCalin.sensX = -1;
  SmileFaceCalin.sensy = -1;
  
   
  SmileFaceTimo.x = 300;
  SmileFaceTimo.y = 555;
  SmileFaceTimo.sensX = -1;
  SmileFaceTimo.sensY = -1;

  SmileFaceTimo.speed =1;
  SmileFaceCalin.speed =1;
  
}

function levelUp(){
  SmileFaceCalin.x = 300;
  SmileFaceTimo.y = 555;
  
  SmileFaceCalin.y = 555; 
  SmileFaceTimo.x = 300;

  SmileFaceCalin.sensX = -1;
  SmileFaceCalin.sensy = -1;
  
  SmileFaceTimo.sensX = 1;
  SmileFaceTimo.sensY = -1;

  if(numberOfRows < 6)
  numberOfRows++;
  initBricks();
}

function levelDown(){
  if(numberOfRows > 1)
  numberOfRows--;
  initBricks();
}
