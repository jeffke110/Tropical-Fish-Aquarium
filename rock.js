
//rock class that uses subdivision for drawing the rocks
var rock = function (x, y) {
    this.x = x;
    this.y = y;
    this.done_drawing_body = 0;
    this.body = [];
    this.sub_body = [];
}
rock.prototype.display = function () {
    var self = this;
    var drawBody = function () {
        fill(128, 128, 128);
        if(self.done_drawing_body == 0){
            self.body.push(new p5.Vector(-40, -10));
            self.body.push(new p5.Vector(0, 20));
            self.body.push(new p5.Vector(40, -10));
            self.done_drawing_body = 1;
        }
        drawShape(self.body, self.sub_body);
        
    };
    push();
    translate(self.x, self.y);
    drawBody();
    pop();

}