//class for each bubble object
class bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-4, -3);
        this.alpha = 255;
    }
    //updates the position
    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 3;
        this.vy += .03;
    }
    //draws the bubbles (as the bubbles go higher, the bubbles begin to fade, become slower)
    draw() {
        fill(255, this.alpha);
        circle(this.x, this.y, 10);
    }
    finished() {
        return this.alpha < 0;
    }

}