//object circle
var Circle = function(x, y, d) {
  this.x = x;
  this.y = y;
  this.diameter = d;
  this.time = 0;
  this.outline = 1;
  this.display = function() {
    strokeWeight(this.outline);
    fill(200, 100, 100, 50);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
  this.isInside = function() {
    var d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.diameter / 2) {
      return true;
    } else {
      return false;
    }
  }
  this.drag = function() {
    ellipse(mouseX, mouseY, this.diameter, this.diameter);
  }
}

//set boolean isInside to false
var isInside = false;
var time = 0;
var outlineSpeed = 0.025;

function setup() {
  createCanvas(400, 400);
  circle1 = new Circle(random(width / 2), random(height / 2), 30);
  circle2 = new Circle(random(width / 2, width), random(0, height / 2), 30);
  circle3 = new Circle(random(width / 2), random(height / 2, height), 30);
  circle4 = new Circle(random(width / 2, width), random(height / 2, height), 30);

}

function draw() {
  background(220, 200, 200);
  time++;

  circle1.outline = circle1.outline + outlineSpeed;
  if (circle1.outline > 3 || circle1.outline < 0.2) {
    outlineSpeed = outlineSpeed * -1;
  }

  circle2.outline = circle2.outline + outlineSpeed;
  if (circle2.outline > 3 || circle2.outline < 0.2) {
    outlineSpeed = outlineSpeed * -1;
  }

  circle3.outline = circle3.outline + outlineSpeed;
  if (circle3.outline > 3 || circle3.outline < 0.2) {
    outlineSpeed = outlineSpeed * -1;
  }

  circle4.outline = circle4.outline + outlineSpeed;
  if (circle4.outline > 3 || circle4.outline < 0.2) {
    outlineSpeed = outlineSpeed * -1;
  }

  beginShape(QUADS);
  strokeWeight(1);
  fill(200, 100, 100)
  vertex(circle1.x, circle1.y)
  vertex(circle2.x, circle2.y)
  vertex(circle4.x, circle4.y)
  vertex(circle3.x, circle3.y)
  endShape(CLOSE);

  fill(255);
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();

  strokeWeight(1);
  if (mouseIsPressed && circle1.isInside()) {
    circle1.x = mouseX;
    circle1.y = mouseY;
    text("Circle x:" + int(circle1.x) + " y:" + int(circle1.y), circle1.x + 20, circle1.y);
  }

  if (mouseIsPressed && circle2.isInside()) {
    circle2.x = mouseX;
    circle2.y = mouseY;
    text("Circle x:" + int(circle2.x) + " y:" + int(circle2.y), circle2.x + 20, circle2.y);
  }

  if (mouseIsPressed && circle3.isInside()) {
    circle3.x = mouseX;
    circle3.y = mouseY;
    text("Circle x:" + int(circle3.x) + " y:" + int(circle3.y), circle3.x + 20, circle3.y);
  }

  if (mouseIsPressed && circle4.isInside()) {
    circle4.x = mouseX;
    circle4.y = mouseY;
    text("Circle x:" + int(circle4.x) + " y:" + int(circle4.y), circle4.x + 20, circle4.y);
  }
}
