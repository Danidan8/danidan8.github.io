let trash = [];

let colorPlastic, colorPaper, colorOrganic; 
let trashTypes = ['plastic', 'paper', 'organic'];

let score = 0;

function setup(){

    for(var i = 0; i < 7; i++){
        trash[i] = new Trash;
        trash[i].randomiseType();
    }

    colorPlastic = color(238, 114, 3); //orange
    colorPaper = color(0, 98, 167); //blue
    colorOrganic = color(0, 101, 42); //green
}

function draw(){
    createCanvas(400, 700);
   
    noStroke();
    fill(255, 204, 158);
    rect(0, 0, width/3, height);
    fill(173, 221, 255);
    rect(width/3, 0, width/3, height);
    fill(150, 255, 194);
    rect(width*2/3, 0, width/3, height);
    stroke(100);
    strokeWeight(3);
    line(width/3, 0, width/3, height);
    line(width*2/3, 0, width*2/3, height);
    

    for(var i = 0; i < trash.length; i++){
        trash[i].fall();
        trash[i].display();
        
        if(mouseIsPressed == true){
            trash[i].move();
        }else{
            trash[i].continueFalling();
            trash[i].grabbed = false;
        }
    }

    stroke(0);
    fill(colorPlastic); 
    rect(0, 650, width/3, 100);
    fill(colorPaper);
    rect(width/3, 650, width/3, 100);
    fill(colorOrganic);
    rect(width*2/3, 650, width/3, 100);
   
    fill(250);
    stroke(3);
    textSize(50);
    textAlign(CENTER);
    text(score, width/2, 50)

}

function mousePressed(){
    for(var i = 0; i < trash.length; i++){
        if(dist(trash[i].x, trash[i].y, mouseX, mouseY) <=25){ 
            trash[i].grabbed = true;
        }
    }
}
