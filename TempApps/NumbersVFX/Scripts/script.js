
function setup(){
    createCanvas(500, 500);
    
    generateNum(1,2,3,4)

    frameRate(15)
}

$('#RandomizeButton').click(function (e) { 
    e.preventDefault();
    clear();
    generateRandomNum();
});


function generateRandomNum() {
    var firstDgit = Math.floor(Math.random() * 9) 
    var secondDgit = Math.floor(Math.random() * 9) 
    var thirdDgit = Math.floor(Math.random() * 9) 
    var fourthDgit = Math.floor(Math.random() * 9) 
    generateNum(firstDgit, secondDgit,thirdDgit,fourthDgit);
    $('#NumInput').val("" + firstDgit + secondDgit + thirdDgit + fourthDgit);
    
}

$('#SubmitButton').click(function (e) { 
    e.preventDefault();
    var inputNum = $('#NumInput').val();
    if (inputNum && inputNum <= 9999 && inputNum >= 0){
        clear();
        generateNum(parseInt(inputNum[inputNum.length - 4]),parseInt(inputNum[inputNum.length - 3]),parseInt(inputNum[inputNum.length - 2]),parseInt(inputNum[inputNum.length - 1]))
    }else{
        clear();
        textAlign(CENTER)
        textSize(40)
        noStroke()
        text("Unexpected Input", 250, 250)
    }
});

//Anims

var animate = false

$('#AnimateButton').click(function (e) { 
    e.preventDefault();
    animate = !animate
    if (animate){
        $('#AnimateButton').html('Stop Animation');
    }else{
        $('#AnimateButton').html('Start Animation');
    }
});

function draw(){
    if (animate){
        clear();
        generateRandomNum();
    }
}