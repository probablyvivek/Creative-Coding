function setup() {
  createCanvas(600, 450);
}

function draw() {
  background(203, 84, 61);


  //first eye
  stroke(210, 90, 90);
  strokeWeight(10);
  ellipseMode(RADIUS);
  fill(245);
  ellipse(200, 180, 80, 80); // Outer white ellipse
  ellipseMode(CENTER);
  strokeWeight(0);
  fill(80);
  ellipse(200, 220, 70, 70); // Inner gray ellipse
  strokeWeight(0);
  fill(240);

  //second eye
  stroke(210, 90, 90);
  strokeWeight(10);
  ellipseMode(RADIUS);
  fill(245);
  ellipse(400, 180, 80, 80); // Outer white ellipse
  ellipseMode(CENTER);
  strokeWeight(0);
  fill(80);
  ellipse(400, 220, 70, 70); // Inner gray ellipse

  //Mouth
  fill(250);
  stroke(210, 90, 90);
  strokeWeight(10);
  var start = 0 * PI;
  var end = 1 * PI;
  var smile = 0.5 * 300;
  arc(295, 310, smile, smile, start, end);
}

// save image after a long press
function mousePressed() {
  saveCanvas('mySketch', 'jpg');
}