// declare varibales for song and images
let song;
let img;
let img1;

// Load the JSON data
let data;
function preload() {
  data = loadJSON("BattingMostInns.json");
}

// variable for animation
let barRoll = 0;


function setup() {
  song = loadSound("IPL TRUMPET.mp3", loaded);
  
//   object create
  data = Object.values(data);
  
//   canvas create
  createCanvas(860, 740);

  img = loadImage("logo.png");
  img1 = loadImage("IPL.png");
  background("#F9F9F9");
  textFont("Trebuchet MS");
  
}
// Song load
function loaded(){
  song.play();
  song.setVolume(0.8);
}

function draw() {
  explainText();
  image(img,10,620, 180,120);
  image(img1,180,695, 400,30);
  
  for (let i = 0; i < data.length; i++) {
    translate(50, 0);
    let player = data[i];
    push()
// Player run rectangle        
        noStroke();
        fill(34,49,126);
        rect(i*40, 0, 40, player.Runs*3);

// Player Runs from boundaries rectangle
        fill(0,139,209)
        rect(10+i*40, 0, 20, player.RfB*3*barRoll)
        
        translate(i*40, 0);
        rotate(radians(90));
        
// Player Name text
        noStroke();
        fill(255);
        textSize(20);
        text(player.Player, 10, -15);

// Player Runs Text
        textSize(16);
        fill(34,49,126);
        textStyle(BOLD);
        text(player.Runs, 165, -15);

// Player Runs from boundaries
        fill(255, 255, 255);
        textStyle(NORMAL);
        text("(" + player.RfB + ")", 200, -15);
    pop();
  }
  
// Animate the runs from boundaries rectangle
  barRoll += 0.005;
  if (barRoll > 1) {
    noLoop();
  }

//   Function to explain the graph
  function explainText(){
    fill(0);
    textSize(16);
    text(" Only 10 Batsman have scored 100+ runs from boundaries in the IPL", 360, 480);
    text(" Chris Gayle's name comes 3 times in the top 10 list of players who\n have scored the most runs from boundaries in the IPL and ofcourse\n there is ABD. Gayle's 175 runs innings had 154 runs which is the\n highest total in boundaries", 360, 520);
    text(" But it was Jayasuriya who has the highest (89%) of runs scored\n from boundaries in the IPL.", 360, 620);
  }
}

function mousePressed() {
  if (mouseButton === RIGHT) {
    saveGif("mySketch", 3, 1);
  }
}
