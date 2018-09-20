var globalPattern ;
var Instruments ;
var slider ;

function preload() {
  soundFormats('mp3', 'ogg');

  Instruments = { 'clap'  : new instrument('clap') ,
                  'kick'  : new instrument('kick')  ,
                  'snare' : new instrument('snare') ,
                  'hihat' :  new instrument('hihat') }  ;
}

function setup() {

  //all button & others input are set in interface.js
  setButtons() ;

  //Creation of pattern
  globalPattern = new p5.Part();
  globalPattern.addPhrase(Instruments['clap'].phrase);
  globalPattern.addPhrase(Instruments['snare'].phrase);
  globalPattern.addPhrase(Instruments['kick'].phrase);
  globalPattern.addPhrase(Instruments['hihat'].phrase);

  createCanvas(720, 200);
}

function draw(){
  globalPattern.setBPM(slider.value());
  showPattern() ;
}
