let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
  
  
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

//function mousePressed() {
//  let r = random(10, 50);
//  let b = new Bubble(mouseX, mouseY, r);
//  bubbles.push(b);
//  }

function draw() {
  strokeWeight(4);
  stroke(234, 176, 139);
  fill(215, 211, 225);
  rect(0, 0, 300, 400);
  noFill();
  noStroke();
  stroke(234, 176, 139);
  fill(59, 90, 185);
  rect(300, 0, 300, 400);
  noFill();
  noStroke();  
  for (let i = 0; i < bubbles.length; i++) {
  bubbles[i].move();
  bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = [221, 120, 44];
  }
  
  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = [223, 198, 109];
      //console.log("CLICKED ON BUBBLE!"); 
    }
  }
  
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  
  show() {
    stroke(234, 176, 139);
    strokeWeight(4);
    fill(this.brightness);
    ellipse(this.x, this.y, this.r * 2);
  }
}