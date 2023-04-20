class Ball{
    constructor(){
        this.x = width/2;
        this.y = height/2;
        this.desitinationX;
        this.desitinationY;

        this.z = 0;
        this.zMax = 100;
        this.zMin = 0;
        this.diameter;
        
        this.speedXY = 1;
        this.speedZ = 1;
        
        this.colorR = 240;
        this.colorG = 240;
        this.colorB = 240;
        
        this.falling = false;
        this.alive = true;
    }

    display(){
        this.diameter = this.z + 25;
        fill(this.colorR,this.colorG,this.colorB);
        circle(this.x, this.y, this.diameter, this.diameter);
    }

    move(){
        if (!Math.abs(this.desitinationX-this.x)<=1){
            if(this.x < this.desitinationX){
                this.x += this.speedXY;
            } else if (this.x > this.desitinationX){
                this.x -= this.speedXY;
            }
        }
        if (!Math.abs(this.desitinationY-this.y)<=1){
            if(this.y < this.desitinationY){
                this.y += this.speedXY;
            } else if (this.y > this.desitinationY){
                this.y -= this.speedXY;
            }
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
                this.desitinationX = parseInt(random(50, width-50)); 
                this.desitinationY = parseInt(random(50, height-50));
            }else{
              this.alive = false;
              this.colorR = 255;
              this.colorG = 0;
              this.colorB = 0;
            }
        }
    }
}
