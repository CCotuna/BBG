function bottomBar() {
  //color
  fill("white");
  rect(
    mouseX - Math.round(BottomBar.width / 2),
    BottomBar.bottomYPosition,
    BottomBar.width,
    BottomBar.height
  );
}

function bottomBarChecks(smileFace) {
   if(smileFace.y + smileFace.ray >= BottomBar.bottomYPosition &&
    smileFace.y < limitBottom &&
    smileFace.x + smileFace.ray > mouseX - Math.round(BottomBar.width / 2) &&
    smileFace.x - smileFace.ray < mouseX + Math.round(BottomBar.width / 2 )){
        return -1;
    }
    return smileFace.sensY;
    
}