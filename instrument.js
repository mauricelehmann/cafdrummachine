function instrument( name ) {

    this.name = name ;
    this.globalPatternSize = 8 ;
    this.pattern = new Array(this.globalPatternSize).fill(0);
    this.sample = loadSound('sound/'+ name + '.mp3');
    this.seqButtonArray = [] ;
    this.paramButtonArray = [] ;
    this.phrase = new p5.Phrase(this.name , this.playPhrase , this.pattern) ;

}

instrument.prototype.playPhrase = function ( time , playbackRate ) {
    Instruments[this.name].sample.play(time) ;
};

instrument.prototype.setSequenceButtons = function () {
    for( var n = 0 ; n < this.globalPatternSize ; n++){
      //Create buttons objects
      this.seqButtonArray.push(createButton(n));
      //DOM properties
      this.seqButtonArray[n].parent( this.name + (n + 1) ) ;
      //Add function when button is pressed
      this.seqButtonArray[n].mousePressed(SeqPatternButtonHandler(this.name,n));
      //Set color
      this.seqButtonArray[n].style('background-color', color(0,255,0));
    }
};

instrument.prototype.pitchSample = function( value ){
  this.sample.rate += this.sample.rate() + value ;
}

instrument.prototype.setPitchButtons = function () {
  this.paramButtonArray.push(createButton('pitch +')) ;
  this.paramButtonArray.push(createButton('pitch -')) ;
  this.paramButtonArray[0].parent('pitchUp'+ this.name);
  this.paramButtonArray[1].parent('pitchDown'+ this.name);
  this.paramButtonArray[0].mousePressed( function(){ this.pitchSample(1) });
};

instrument.prototype.changePattern = function (m) {
  if(this.pattern[m] == 0){
    //Enable the cross on the pattern
    this.pattern[m] = 1 ;
    //Change color
    this.seqButtonArray[m].style('background-color', color(255, 0, 0));
  } else {
    //Disable it
    this.pattern[m] = 0 ;
    this.seqButtonArray[m].style('background-color', color(0, 255, 0));
  }
};

function SeqPatternButtonHandler( name , position ){
  return function () {
    Instruments[name].changePattern(position) ;
  }
}
