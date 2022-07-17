let x = 600;
let y = 600;
let circleSize = 100;

function setup() {
  createCanvas(x, y);
  frameRate(10);
}

function draw() {
  background(random(255), random(255), random(255), 10);
  strokeWeight(5);
  fill(random(255), random(255), random(255), 300);
  circle(random(x), random(y), random(circleSize));
  fill(random(255), random(255), random(255), 100);
  circle(random(x), random(y), random(circleSize));
  
  if (circleSize < 200){
    circleSize++
  }
  else{
    circleSize =100;
  }  
}


