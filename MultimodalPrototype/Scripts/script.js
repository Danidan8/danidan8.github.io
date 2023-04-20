var gn = new GyroNorm();
let roll,pitch;

//GyroNorm Init
gn.init().then(function(){
  gn.start(function(data){
    
    roll = data.do.gamma;
    pitch = data.do.beta;
    
  });
}).catch(function(e){
  alert('No Gyroscope Detected');
});

// P5.Speech Init
var speech = new p5.SpeechRec();
speech.interimResults = true;
let isRecording = false;


//Main Code Starts Here
let paddleX,paddleY;
let tiltThreshold = 3;
let paddleSpeed = 2;

let score = 0;
let timerAngle = 0;

let ball;

let soundPowerUpSuccess, soundPowerUpFail, soundPing, soundGameOver;

function preload(){
  soundPowerUpSuccess = loadSound('Sounds/Ding.mp3');
  soundPowerUpFail = loadSound('Sounds/Fail.mp3')
  soundPing = loadSound('Sounds/PingPong.mp3');
  soundGameOver = loadSound('Sounds/GameOver.mp3');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  ball = new Ball();
  
  speech.onError = spitError;
  speech.onStart = recStart;
  speech.onEnd = recEnd;
  $('body').click(function (e) { 
    e.preventDefault();
    if(timerAngle == 360 && ball.isAlive){speech.start();} 
  });
  
  paddleX = width/2;  
  paddleY = height/2;  
  
  soundPing.setVolume(0.3);
  soundPowerUpSuccess.setVolume(0.3);
  soundPowerUpFail.setVolume(0.2);
}

function draw(){
  //Background
  background(111, 133, 255);
  strokeWeight(15);
  stroke(255);
  line(0, 0, 0, height);
  line(0, 0, width, 0);
  line(0, height, width, height);
  line(width, 0, width, height);
  line(width/2, 0, width/2, height);
  stroke(150);
  strokeWeight(10);
  line(0,height/2,width,height/2);
  
  stroke(0);
  
  
  //Move Paddle
  paddle(paddleX,paddleY)
  if(ball.isAlive){
    if ((roll > tiltThreshold) && (paddleX < width-40)){
      paddleX += paddleSpeed;
    }else if ((roll < -tiltThreshold) && (paddleX > 40)){
      paddleX -= paddleSpeed
    }
    if ((pitch > tiltThreshold) && (paddleY < height-40)){
      paddleY += paddleSpeed;
    }else if ((pitch < -tiltThreshold) && (paddleY > 40)){
      paddleY -= paddleSpeed;
    }
  }

  //Ball
  ball.display();
  if (ball.isAlive){
    ball.riseAndFall();
    ball.move();
  }

  //Score
  noStroke();
  textAlign(CENTER,CENTER);
  textSize(45);
  textStyle(BOLD)
  fill(10);
  text('Score: ' + score, width/2, 50);

  //Timer
  noFill();
  strokeWeight(10);
  stroke(0);
  arc(width-40,40,50,50,0,radians(timerAngle));
  
  noStroke();
  fill(0);
  textSize(15);
  text('POW',width-40,40)
  
  if (timerAngle < 360){
    timerAngle += 1;
  } else {
    timerAngle = 360;
  }

  //Recordin UI
  if(isRecording){
    fill(255,0,0);
  }else{
    noFill();
  }
  ellipse(20, 20, 10, 10);
  textAlign(LEFT, CENTER);
  text('Rec',30,20);

  //GameOver
  if(ball.isAlive){
    noFill();
    noStroke();
  }else{
    fill(255,0,0);
    strokeWeight(7);
    stroke(0);
  }
  textAlign(CENTER,CENTER);
  textSize(50);
  text('Game Over', width/2, height - 60);
}

function paddle(x,y){
  rectMode(CENTER);
  strokeWeight(3);
  fill(140, 91, 0);
  rect(x, y+30, 20, 100);
  fill(255, 99, 99);
  arc(x, y, 80, 85, PI + 5,TWO_PI - 5, CHORD);
}

function parseResult(){
  
  let recordingResult = speech.resultString.split(' ').pop().toLowerCase();
  console.log(recordingResult);

  if(recordingResult == "faster"){
    successfullPowerUp()
    paddleSpeed += 1;
  }
  else if(recordingResult == "slower"){
    successfullPowerUp()
    paddleSpeed -= 1;
  }
  else if(recordingResult == "stop"){
    successfullPowerUp()
    ball.desitinationX = ball.x;
    ball.desitinationY = ball.y;
  }
  else if(recordingResult == "fly"){
    successfullPowerUp()
    ball.z = ball.zMax;
  }else{
    soundPowerUpFail.play();
  }
}

function successfullPowerUp(){
  timerAngle = 0;
  soundPowerUpSuccess.play();

}

function spitError(){
  console.log("Error");
}

function recStart(){
  console.log("Recording Started");
  isRecording = true;
}

function recEnd(){
  isRecording = false;
  parseResult();
  console.log("Recording Ended");
}