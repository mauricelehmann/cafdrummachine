function playGlobalPattern(){
  if(globalPattern.isPlaying){
      globalPattern.stop();
  }else{
      globalPattern.loop();
  }
}

function changeDelay( instrument, delayTime , feedback ) {
    //delay.process(Instruments[instrument].sample, delayTime, feedback, 2300);
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
