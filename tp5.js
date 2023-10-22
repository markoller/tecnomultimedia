//Martina Koller, 93526/7
//video: https://youtu.be/5Jn9a4uOQuU

let j;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  imageMode(CENTER);

  j = new juego();
}

function draw() {
  background(200);
  textFont("Pixelify Sans");

  j.actualizar();
  j.dibujar();
}

function keyPressed() {
  j.movimiento();
}

function mousePressed() {
  j.mouse();
}
