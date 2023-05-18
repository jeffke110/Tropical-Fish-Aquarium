//movement class for each fish, so that it moves using flocking mechanics
class Boid{
    constructor(x, y){
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(2,4));
        this.acceleration = createVector();
        this.maxForce = .1;
        this.maxSpeed = 2;
        this.fish = new fish(this.position.x, this.position.y);
    }
    align(boids){
        let perceptionRadius = 200;
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(this.position.x,
                        this.position.y,
                        other.position.x,
                        other.position.y);
            if(other != this && d < perceptionRadius){
                steering.add(other.velocity);
                total++;
            }
        }
        if(total > 0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            
        }
        return steering;
    }
    cohesion(boids){
        let perceptionRadius = 100;
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(this.position.x,
                        this.position.y,
                        other.position.x,
                        other.position.y);
            if(other != this && d < perceptionRadius){
                steering.add(other.position);
                total++;
            }
        }
        if(total > 0){
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            
        }
        return steering;
    }
    separation(boids){
        let perceptionRadius = 50;
        let steering = createVector();
        let total = 0;
        for(let other of boids){
            let d = dist(this.position.x,
                        this.position.y,
                        other.position.x,
                        other.position.y);
            if(other != this && d < perceptionRadius){
                let diff = p5.Vector.sub(this.position, other.position);
                diff.mult(d);
                steering.add(diff);
                total++;
            }
        }
        if(total > 0){
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
            
        }
        return steering;
    }
    flock(boid){
        this.acceleration.mult(0);
        let alignment = this.align(boid);
        let cohesion = this.cohesion(boid);
        let separation = this.separation(boid);
        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
    }
    show(){
        this.fish.x = this.position.x;
        this.fish.y = this.position.y;
        this.fish.display();
    }
    update(){
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
    }
    edges(){
        if(this.position.x > 1500){
            this.position.x = 0;
        }else if (this.position.x < 0 ){
            this.position.x = width;
        }
        if(this.position.y > height){
            this.position.y = 0;
        }else if (this.position.y < 0 ){
            this.position.y = height;
        }
    }
}
