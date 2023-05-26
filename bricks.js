function showBricks() {
    for(let i = 0; i < bricks.length; i++){
        fill(bricks[i].color);
        rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
    }
}

function initBricks() {

    const marginLeft = 20;
    const marginRight = 20;
    const bricksNumber = 7;
    const bricksZone = limitRight - marginLeft -marginRight;
    const bricksDistance = 10;

    const brickWidth = Math.round(bricksZone/bricksNumber) - bricksDistance;

    for (let i = 0; i < bricksNumber; i++) {
        bricks.push({
            color: "white",
            x: marginLeft + i * bricksDistance + i * brickWidth,
            y: 40,
            width: brickWidth,
            height: 15,
         })
    }
}

function bricksCheck(smileFace) {
    for (let i = 0; i < bricks.length; i++) { 
        if (
            smileFace.y + smileFace.ray >= BottomBar.bottomYPosition &&
            smileFace.y + smileFace.ray < limitBottom &&
            smileFace.x + smileFace.ray > mouseX - Math.round(BottomBar.width / 2) &&
            smileFace.x - smileFace.ray < mouseX + Math.round(BottomBar.width / 2)
          ) {
            return -1;
          }
        
    return smileFace.sensY;
}

}