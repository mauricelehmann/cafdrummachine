const PATTERN_SIZE = 16 ;
var globalPattern ;
var Instruments, napSample, pulse ;
var napSlider, BPMslider, textSlider ;
var patternPos = 0 ;
var patternPart = 1 ;

function preload() {
  soundFormats('mp3', 'ogg');

  Instruments = { 'clap'  : new instrument('clap') ,
                  'kick'  : new instrument('kick')  ,
                  'snare' : new instrument('snare') ,
                  'hihat' : new instrument('hihat')
  };
  napSample = loadSound('sound/nap4.mp3') ;

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
  //Pulse
  pulse = new p5.Phrase('pulse', changePatternColor, [1,1,1,1, 1,1,1,1, 1,1,1,1, 1,1,1,1]) ;
  globalPattern.addPhrase(pulse);

  createCanvas(720, 200);

}

function draw(){

  napSample.rate(napSlider.value() * 0.1 ) ;
  globalPattern.setBPM(BPMslider.value());
  //Refresh informations on screen
  valuesListeners() ;

}
