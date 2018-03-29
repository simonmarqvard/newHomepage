class Walker {

  constructor(x, y) {

    this.location = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

  }

  display() {
    var angle = this.velocity.heading();
    push();
    rectMode(CENTER);
    translate(this.location.x, this.location.y)
    rotate(angle)
    noStroke();
    fill(160, 200, 200)
    rect(0, 0, 50, 10)
    triangle(25, 10, 35, 0, 25, -10);
    pop();

  }

  update() {
    var v = p5.Vector.random2D()
    v.limit(0.1);
    this.location.add(this.velocity);
    this.velocity.add(v);

  }

  edges() {
    if (this.location.x & gt; width) {
      this.location.x = 0;
    }
    if (this.location.x & lt; 0) {
      this.location.x = width;
    }
    if (this.location.y & gt; height) {
      this.location.y = 0;
    }
    if (this.location.y & lt; 0) {
      this.location.y = height;
    }

  }

}
