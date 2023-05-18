/*
Project 8 -Tropical Fish Aquarium
This project includes a 1500x400 canvas. I was not able to implement the scrolling mechanics to the canvas.
There are 3 schools of fish that include cohesion, flocking mechanics with 8 - 12 fish.
There are 3 types of fish that swim through the aquarium with different sizes.
The tail is animated using a bezier
Rocks every other second release bubbles every other second using particle mechanics.
Also, there are seaweeds that use the bezier function.
*/
//global variables
const schoolOne = [];
const schoolTwo = [];
const schoolThree = [];
const randomFish = [];
const seaweeds = [];
var bubbles = [];
var bubbles2 = [];
var bubbles3 = [];
var bubbles4 = [];
var rock1;
var rock2;
var rock3;
var rock4;
var cam;
var camx = 0;

//subdivision functions
var splitPoints = function (points, subdivided_points) {
    subdivided_points.splice(0, subdivided_points.length);
    for (var i = 0; i < points.length - 1; i++) {
        subdivided_points.push(new p5.Vector(points[i].x, points[i].y));
        subdivided_points.push(new p5.Vector((points[i].x + points[i + 1].x) / 2,
            (points[i].y +
                points[i + 1].y) / 2));
    }
    subdivided_points.push(new p5.Vector(points[i].x, points[i].y));
    subdivided_points.push(new p5.Vector((points[0].x + points[i].x) / 2, (points[0].y +
        points[i].y) / 2));
};
var average = function (points, subdivided_points) {
    for (var i = 0; i < subdivided_points.length - 1; i++) {
        var x = (subdivided_points[i].x + subdivided_points[i + 1].x) / 2;
        var y = (subdivided_points[i].y + subdivided_points[i + 1].y) / 2;
        subdivided_points[i].set(x, y);
    }
    var x = (subdivided_points[i].x + points[0].x) / 2;
    var y = (subdivided_points[i].y + points[0].y) / 2;
    points.splice(0, points.length);
    for (var i = 0; i < subdivided_points.length; i++) {
        points.push(new p5.Vector(subdivided_points[i].x, subdivided_points[i].y));
    }
};
var drawShape = function (points, subdivided_points) {
    beginShape();
    for (var i = 0; i < points.length; i++) {
        vertex(points[i].x, points[i].y);
    }
    vertex(points[0].x, points[0].y);
    endShape();
    if (subdivided_points.length < 100) {
        splitPoints(points, subdivided_points);
        average(points, subdivided_points);
    }
};


var schoolFishDraw = function () {
    for (let boid of schoolOne) {
        boid.edges();
        boid.flock(schoolOne);
        boid.update();
        boid.show();
    }
    for (let boid of schoolTwo) {
        boid.edges();
        boid.flock(schoolTwo);
        boid.update();
        boid.show();
    }
    for (let boid of schoolThree) {
        boid.edges();
        boid.flock(schoolThree);
        boid.update();
        boid.show();
    }
    for (let boid of randomFish) {
        boid.edges();
        boid.update();
        boid.show();
    }
};
var drawSeaweed = function () {
    for (let i = 0; i < seaweeds.length; i++) {
        seaweeds[i].draw();
    }
}
var drawBubbles = function (bubbles,x) {
   
    if (second() % 2 == 0) {
        bubbles.push(new bubble(x, 400));
    }
        for (var i = bubbles.length - 1; i >= 0; i--) {
            bubbles[i].update();
            bubbles[i].draw();
            if (bubbles[i].finished()) {
                bubbles.splice(i, 1);
            }
        }

}
function setup() {
    cam = createCanvas(1500, 400);
    for (let i = 0; i < 10; i++) {
        schoolOne.push(new Boid(100, 100));
    }
    for (let i = 0; i < 12; i++) {
        schoolTwo.push(new Boid(1300, 100));
    }
    for (let i = 0; i < 8; i++) {
        schoolThree.push(new Boid(600, 100));
    }
    for (let i = 0; i < 8; i++) {
        randomFish.push(new Boid(random(1500), random(400)));
    }
    for (var i = 0; i < 1500; i++) {
        i = i + 30;
        seaweeds.push(new seaweed(i, 400));
    }
    rock1 = new rock(100,390);
    rock2 = new rock(500,390);
    rock3 = new rock(900,390);
    rock4 = new rock(1300,390);
}
function keyPressed() {
    if (keyCode === LEFT_ARROW && camx > 1) {
        camx--;
    } else if (keyCode === RIGHT_ARROW && camx < 1500) {
        camx++
    }
}
draw = function () {
    background(0, 255, 255);
    cam.position(camx, 0, 'fixed');
    schoolFishDraw();
    drawSeaweed();
    drawBubbles(bubbles,100);
    drawBubbles(bubbles2,500);
    drawBubbles(bubbles3,900);
    drawBubbles(bubbles4,1300);
    rock1.display();
    rock2.display();
    rock3.display();
    rock4.display();
    
    
};