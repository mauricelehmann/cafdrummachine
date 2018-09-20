function setButtons(){
  //Buttons setup

  var buttonPlayPattern = createButton("Play pattern")  ;
  buttonPlayPattern.mousePressed(playGlobalPattern);
  buttonPlayPattern.parent("playAll") ;
  //Slider BPM
  slider = createSlider(60, 200, 120, 1);
  slider.style('width', '500px');
  slider.parent("BPMSlider") ;

  Instruments['clap'].setSequenceButtons() ;
  Instruments['clap'].setPitchButtons() ;
  Instruments['snare'].setSequenceButtons() ;
  Instruments['snare'].setPitchButtons() ;
  Instruments['kick'].setSequenceButtons() ;
  Instruments['kick'].setPitchButtons() ;
  Instruments['hihat'].setSequenceButtons() ;
  Instruments['hihat'].setPitchButtons() ;

}

function showPattern(){
  //Clear the html element, otherwise it will be filled in loop
  document.getElementById('pattern').innerHTML = '' ;
  for( index in Instruments ){
    document.getElementById('pattern').innerHTML += JSON.stringify(Instruments[index].pattern) + '<br>';
  }
}
