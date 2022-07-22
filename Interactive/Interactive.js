let dialogue1 = [
  " Teri aankhon ki namkeen mastiyan,\n Teri hansi ki beparwaah gustakhiyaan,\n Teri zulfon ki leharaati angdaiyaan, \n Nahi bhoolunga main\n Jab tak hai jaan, jab tak hai jaan",
];

let dialogue2 = [
  " Tera haath se haath chhodna, \n Tera saayon se rukh modna, \n Tera palat ke phir na dekhna, \n Nahin maaf karunga main, \n Jab tak hai jaan, jab tak hai jaan",
];

let dialogue3 = [
  " Baarishon mein bedhadak tere naachne se,\n Baat baat pe bewajah tere roothne se, \n Chhoti chhoti teri bachkani badmashiyon se, \n Mohabbat karunga main, \n Jab tak hai jaan, jab tak hai jaan",
];

let dialogue4 = [
  " Tere jhoothe kasme vaadon se,\n Tere jalte sulagte khwabon se,\n Teri be-raham duaaon se,\n Nafrat karunga main,\n Jab tak hai jaan, jab tak hai jaan",
];

let dialogue = [dialogue1, dialogue2, dialogue3, dialogue4];

// get random dialogue from array using length
let Quote = dialogue[Math.floor(Math.random() * dialogue.length)];

let points = [];
let factor;
let r1, r2, b1, b2, g1, g2;
let generativeArtCanvas;
let textX;
let textY;

let song;
let sliderVolume;

function setup() {
  createCanvas(390, 744);
  song = loadSound("song.mp3", loaded);
  slider = createSlider(0, 1, 0.5, 0.01);
  frameRate(60);
  textX = random(width - 300);
  textY = random(100, 600);
  generativeArtCanvas = createGraphics(width, height);
  let resetButton = createButton("Randomize");
  resetButton.position(width + 80, height - 50);
  resetButton.mousePressed(resetPoints);

  let saveButton = createButton("Save Art");
  saveButton.position(width + 300, height - 50);
  saveButton.mousePressed(saveArt);

  generativeArtCanvas.background(40);
  generativeArtCanvas.angleMode(DEGREES);
  generativeArtCanvas.noiseDetail(1);

  let density = 100;
  let space = width / density;

  for (let x = 0; x <= width; x += space) {
    for (let y = 0; y <= height; y += space) {
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
  factor = random(0.001, 0.05);

  generativeArtCanvas.blendMode(BLEND);
}

function loaded(){
  song.play();
}

function draw() {
  background(0);
  song.setVolume(slider.value());
  shapes();
  image(generativeArtCanvas, 0, 0);
  quote();
}

function quote() {
  background(0, 0, 0, 0);
  textSize(16);
  fill(255);
  textStyle(BOLD);
  textFont("Trebuchet MS");
  let x = random(width - 330);
  let y = random(100, 600);
  text(Quote, textX, textY);
}

function shapes() {
  generativeArtCanvas.noStroke();
  generativeArtCanvas.fill(255);
  for (let i = 0; i < points.length; i++) {
    let r = map(points[i].x, 0, width, r1, r2);
    let g = map(points[i].y, 0, height, g1, g2);
    let b = map(points[i].x, 0, width, b1, b2);
    let alpha = map(points[i].y, 0, height, 0, 255);
    generativeArtCanvas.fill(r, g, b, alpha);

    let angle = map(
      generativeArtCanvas.noise(points[i].x * factor, points[i].y * factor),
      0,
      1,
      0,
      720
    );
    points[i].add(createVector(cos(angle), sin(angle)));
    if (random(1) > 0.2) {
      generativeArtCanvas.ellipse(points[i].x, points[i].y, 1, 1);
    } else {
      generativeArtCanvas.line(points[i].x, points[i].y, 1, 1);
    }
  }
}
// }

function resetPoints() {
  r1 = random(255);
  r2 = random(255);
  g1 = random(255);
  g2 = random(255);
  b1 = random(255);
  b2 = random(255);
  factor = random(0.001, 0.05);
  location.reload();
}

function saveArt() {
  saveCanvas("mySketch", "png");
}
