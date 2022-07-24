// https://in.bookmyshow.com/api/explore/v1/discover/regions
// { "BookMyShow": "TopCities": [], "OtherCities": []}

let img;
let data;
function preload() {
  data = loadJSON("https://in.bookmyshow.com/api/explore/v1/discover/regions");
}

function setup() {
  createCanvas(700, 700);
  background(51, 53, 69);
  img = loadImage("bookmyshow.png");
  let saveButton = createButton("Save Art");
  saveButton.position(width + 300, height - 50);
  saveButton.mousePressed(saveArt);
}

function draw() {
  title();
  subtitle();
  const smallCities = data.BookMyShow.OtherCities;
  for (let city of smallCities) {
    const name = city.RegionName;
    const X = map(city.Long, 68, 97, 0, width);
    const Y = map(city.Lat, 8, 37, height, 0);
    fill(245, 245, 245);
    ellipse(X, Y, 6, 6, 50);

    const topcities = data.BookMyShow.TopCities;
    for (let city of topcities) {
      const name = city.RegionName;
      const X = map(city.Long, 68, 97, 0, width);
      const Y = map(city.Lat, 8, 37, height, 0);
      fill(248, 67, 100, 50);
      ellipse(X, Y, 30, 30);
      textAlign(RIGHT);
      textSize(13);
      fill(255);
      text(name, X, Y);
    }
  }
  image(img, 150, 0, 80, 60);

  function title() {
    textAlign(CENTER);
    textSize(25);
    textFont("Trebuchet MS");
    fill(255);
    text("Book      Show's location of all the Screens", 350, 35);
  }
  function subtitle() {
    textAlign(CENTER);
    textSize(20);
    textFont("Trebuchet MS");
    fill(248, 67, 100);
    text("10 Top Cities", 550, 90);
    fill(255);
    text("1600+ Cities", 550, 115);
  }
}
// save image
function saveArt() {
  saveCanvas("BookMyShow.jpg");
}
// end of save image
// end of BMSMap.js



