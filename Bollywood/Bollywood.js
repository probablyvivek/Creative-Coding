// read the json file Bollywood.json
function preload() {
  data = loadJSON("Bollywood.json");
} // Sort the data according to the Year

// Setup
function setup() {
  createCanvas(1350, 700);
  background('cornsilk');
  fill(0, 0, 0, 1);
  rect(0, 0, 1350, 700);
  textFont("Trebuchet MS");
  // saveImg();
}

// Call the functions
function draw() {
  legendRead();
  drawSquare1();
  drawSquare2();
  movieTitle();
  credit();
}

function star(x, y, radius) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let angle = i * TWO_PI / 5;
    vertex(x + cos(angle) * radius, y + sin(angle) * radius);
  }
  endShape(CLOSE);
}
// Function to create the Squares for the first half
function drawSquare1() {
  // 5 squares for first 5 movies
  for (let i = 0; i < 5; i++) {
    // Color according to the Genre
    if (data[i].Genre == "Action") {
      fill(217,4,40);
    } else if (data[i].Genre == "Romance") {
      fill(254, 153, 200);
    } else if (data[i].Genre == "Drama") {
      fill(168, 218, 220);
    } else if (data[i].Genre == "Thriller") {
      fill(140, 154, 174);
    } else {
      fill(251,86,7);
    }
    stroke(0);
    strokeWeight(2);
    rect(i * 200 + 50, 120, 150, 150);

    fill(0);
    textSize(12);
    strokeWeight(0);
    text(data[i].Movie + "|" + data[i].Year, i * 200 + 50, 285);

    textSize(10);
    textStyle(NORMAL);
    text("Dir: " + data[i].Director, i * 200 + 50, 300);

    // TODO: Learn how to use max and min to get the max and min value of the array instead of manually writing it

    // Budget Ellipse
    let budget = data[i].Budget;
    let mappedBudget = map(budget, 140000000, 1270000000, 1, 10);
    stroke(33, 37, 41);
    strokeWeight(2);
    fill(255, 229, 217, 200);
    ellipseMode(CENTER);
    ellipse(i * 200 + 125, 200, mappedBudget * 10, mappedBudget * 10);

    // Revenue Ellipse
    let revenue = data[i].Revenue;
    let mappedRevenue = map(revenue, 324535000, 3959242500, 1, 10);
    fill(168, 201, 87, 200);
    ellipseMode(CENTER);
    ellipse(i * 200 + 125, 200, mappedRevenue * 8, mappedRevenue * 8);

    // Profit Factor Ellipse
    // let profit = data[i].ProfitFactor;
    // let mappedProfit = map(profit, 0, 4, 1, 10);
    // fill(168, 201, 87, 100);
    // ellipseMode(CENTER);
    // ellipse(i * 200 + 125, 200, mappedProfit * 4, mappedProfit * 4);

    // Arrow for Duration
    let duration = data[i].Duration;
    let mappedDuration = map(duration, 140, 176, 1, 10);
    fill(100);
    stroke(0);
    strokeWeight(3);
    rect(i * 200 + 42, 120, 2, mappedDuration * 10);

    // Arc for Rating
    let rating = data[i].Rating;
    let mappedRating = map(rating, 5.3, 8, 1, 10);
    fill(245,197,24,200);
    stroke(0);
    strokeWeight(1);
    ellipseMode(CENTER);
    ellipse(i * 200 + 170, 140, mappedRating * 4, mappedRating * 4);
    // textStyle(NORMAL);
    // textSize(20);
    // strokeWeight(1);
    // fill(0);
    // text(data[i].Rating.toFixed(1), i * 200 + 165, 140);
  }
}

// Function to create the Squares for the second half
function drawSquare2() {
  // 5 squares for next 5 movies
  for (let k = 5; k < 10; k++) {
    if (data[k].Genre == "Action") {
      fill(217,4,40);
    } else if (data[k].Genre == "Romance") {
      fill(254, 153, 200);
    } else if (data[k].Genre == "Drama") {
      fill(168, 218, 220);
    } else if (data[k].Genre == "Thriller") {
      fill(140, 154, 174);
    } else {
      fill(251,86,7);
    }
    stroke(0);
    strokeWeight(2);
    rect(k * 200 - 950, 350, 150, 150);

    fill(0);
    strokeWeight(0);

    textSize(12);
    text(data[k].Movie + "|" + data[k].Year, k * 200 - 950, 515);

    textSize(10);
    textStyle(NORMAL);
    text("Dir: " + data[k].Director, k * 200 - 950, 530);

    
    
    // Budget Ellipse
    let budget = data[k].Budget;
    let mappedBudget = map(budget, 140000000, 1270000000, 1, 10);
    stroke(33, 37, 41);
    strokeWeight(2);
    fill(255, 229, 217, 200);
    ellipseMode(CENTER);
    ellipse(k * 200 - 880, 430, mappedBudget*10, mappedBudget*10);

    // Revenue Ellipse
    let revenue = data[k].Revenue;
    let mappedRevenue = map(revenue, 324535000, 3959242500, 1, 10);
    fill(168, 201, 87, 200);
    ellipseMode(CENTER);
    ellipse(k * 200 - 880, 430, mappedRevenue * 8, mappedRevenue * 8);

    // // Profit Factor Ellipse
    // let profit = data[k].ProfitFactor;
    // let mappedProfit = map(profit, 0, 4, 1, 10);
    // fill(168, 201, 87, 100);
    // ellipseMode(CENTER);
    // ellipse(k * 200 - 880, 430, mappedProfit * 4, mappedProfit * 4)
    
    let rating = data[k].Rating;
    let mappedRating = map(rating, 5.3, 8, 1, 10);
    fill(245,197,24,200);
    stroke(0);
    strokeWeight(1);
    ellipseMode(CENTER);
    ellipse(k * 200 - 830, 370, mappedRating * 4, mappedRating * 4);







  

    

    // Arrow for Duration
    let duration = data[k].Duration;
    let mappedDuration = map(duration, 140, 176, 1, 10);
    fill(100);
    stroke(0);
    strokeWeight(3);
    rect(k * 200 - 958, 350, 2, mappedDuration * 10);

    textStyle(NORMAL);
    textSize(20);
    strokeWeight(1);
    fill(0);

    // round to 2 decimal places
    // text(data[k].Rating.toFixed(1), k * 200 - 835, 370);
  }
}

// Function to create the movie title
function movieTitle() {
  fill(0);
  textSize(40);
  strokeWeight(0);
  textAlign(LEFT);
  text("Top 10 Shahrukh Khan Movies", 50, 50);
  textStyle(NORMAL);
  textSize(14);
  text("Sorted according to the Year Released", 50, 75);
}

function legendRead() {
  // Creating the Legend
  fill(0);
  strokeWeight(0);
  textSize(11);
  text("Factors Scaled between 1 - 10", 1178, 688);

  stroke(0);
  strokeWeight(1);
  fill(251,86,7);
  rect(1180, 520, 150, 150);
  ellipseMode(CENTER);

  fill(245,197,24,200);
  ellipse(1306, 535, 20, 20);

  fill(255, 229, 217, 200);
  stroke(33, 37, 41);
  strokeWeight(2);
  ellipse(1256, 595, 100, 100);

  fill(168, 201, 87, 200);
  ellipse(1256, 595, 70, 70);

  // fill(168, 201, 87, );
  // ellipse(1256, 595, 40, 40);

  fill(100);
  stroke(0);
  strokeWeight(3);
  rect(1170, 520, 2, 80);

  
  // Genre Legend
  noStroke();
  fill(0);
  
  textSize(20);
  text("Genre", 1225, 140);
  
  fill(217,4,40);
  rect(1200, 150, 120, 40);
  textSize(16);
  fill(0);
  text("Action", 1230, 175);

  fill(254, 153, 200);
  rect(1200, 200, 120, 40);
  fill(0);
  text("Romance", 1230, 225);

  fill(168, 218, 220);
  rect(1200, 250, 120, 40);
  fill(0);
  text("Drama", 1230, 275);

  fill(140, 154, 174);
  rect(1200, 300, 120, 40);
  fill(0);
  text("Thriller", 1230, 325);

  fill(251,86,7);
  rect(1200, 350, 120, 40);
  fill(0);
  text("Masala", 1230, 375);

  // Lines for the legend
  stroke(0);
  strokeWeight(1);
  line(1305, 530, 1305, 480);
  line(1205, 550, 1205, 480);
  line(1150, 618, 1260, 618);
  line(1150, 645, 1260, 645);

  // Text for the legend
  fill(0);
  // textSize(16);
  // text("IMDb 7.5", 1263, 535);
  textSize(12);
  strokeWeight(0);
  text("Budget", 1150, 645);
  text("Revenue", 1150, 618);
  text("IMDb Rating", 1255, 480);
  text("Genre", 1190, 480);

  // rotate text 90 Duration
  push();
  translate(1164, 564);
  rotate(radians(270));
  text("Duration", 0, 0);
  pop(); //  How to read squar
}

function credit() {
  noStroke();
  fill(0);
  textSize(14);
  text("Data Source: India in Pixels", 10, 675);
  text("Created by @Stateastic using p5.js", 10, 690);
}


// Saving the image by creating a button
// function saveImg() {
//   btnSave = createButton("Save Image");
//   btnSave.position(50, 670);
//   btnSave.mousePressed(saveImg);
//   btnSave.style("background-color", "cornsilk");
//   if (btnSave.mousePressed) {
//     saveCanvas("Top10ShahrukhKhanMovies", "png");
//   }
// }

