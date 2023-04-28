function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");
  sensS1X = senseSmileyFaceCheckX(moveS1X,  rayS1, sensS1X);
  sensS1Y = senseSmileyFaceCheckY(moveS1Y,  rayS1, sensS1Y);

  SmileFaceCalin.sensX = senseSmileyFaceCheckX(SmileFaceCalin.x,  SmileFaceCalin.ray, SmileFaceCalin.sensX);
  SmileFaceCalin.sensY = senseSmileyFaceCheckY(SmileFaceCalin.y,  SmileFaceCalin.ray, SmileFaceCalin.sensY);

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  SmileFaceCalin.x += SmileFaceCalin.sensX * SmileFaceCalin.speed;
  SmileFaceCalin.y += SmileFaceCalin.sensY * SmileFaceCalin.speed;

  smileFaceTimo(moveS1X, moveS1Y, rayS1 * 2);
  smileFaceCalin(SmileFaceCalin.x, SmileFaceCalin.y, SmileFaceCalin.ray *2);
}

