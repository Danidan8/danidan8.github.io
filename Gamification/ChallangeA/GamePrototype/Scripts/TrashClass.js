class Trash {
    constructor() {
        this.x = random(25, 400-25);
        this.y = random(height);
        this.diameter = 50;
        this.speed = 1;
        this.initialSpeed = random(1,2);
        this.shouldFall = true;
        this.grabbed = false;
        this.type = '';
    }
    
    fall(){
        if(this.shouldFall){
            this.y += this.speed + this.initialSpeed;
        
            if (this.y > height){
                this.calculateScore();
                this.x = random(25, width-25);
                this.y = 5;
                this.type = trashTypes[int(random(trashTypes.length))];
            }

            if (this.x < 0){
                this.x = 25;
            }
            if (this.x > width){
                this.x = width - 25;
            }
        }
    }
    
    display(){
        if (this.type == 'plastic'){
            fill(colorPlastic);
        }else if (this.type == 'paper'){
            fill(colorPaper);
        }else if (this.type == 'organic'){
            fill(colorOrganic);
        }else{
            fill(250);
        }
            
        strokeWeight(5);
        stroke(0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    move(){
        if (this.grabbed){
            this.x = mouseX;
            this.y = mouseY;
            this.shouldFall = false;
        }
    }

    continueFalling(){
        this.shouldFall = true;
    }

    randomiseType(){
        this.type = trashTypes[int(random(trashTypes.length))];
    }

    calculateScore(){
        if (this.type == 'plastic' && this.x < width/3){
            score += 1;
            // console.log('orange');
        }else if (this.type == 'paper' && this.x > width/3 && this.x < width*2/3){
            score += 1;
            // console.log('blue');
        }else if (this.type == 'organic' && this.x > width*2/3){
            score += 1;
            // console.log('green');
        }else{
            score -= 3;
        }
    }
}