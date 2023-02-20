var gn = new GyroNorm();
let y = 50;
let roll,pitch;

gn.init().then(function(){
  gn.start(function(data){
  
    $('.output1').html(data.do.alpha); //Yaw
    $('.output2').html(data.do.beta); //Pitch
    $('.output4').html(data.do.gamma); //Roll

    roll = data.do.gamma + 180;
    pitch = data.do.beta + 180;

});
}).catch(function(e){
    console.log("Not Supported")
  });

//-------------------------------------------------

let colorR = 153;
let colorG = 153;
let colotB = 153;

let speach = new p5.SpeechRec('en-US', parseResult);

function setup(){
  createCanvas(100, 100);
  // speach.onResult = parseResult;
  speach.onError = spitError;
  speach.start();
}

function draw(){
  speach.continuous = true;
  background(colorR, colorG, colotB);
  ellipse(roll/100, pitch/100, 10, 10);
  // y+=1;
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