let angle = 45;

function setup() {
  createCanvas(500, 400);
  background(0);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  noFill();
  strokeWeight(1);
}

function draw() {
  stroke(0, 80);

  //   Rectangle 1
  fill(0, 48, 73);
  rect(0, 0, 500, 400);

  //   Rectangele 2
  fill(255, 255, 255);
  rect(0, height / 2, 600, 210);

  //   Ellipse 1
  fill(247, 126, 0);
  ellipse(width / 2, height / 2, 150, 150);

  //   Ellipse 2
  fill(7, 186, 248);
  ellipse(width / 2, 215, 120, 120);

  //   Ellipse 3
  fill(255, 214, 111);
  ellipse(width / 2, 232, 85, 85);

  //   Strokeweight for atom ellipse
  stroke(141, 154, 174);
  strokeWeight(1.2);

  // Move the origin to the center of the screen
  translate(width / 2, 235);

  // This rotation moves the whole drawing
  rotate(angle);

  // This scale produces the zoom effect
  scale(0.2 * sin(frameCount) + 1);

  // Draw the nucleus
 
  noFill();
  circle(0, 0, 10);

  // Draw the 3 shells around the nucleus
  for (let i = 0; i < 3; i++) {
    noFill();
    ellipse(0, 0, 20, 50);
    rotate(120);
  }

  
  // Draw the electrons
  for (let i = 0; i < 3; i++) {
    fill(220);
    // some maths to put a point on the elliptical shell
    circle(10 * cos(angle * 5), 25 * sin(angle * 5), 3);
    rotate(120);
  }

  angle += 1;

  if (mouseIsPressed == true) {
    saveCanvas("MarsFlag", "jpg");
  }
}
