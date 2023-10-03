let p;

function setup() {
  createCanvas(600, 600);

  p = new Acuario();
}


function draw() {
  background(50, 4, 180);

  p.actualizar();
  p.dibujar();
}
