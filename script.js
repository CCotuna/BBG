function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");
  sensS1X = senseSmileyFaceCheckX(moveS1X,  rayS1, sensS1X);
  sensS1Y = senseSmileyFaceCheckY(moveS1Y,  rayS1, sensS1Y);

  sensS2X = senseSmileyFaceCheckX(moveS2X,  rayS2, sensS2X);
  sensS2Y =senseSmileyFaceCheckY(moveS2Y,  rayS2, sensS2Y);

  moveS1X += sensS1X * speedS1;
  moveS1Y += sensS1Y * speedS1;

  moveS2X += sensS2X * speedS2;
  moveS2Y += sensS2Y * speedS2;
  
  smileFaceTimo(moveS1X, moveS1Y, rayS1 * 2);
  smileFaceCalin(moveS2X, moveS2Y, rayS2 *2);
}

