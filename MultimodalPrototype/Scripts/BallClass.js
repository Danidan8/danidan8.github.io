class Ball{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.z = 0;
        this.zMax = 100;
        this.zMin = 0;
        this.diameter;
        this.speedXY;
        this.colorR = 240;
        this.colorG = 240;
        this.colorB = 240;
        this.speedZ = 1;
        this.falling = false;
        this.alive = true;
    }

    display(){
        this.diameter = this.z + 25;
        fill(240);
        circle(this.x, this.y, this.diameter, this.diameter);
    }

    move(){
        let desitinationX = parseInt(random(50, width-50)); 
        let desitinationy = parseInt(random(50, height-50));
        if(this.x < desitinationX){
            this.x += this.speedXY;
        } 
    }

    riseAndFall(){
        if (!this.falling){
            if (this.z < this.zMax){
                this.z += this.speedZ;
            }else {
                this.falling = true;
            }    
        }
        if (this.falling){
            if (this.z > this.zMin){
                this.z -= this.speedZ;
            }else if (dist(this.x, this.y, paddleX, paddleY) <= 40){
                this.falling = false;
            }else{
              this.alive = false;
              this.colorR = 255;
              this.colorG = 0;
              this.colorR = 0;

            }
        }
    }
}
