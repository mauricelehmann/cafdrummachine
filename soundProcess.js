function playGlobalPattern(){
  if(globalPattern.isPlaying){
      globalPattern.stop();
  }else{
      globalPattern.loop();
  }
}
