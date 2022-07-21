// Setting up an empty array
let bubbles = [];

function setup() {
  createCanvas(800, 800);
  // for (let i = 0; i <100; i++){ 
  //   let x = random(width);
  //   let y = random(height);
  //   let r = random(10,40);
  //   bubbles[i] = new Bubble(x, y, r);
}

function mousePressed() {
  let r = random(10,40);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);
  for(let i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].show();
  }
}

// Create a Bubble Class
class Bubble {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    fill(255,100);
    noStroke();
    ellipse(this.x, this.y, this.r*2);
  }
}
