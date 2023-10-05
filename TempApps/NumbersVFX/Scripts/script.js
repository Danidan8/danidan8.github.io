
function setup(){
    createCanvas(500, 500);
    
    generateRandomNum();    
}

$('#RandomizeButton').click(function (e) { 
    e.preventDefault();
    generateRandomNum();
});

$('#SubmitButton').click(function (e) { 
    e.preventDefault();
    var inputNum = $('#NumInput').val();
    if (inputNum && inputNum <= 9999 && inputNum >= 0){
        generateNum(parseInt(inputNum[inputNum.length - 4]),parseInt(inputNum[inputNum.length - 3]),parseInt(inputNum[inputNum.length - 2]),parseInt(inputNum[inputNum.length - 1]));
    }else{
        textAlign(CENTER);
        textSize(40);
        noStroke();
        text("Unexpected Input", 250, 250);
    }
});

var animate = false

$('#AnimateButton').click(function (e) { 
    e.preventDefault();
    
    var currentFrameRate = $('#AnimFPS').val();
    console.log(currentFrameRate);
    
    animate = !animate
    if (animate){
        $('#AnimateButton').html('Stop Animation');
        frameRate(parseInt(currentFrameRate));
    }else{
        $('#AnimateButton').html('Start Animation');
    }
});

// var swastika = true;

function draw(){
    if (animate){
        generateRandomNum();
        // if (swastika){generateNum(1,8,8,1);}
        // else{generateNum(8,1,1,8);}
    }

    // swastika = !swastika
    $('#AnimFPSLabel').html('Anim FPS: ' + $('#AnimFPS').val());
}