function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");

  SmileFaceCalin.sensX = senseSmileyFaceCheckX(SmileFaceCalin.x,  SmileFaceCalin.ray, SmileFaceCalin.sensX);
  SmileFaceCalin.sensY = senseSmileyFaceCheckY(SmileFaceCalin.y,  SmileFaceCalin.ray, SmileFaceCalin.sensY);

  SmileFaceTimo.sensX = senseSmileyFaceCheckX(SmileFaceTimo.x,  SmileFaceTimo.ray, SmileFaceTimo.x);
  SmileFaceTimo.sensY = senseSmileyFaceCheckY(SmileFaceTimo.y,  SmileFaceTimo.ray, SmileFaceTimo.y);

  SmileFaceCalin.x += SmileFaceCalin.sensX * SmileFaceCalin.speed;
  SmileFaceCalin.y += SmileFaceCalin.sensY * SmileFaceCalin.speed;

  SmileFaceTimo.x += SmileFaceTimo.sensX * SmileFaceTimo.speed;
  SmileFaceTimo.y += SmileFaceTimo.sensY * SmileFaceTimo.speed;

  smileFaceTimo(SmileFaceTimo, SmileFaceTimo, rayS1 * 2);
  smileFaceCalin(SmileFaceCalin.x, SmileFaceCalin.y, SmileFaceCalin.ray *2);
}

