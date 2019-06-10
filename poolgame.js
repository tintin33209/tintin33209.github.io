let bubbles = [];
let bg;
let poolcue;

let ball;
let poolballs = [];

function preload() {
  ball = loadImage('Ball0.png');
  poolcue = loadImage('Pool Cue2.png');
  for (let i = 0; i < 16; i++) {
    poolballs[i] = loadImage('Ball' + i + '.png'); 
  }
//  print(poolballs)
}

function setup() {
  bg = loadImage('Pool Table2.png');
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let poolball = random(poolballs);
    let b = new Bubble(x, y, r, poolball);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  background(bg);
  
//  if (poolcue.intersects(poolball[1])) {
//    background(200, 0, 100);
//  }
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
//    poolcue.x = mouseX;
//    poolcue.y = mouseY;
  }
}

class Bubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.poolball = img;
    
  }
  
//  intersects(other) {
//    let d = dist(this.x, this.y, other.x, other.y);
//    return (d < this.r + other.r);
    // if (d < this.r + other.r) {
    //   return true;
    // } else {
    //   return false;
    // }
//  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.poolball = random(poolballs);    
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.poolball, this.x, this.y, this.r, this.r);
//    image(poolcue);
//    stroke(255);
//    strokeWeight(4);
//    fill(this.brightness, 125);
//    ellipse(this.x, this.y, this.r * 2);
  }
}