function instrument( name ) {

    this.name = name ;
    this.pattern = new Array(PATTERN_SIZE).fill(0);
    this.sample = loadSound('sound/'+ name + '.mp3');
    this.seqButtonArray = [] ;
    this.paramButtonArray = [] ;
    this.phrase = new p5.Phrase(this.name , this.playPhrase , this.pattern) ;
    this.delay = new p5.Delay();
    this.delay.setType('pingPong');
    this.isDelaying = false ;

}
//
instrument.prototype.playPhrase = function ( time , playbackRate ) {
    Instruments[this.name].sample.play(time) ;
};

instrument.prototype.setInstrumentButtons = function () {

    //Sequence buttons
    for( var n = 0 ; n < PATTERN_SIZE ; n++){
      //Create buttons objects
      this.seqButtonArray.push(createButton(n));
      //DOM properties
      this.seqButtonArray[n].parent( this.name + n ) ;
      //Add function when button is pressed
      this.seqButtonArray[n].mousePressed(SeqPatternButtonHandler(this.name,n));
      //Set style
      this.seqButtonArray[n].style('background-color', color(0,200,100,100));
      this.seqButtonArray[n].addClass('button');
    }

    //Pitch & mute buttons
    //TODO : Automatiser
    this.paramButtonArray.push(createButton('pitch +')) ;
    this.paramButtonArray.push(createButton('pitch -')) ;
    this.paramButtonArray.push(createButton('Mute '+ this.name)) ;
    this.paramButtonArray.push(createButton('Delay')) ;
    //DOM
    //TODO : Mettre le CSS , attribut DOM et style ailleurs !
    this.paramButtonArray[0].parent('pitchUp'+ this.name);
    this.paramButtonArray[1].parent('pitchDown'+ this.name);
    this.paramButtonArray[2].parent('mute'+ this.name);
    this.paramButtonArray[3].parent('delay'+ this.name);
    this.paramButtonArray[0].addClass('button');
    this.paramButtonArray[1].addClass('button');
    this.paramButtonArray[2].addClass('button');
    this.paramButtonArray[3].addClass('button');
    //Function on click
    this.paramButtonArray[0].mousePressed(pitchHandler( this.name , 0.1));
    this.paramButtonArray[1].mousePressed(pitchHandler( this.name ,-0.1));
    this.paramButtonArray[2].mousePressed(muteHandler( this.name ));
    this.paramButtonArray[3].mousePressed(delayHandler( this.name ));

};


instrument.prototype.changePattern = function (m) {
  if(this.pattern[m] == 0){
    //Enable the cross on the pattern
    this.pattern[m] = 1 ;
    //Change color
    this.seqButtonArray[m].style('background-color', color(200, 0, 0,100));
  } else {
    //Disable it
    this.pattern[m] = 0 ;
    this.seqButtonArray[m].style('background-color', color(0,200,100,100));
  }
};

function SeqPatternButtonHandler( name , position ){
  return function () {
    Instruments[name].changePattern(position) ;
  }
}

function pitchHandler( name , value ){
  return function(){
    Instruments[name].sample.rate(Instruments[name].sample.rate() + value) ;
  }
}

function muteHandler( name ){
  return function(){
      if(Instruments[name].sample.getVolume()){
          Instruments[name].sample.setVolume(0) ;
      }
      else{
          Instruments[name].sample.setVolume(1) ;
      }
  }
}

function delayHandler( name ) {
    return function() {
        if(Instruments[name].isDelaying){
            Instruments[name].delay.process(Instruments[name].sample, 0, 0, 2300);
            Instruments[name].isDelaying = false ;
        }else{
            Instruments[name].delay.process(Instruments[name].sample, .1, .5, 2300);
            Instruments[name].isDelaying = true ;
        }
    }
}
