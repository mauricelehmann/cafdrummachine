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
  napSlider = createSlider(0, 20, 5, 0.1);
  napSlider.style('width', '500px');
  napSlider.parent("playNap") ;

  //Nap button
  var buttonPlayNap = createButton("Play nap") ;
  buttonPlayNap.mousePressed(playNap) ;
  buttonPlayNap.parent("playNap") ;
  buttonPlayNap.addClass('button');

  var buttonChangePart = createButton("Change part") ;
  buttonChangePart.mousePressed(switchVisiblePatternButton) ;
  buttonChangePart.parent("changePart");
  buttonChangePart.addClass("button") ;

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

function changePatternColor() {
    //TODO : Decaler de deux case la coloration ? Ou comprendre pourquoi c'est décalé avec le son -> delay ?
    patternPos += 1 ;
    var i = patternPos % 8 ;
    var j ;
    //Avoid the "out of range"
    i == 0 ? j = 7 : j = i - 1 ;
    //TODO : Better color ?
    document.getElementById('tempoLed'+j).style = "background-color:white" ;
    document.getElementById('tempoLed'+i).style = "background-color:red" ;

}

function switchVisiblePatternButton(){

    //Depend of global variable patternPart ( 1 or 0 ) , we show or not the sequence buttons
    //of part 1 ( 0 -> 7 ) or part 2 ( 8 -> 15 )
    var firstDelimiterStart, firstDelimiterEnd , secondDelimiterStart , secondDelimiterStart ;
    if(patternPart){
        firstDelimiterStart = 0 ;
        firstDelimiterEnd = PATTERN_SIZE / 2 ;
        secondDelimiterStart = firstDelimiterEnd ;
        secondDelimiterEnd = PATTERN_SIZE ;
        patternPart = 0 ;

    }else{
        firstDelimiterStart = PATTERN_SIZE / 2 ;
        firstDelimiterEnd = PATTERN_SIZE ;
        secondDelimiterStart = 0 ;
        secondDelimiterEnd = firstDelimiterStart ;
        patternPart = 1 ;
    }
    //Hide all "part 1 buttons"
    for( instrument in Instruments ){
        for( var button = firstDelimiterStart ; button < firstDelimiterEnd  ; button++ ){
            Instruments[instrument].seqButtonArray[button].addClass('button_hided') ;
        }
    }
    //Show all "part 2 buttons"
    for( instrument in Instruments ){
        for( var button = secondDelimiterStart ; button < secondDelimiterEnd  ; button++ ){
            Instruments[instrument].seqButtonArray[button].removeClass('button_hided') ;
        }
    }

}
