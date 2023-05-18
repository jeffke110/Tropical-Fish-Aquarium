class seaweed{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.top = y -30;
        this.x1 = x;
        this.y1 = y -20
        this.x2 = x;
        this.y2 = y -10;
        this.max = this.x + 10;
        this.min = this.x - 10;
        this.moveTop = 1;
        this.moveBottom = 1;
    }
    draw(){
        fill(22, 244,0);
        if(this.x1 == this.max ){
            this.x1--;
            this.moveTop = 1;
        }else if(this.x1 = this.min ){
            this.x1++;
            this.moveTop = 0;
        }
        if(this.x2 == this.max ){
            this.x2--;
            this.moveBottom = 1;
        }else if(this.x2 == this.min){
            this.x2++;
            this.moveBottom = 0;
        }
        if(this.moveTop == 1){
            this.x1--;
        }else{
            this.x1++;
        }
        if(this.moveBottom == 1){
            this.x2--;
        }else{
            this.x2++;
        }
        //draws the bezier shape of the seaweed
        bezier(this.x, this.y, this.x2, this.y2, this.x1, this.y1, this.x, this.top);
    }
}