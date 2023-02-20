var gn = new GyroNorm();
let x = 50
let y = 50;
let roll,pitch;

gn.init().then(function(){
  gn.start(function(data){

    roll = data.do.gamma;
    pitch = data.do.beta;
  
    $('.output1').html(data.do.alpha); //Yaw
    $('.output2').html(pitch); //Pitch
    $('.output4').html(roll); //Roll

});
}).catch(function(e){
    console.log("Not Supported");
  });

//-------------------------------------------------

let colorR = 153;
let colorG = 153;
let colotB = 153;

let tiltThreshold = 3;

let speach = new p5.SpeechRec('en-US', parseResult);
speach.continuous = true;
myRec.interimResults = true;

function setup(){
  createCanvas(100, 100);
  speach.onError = spitError;
  speach.start();
}

function draw(){
  // console.log("Roll: " + roll + " Pitch: " + pitch);
  // console.log("X: " + x + " Y: " + y);
  background(colorR, colorG, colotB);
  ellipse(x, y, 10, 10);
  
  if (roll > tiltThreshold){
    x+=1;
  }else if (roll < -tiltThreshold){
    x-=1
  }
  if (pitch > tiltThreshold){
    y+=1;
  }else if (pitch < -tiltThreshold){
    y-=1
  }
}

function parseResult(){
  var mostRecentWord = speach.resultString.split(' ').pop().toLowerCase();
  $('.output3').html(mostRecentWord);
  console.log(mostRecentWord);
  if(mostRecentWord.indexOf("yellow")!==-1){colorR=238; colorG = 255; colotB = 0;}
  else if(mostRecentWord.indexOf("red")!==-1){colorR=255; colorG = 0; colotB = 13;}
  else if(mostRecentWord.indexOf("grey")!==-1){colorR=153; colorG = 153; colotB = 153;}
  else if(mostRecentWord.indexOf("purple")!==-1){colorR=255; colorG = 0; colotB = 221;}
}

function spitError(){
  console.log("Error");
}