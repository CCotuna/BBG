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
        if(bricks[i].x <= smileFace.x + smileFace.ray && 
           bricks[i].x + bricks[i].width >= smileFace.x - smileFace.ray &&
           bricks[i].y <= smileFace.y -smileFace.ray &&
           bricks[i].y + bricks[i].height >= smileFace.y - smileFace.ray)
        {
            return 1;
        }
    }
    return smileFace.sensY;
}

