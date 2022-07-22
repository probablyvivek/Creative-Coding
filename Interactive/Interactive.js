let points = [];
let mult;
let r1, r2, b1, b2, g1, g2;


function setup() {
  createCanvas(800, 680);
  frameRate(30);
  let resetButton = createButton("Randomize");
  resetButton.position(width - 180, height - 50);
  resetButton.mousePressed(resetPoints);

  let saveButton = createButton("Save Art");
  saveButton.position(width - 20, height - 50);
  saveButton.mousePressed(saveArt);

  background(40);
  angleMode(DEGREES);
  noiseDetail(1);

  let density = 100;
  let space = width / density;

  for (let x = 0; x < width; x += space) {
    for (let y = 0; y < height; y += space) {
      let p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }

  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
  mult = random(0.001, 0.05);
}

function draw() {
  shapes();
}


function shapes() {
  noStroke();
  fill(255);
  for (let i = 0; i < points.length; i++) {
    let r = map(points[i].x, 0, width, r1, r2);
    let g = map(points[i].y, 0, height, g1, g2);
    let b = map(points[i].x, 0, width, b1, b2);
    let alpha = map(
      dist(width / 2, height / 2, points[i].x, points[i].y),
      0,
      200,
      255,
      0
    );

    fill(r, g, b, alpha);

    let angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      0,
      720
    );

    points[i].add(createVector(cos(angle), sin(angle)));

    if (dist(width / 2, height / 2, points[i].x, points[i].y) < 300) {
      ellipse(points[i].x, points[i].y, 1, 1);
    }
  }
}






function resetPoints() {
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
  mult = random(0.001, 0.05);
  location.reload();
}

function saveArt() {
  saveCanvas("mySketch", "png");
}
