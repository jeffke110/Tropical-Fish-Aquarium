var fish = function (x, y) {
    this.x = x;
    this.y = y;
    this.rand = random([1, 2, 3]);
    this.tail;

    this.done_drawing_body = 0;
    this.done_drawing_eye = 0;
    this.done_drawing_fin = 0;
    this.done_drawing_tail = 0;

    this.body = [];
    this.sub_body = [];
    this.eye = [];
    this.sub_eye = [];
    this.fin = [];
    this.sub_fin = [];

};
fish.prototype.display = function () {
    var self = this;
    var drawBody = function () {
        if (self.rand == 1) {
            fill(255, 165, 0);
        } else if (self.rand == 2) {
            fill(255, 255, 0);
        } else {
            fill(255, 165, 244);
        }
        if (self.done_drawing_body == 0) {
            if (self.rand == 1) {
                self.body.push(new p5.Vector(-60, 0));
                self.body.push(new p5.Vector(10, random(10, 24)));
                self.body.push(new p5.Vector(10, 0));
                self.body.push(new p5.Vector(10, random(-10, -25)));
            } else if (self.rand == 2) {
                self.body.push(new p5.Vector(-40, 0));
                self.body.push(new p5.Vector(10, random(10, 25)));
                self.body.push(new p5.Vector(10, random(-10, -25)));
            } else {
                self.body.push(new p5.Vector(-20, 0));
                self.body.push(new p5.Vector(5, random(24, 35)));
                self.body.push(new p5.Vector(5, random(-24, -35)));
            }
            self.done_drawing_body = 1;
        }
        drawShape(self.body, self.sub_body);
    };
    var drawEye = function () {
        fill(0);
        if (self.done_drawing_eye == 0) {
            if (self.rand == 3) {
                self.eye.push(new p5.Vector(-10, 0));
                self.eye.push(new p5.Vector(-5, 3));
                self.eye.push(new p5.Vector(0, 0));
                self.eye.push(new p5.Vector(-5, -3));
            } else {
                self.eye.push(new p5.Vector(-20, 0));
                self.eye.push(new p5.Vector(-15, 3));
                self.eye.push(new p5.Vector(-10, 0));
                self.eye.push(new p5.Vector(-15, -3));
            }
            self.done_drawing_eye = 1;
        }
        drawShape(self.eye, self.sub_eye);
    };
    var drawFin = function () {
        fill(233, 33, 49);
        if (self.done_drawing_fin == 0) {
            var ran = random(-15, -25);
            self.fin.push(new p5.Vector(-20, random(-5, -10)));
            self.fin.push(new p5.Vector(-10, ran));
            self.fin.push(new p5.Vector(-5, -10));
            self.fin.push(new p5.Vector(0, ran));
            self.fin.push(new p5.Vector(10, -10));
            self.done_drawing_fin = 1;
        }
        drawShape(self.fin, self.sub_fin);
    };
    var drawTail = function () {
        //fill(233, 33, 49);
        if (self.done_drawing_tail == 0) {
            if (self.rand == 3) {
                self.tail = new fishtail(8, 15);
                self.done_drawing_tail = 1;
            } else {
                self.tail = new fishtail(12, 15);
                self.done_drawing_tail = 1;
            }
        }
        noFill();
        self.tail.draw();


    };
    push();
    translate(self.x, self.y);
    drawBody();
    drawEye();
    drawFin();
    drawTail();
    pop();

}