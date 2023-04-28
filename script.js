function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");

  smileFaceCalin.sensX = senseSmileyFaceCheckX(smileFaceCalin.x,  smileFaceCalin.ray, smileFaceCalin.x);
  smileFaceCalin.sensY = senseSmileyFaceCheckY(smileFaceCalin.y,  smileFaceCalin.ray, smileFaceCalin.y);

  SmileFaceTimo.sensX = senseSmileyFaceCheckX(SmileFaceTimo.x,  SmileFaceTimo.ray, SmileFaceTimo.x);
  SmileFaceTimo.sensY = senseSmileyFaceCheckY(SmileFaceTimo.y,  SmileFaceTimo.ray, SmileFaceTimo.y);

  smileFaceCalin.x += smileFaceCalin.sensX * smileFaceCalin.speed;
  smileFaceCalin.y += smileFaceCalin.sensY * smileFaceCalin.speed;

  SmileFaceTimo.x += SmileFaceTimo.sensX * SmileFaceTimo.speed;
  SmileFaceTimo.y += SmileFaceTimo.sensY * SmileFaceTimo.speed;

  smileFaceTimo(SmileFaceTimo, SmileFaceTimo, rayS1 * 2);
  smileFaceCalin(smileFaceCalin.x, smileFaceCalin.y, smileFaceCalin.ray *2);
}

