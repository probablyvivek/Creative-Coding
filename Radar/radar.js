function preload(){
  data = loadJSON("data.json")
}
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  textAlign(CENTER);
  textSize(10)
}
let x = 0; // when this is 0, we use IMDB
 // when this is 1, we use Profit
function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);
  translate(width/2, height/2);
  
  noFill();
  ellipse(0,0, 300, 300);
  stroke(255,0,0);
  fill(255,0,0,50)
  
  beginShape();
  for(let i=0; i<12;i++){
    myGenreProfit = data[i].Profit;
    myGenreIMDB = data[i].IMDB;
    myGenreName = data[i].Genre;
    
    const distanceProfit = map(myGenreProfit,0,3,0,150);
    const distanceIMDB = map(myGenreIMDB, 0, 10, 0, 150);
    const distance = map(x,0, 1,distanceIMDB,distanceProfit);
    vertex(distance*cos(i*30), distance*sin(i*30));

    
    stroke(200);
    strokeWeight(1);
    line(0,0, 150*cos(i*30), 150*sin(i*30));
    
    fill(255,0,0);
    text(myGenreName, 180*cos(i*30), 180*sin(i*30));

    fill(255,0,0,50);
    strokeWeight(2);
    stroke(0);
  }
  endShape(CLOSE);
  
  strokeWeight(0.5);
  stroke(200);
  fill(0);
  
  x = x+0.001;
  
  
  if(x>1){
    x = 0;
  }
  
}