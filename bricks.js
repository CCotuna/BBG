function showBricks() {
    for(let i = 0; i < bricks.length; i++){
        if(!bricks[i].hit){
        fill(bricks[i].color);
        }
        else{
            fill("yellow");
        }
        rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);


        // if(!bricks[i].hit){
        //     fill(bricks[i].color);
        //     rect(bricks[i].x, bricks[i].y, bricks[i].width, bricks[i].height);
        //     }
    }
}

function initBricks() {

    const marginLeft = 20;
    const marginRight = 20;
    const bricksNumber = 10;
    const bricksZone = limitRight - marginLeft -marginRight;
    const bricksDistance = 10;

    const brickWidth = Math.round(bricksZone/bricksNumber) - bricksDistance;

for(let k = 1; k <= 3; k++){

    for (let i = 0; i < bricksNumber; i++) {
        bricks.push({
            color: "white",
            x: marginLeft + i * bricksDistance + i * brickWidth,
            y: k*40,
            width: brickWidth,
            height: 15,
            hit: 0
         })
    }

}

}

function bricksCheck(smileFace) {
    for (let i = 0; i < bricks.length; i++) { 
        if(bricks[i].x <= smileFace.x + smileFace.ray && 
           bricks[i].x + bricks[i].width >= smileFace.x - smileFace.ray &&
           bricks[i].y <= smileFace.y + smileFace.ray &&
           bricks[i].y + bricks[i].height >= smileFace.y - smileFace.ray &&
           !bricks[i].hit)
        {
            bricks[i].hit = true;
            return 1;
        }
    }
    return smileFace.sensY;
}

