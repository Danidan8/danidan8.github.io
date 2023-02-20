var gn = new GyroNorm();
let y = 0;

gn.init().then(function(){
  gn.start(function(data){
  
    $('.output1').html(data.dm.x);
    $('.output2').html(data.do.alpha);
    y = y + data.dm.x;

});
}).catch(function(e){
    console.log("Not Supported")
  });

//-------------------------------------------------

let colorR = 153;
let colorG = 153;
let colotB = 153;

let speach = new p5.SpeechRec('en-US', parseResult);
speach.continuous = true;

function setup(){
  createCanvas(100, 100);
  // speach.onResult = parseResult;
  speach.onError = spitError;
  speach.start();
}

function draw(){
  background(colorR, colorG, colotB);
  ellipse(50, y, 10, 10);
  y+=1;
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