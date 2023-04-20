var gn = new GyroNorm();
let roll,pitch;

//GyroNorm Init
gn.init().then(function(){
  gn.start(function(data){
    
    roll = data.do.gamma;
    pitch = data.do.beta;
    
  });
}).catch(function(e){
  console.log("Not Supported");
});

// P5.Speech Init
let speach = new p5.SpeechRec('en-US', parseResult);
speach.continuous = true;
speach.interimResults = true;


//Main Code Starts here
let paddleX,paddleY;
let tiltThreshold = 3;
let movementStep = 1; 

function setup(){
  createCanvas(windowWidth, windowHeight);
  speach.onError = spitError;
  speach.start();

  paddleX = width/2;
  paddleY = height/2;
}

function draw(){
  background(150);
  paddle(paddleX,paddleY)
  
  if (roll > tiltThreshold){
    paddleX+=movementStep;
  }else if (roll < -tiltThreshold){
    paddleX-=movementStep
  }
  if (pitch > tiltThreshold){
    paddleY+=movementStep;
  }else if (pitch < -tiltThreshold){
    paddleY-=movementStep;
  }
}

function parseResult(){
  var mostRecentWord = speach.resultString.split(' ').pop().toLowerCase();
  $('.output3').html(mostRecentWord);
  console.log(mostRecentWord);
  if(mostRecentWord.indexOf("test")!==-1){console.log("I works");}
  else if(mostRecentWord.indexOf("yellow")!==-1){}
}

function spitError(){
  console.log("Error");
}

function paddle(x,y){
  rectMode(CENTER);
  strokeWeight(3);
  fill(140, 91, 0);
  rect(x, y+30, 20, 100);
  fill(255, 99, 99);
  arc(x, y, 80, 85, PI + 5,TWO_PI - 5, CHORD);
}
