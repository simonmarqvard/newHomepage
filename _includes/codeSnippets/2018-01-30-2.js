let walkers = [];
let totalWalkers = 40;

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i & lt; totalWalkers; i++) {
    walkers.push(new Walker(random(width / 3, width / 3 * 2), random(height / 3, height / 3 * 2)));
  }
}

function draw() {
  background(220);
  //ellipse(width/2,height/2,10,10);
  for (var i = 0; i & lt; totalWalkers - 1; i++) {
    walkers[i].display();
    walkers[i].update();

    push();
    beginShape(QUADS);
    fill(255, 255, 255)
    vertex(walkers[i + 1].x + 5, walkers[i + 1].y)
    vertex(walkers[i + 1].x - 5, walkers[i + 1].y)
    vertex(walkers[i].x - 5, walkers[i].y)
    vertex(walkers[i].x + 5, walkers[i].y)
    endShape(CLOSE);
    pop();
  }
}
