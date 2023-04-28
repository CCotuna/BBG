function setup() {
  createCanvas(600, 600);

  initBricks();
}

function draw() {
  background("darkred");

  SmileFaceCalin.sensX = senseSmileyFaceCheckX(SmileFaceCalin.x,  SmileFaceCalin.ray, SmileFaceCalin.sensX);
  SmileFaceCalin.sensY = senseSmileyFaceCheckY(SmileFaceCalin.y,  SmileFaceCalin.ray, SmileFaceCalin.sensY);
  SmileFaceCalin.sensY = bottomBarChecks(SmileFaceCalin);
  SmileFaceCalin.sensY = bricksCheck(SmileFaceCalin);

  SmileFaceTimo.sensX = senseSmileyFaceCheckX(SmileFaceTimo.x,  SmileFaceTimo.ray, SmileFaceTimo.sensX);
  SmileFaceTimo.sensY = senseSmileyFaceCheckY(SmileFaceTimo.y,  SmileFaceTimo.ray, SmileFaceTimo.sensY);
  SmileFaceTimo.sensY = bottomBarChecks(SmileFaceTimo);
  

  SmileFaceCalin.x += SmileFaceCalin.sensX * SmileFaceCalin.speed;
  SmileFaceCalin.y += SmileFaceCalin.sensY * SmileFaceCalin.speed;

  SmileFaceTimo.x += SmileFaceTimo.sensX * SmileFaceTimo.speed;
  SmileFaceTimo.y += SmileFaceTimo.sensY * SmileFaceTimo.speed;

  smileFaceTimo(SmileFaceTimo.x, SmileFaceTimo.y, SmileFaceTimo.ray * 2);
  smileFaceCalin(SmileFaceCalin.x, SmileFaceCalin.y, SmileFaceCalin.ray *2);

  bottomBar();
  showBricks();
}

