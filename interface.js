function setButtons(){

  //Buttons setup
  var buttonPlayPattern = createButton("Play pattern")  ;
  buttonPlayPattern.mousePressed(playGlobalPattern);
  buttonPlayPattern.parent("playAll") ;
  buttonPlayPattern.addClass('button');

  //Slider BPM
  slider = createSlider(60, 200, 120, 1);
  slider.style('width', '500px');
  slider.parent("BPMSlider") ;


  Instruments['clap'].setInstrumentButtons() ;
  Instruments['snare'].setInstrumentButtons() ;
  Instruments['kick'].setInstrumentButtons() ;
  Instruments['hihat'].setInstrumentButtons() ;

}


//TODO : Delete ?
function showPattern(){
  //Clear the html element, otherwise it will be filled in loop
  document.getElementById('pattern').innerHTML = '' ;
  for( index in Instruments ){
    document.getElementById('pattern').innerHTML += JSON.stringify(Instruments[index].pattern) + '<br>';
  }
}

function valuesListeners(){
    select('#BPMtext').html(slider.value()) ;
}
