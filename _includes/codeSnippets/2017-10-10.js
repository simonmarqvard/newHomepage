  class Square {

    constructor(x, y, w, h) {

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.speed = 1;
    }
    display() {
      rectMode(CENTER);
      noStroke();
      fill(255);
      // rect(this.x, this.y, this.w, this.h);
      // noFill();
      stroke(2);
      rect(this.x, this.y, this.w - 2, this.h - 2);


    }
    falling() {
      this.y = this.y + this.speed;

      if (this.y > height - this.w / 2) {
        this.y = height - this.w / 2;
      }
    }
    collide(otherSquare) {
      //othersquare is stand in for other balls in sketch array
      for (var i = 0; i < otherSquare.length; i++) {
        //if the ball is not itself
        if (otherSquare[i] !== this) {
          //calculate distance between objects and determine if they collide. If they do, stop moving.
          //   var dis = dist(this.x, this.y, otherSquare[i].x, otherSquare[i].y);
          var disx = abs(this.x - otherSquare[i].x);
          var disy = abs(this.y - otherSquare[i].y);
          // if (disx < this.x + this.h / 2 + otherSquare[i].x + otherSquare[i].h / 2 && disy < this.w / 2 + otherSquare[i].w / 2) {
          if (disx < this.w - 1 && disy < this.h) {

            this.speed = 0;
          }
        }
      }
    }

    removes() {
      //drive squares out of view
      if (this.speed == 0 || this.y == height - this.w / 2) {
        this.x = this.x + 5;

      }

    }
  }

  //create an array
  var squares = []
  var x;

  function setup() {
    createCanvas(400, 400);
    //initialize squares
    for (var i = 0; i < squares.length; i++) {
      squares.push(new Square());
    }
  }

  function draw() {
    background(220, 100, 100);

    for (var i = 0; i < squares.length; i++) {
      squares[i].display();
      squares[i].falling();
      squares[i].collide(squares);

      if (keyIsPressed) {
        squares[i].removes();
      }
    }
  }

  function mousePressed() {
    squares.push(new Square(mouseX, mouseY, 30, 30));

  }
