function playGlobalPattern(){
  if(globalPattern.isPlaying){
      globalPattern.stop();
  }else{
      globalPattern.loop();
  }
}


function keyPressed() {
  if (keyCode == 32) {
      playGlobalPattern() ;
    }
}

function setEffects(){

}

function reverbProcess(){

}
