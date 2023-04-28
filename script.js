function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");
  sensS1X = senseSmileyFaceCheckX(moveS1X,  rayS1, sensS1X);
  sensS1Y = senseSmileyFaceCheckY(moveS1Y,  rayS1, sensS1Y);

  smileFaceCalin.sensX = senseSmileyFaceCheckX(smileFaceCalin.x,  smileFaceCalin.ray, smileFaceCalin.x);
  smileFaceCalin.sensY = senseSmileyFaceCheckY(smileFaceCalin.y,  smileFaceCalin.ray, smileFaceCalin.y);

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  smileFaceCalin.x += smileFaceCalin.sensX * smileFaceCalin.speed;
  smileFaceCalin.y += smileFaceCalin.sensY * smileFaceCalin.speed;

  smileFaceTimo(moveS1X, moveS1Y, rayS1 * 2);
  smileFaceCalin(smileFaceCalin.x, smileFaceCalin.y, smileFaceCalin.ray *2);
}

