function setButtons(){

  //Buttons setup
  var buttonPlayPattern = createButton("Play pattern")  ;
  buttonPlayPattern.mousePressed(playGlobalPattern);
  buttonPlayPattern.parent("playAll") ;
  buttonPlayPattern.addClass('button');

  //Slider BPM
  BPMslider = createSlider(60, 200, 120, 1);
  BPMslider.style('width', '500px');
  BPMslider.parent("BPMSlider") ;

  //Slider BPM for nap
  napSlider = createSlider(0, 20, 1, 0.1);
  napSlider.style('width', '500px');
  napSlider.parent("playNap") ;

  //Nap button
  var buttonPlayNap = createButton("Play nap") ;
  buttonPlayNap.mousePressed(playNap) ;
  buttonPlayNap.parent("playNap") ;
  buttonPlayNap.addClass('button');

  Instruments['clap'].setInstrumentButtons() ;
  Instruments['snare'].setInstrumentButtons() ;
  Instruments['kick'].setInstrumentButtons() ;
  Instruments['hihat'].setInstrumentButtons() ;

}

function playNap() {

    if(napSample.isPlaying()){
        napSample.stop();
    }else{
        napSample.loop();
    }
}


function valuesListeners(){
    select('#BPMtext').html(BPMslider.value()) ;
}
