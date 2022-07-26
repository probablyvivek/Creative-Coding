let data;


function preload() {
  data = loadJSON('Neeraj.json');
}

function setup() {
  createCanvas(800, 400);
  
}

function draw() {
  background(20);
  for (let i = 0; i < 11; i++) {
    
    let d = data[i];
    let jav = map(data[i].Throw, 87.46, 89.94, 50,100);
    


  }
}

