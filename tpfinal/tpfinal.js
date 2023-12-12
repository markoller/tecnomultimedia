let aven;
let img = [];
let texto = [];
let instrucciones;
let jugando;
let ganaste;
let perdiste;
let c;
let h;
let conjuro;
let maleficio;

//carga de imagenes y texto
function preload() {
  for (i = 0; i < 18; i++) {
    img.push(loadImage("data/p" + i + ".jpg"));
  }

  texto = (loadStrings("data/parrafos.txt"));

  instrucciones = loadImage('data/instrucciones.jpg');
  jugando = loadImage('data/jugando.jpg');
  ganaste = loadImage('data/ganaste.jpeg');
  perdiste = loadImage('data/perdiste.jpeg');
  c = loadImage('data/c.png');
  h = loadImage('data/h.png');
  conjuro = loadImage('data/conjuro.png');
  maleficio = loadImage('data/maleficio.png');
}

function setup() {
  createCanvas(800, 600);

  aven = new aventura(texto, img);

  textAlign(CENTER, CENTER);
}


function draw() {
  aven.actualizar();
  aven.dibujar();
}

function mousePressed() {
  aven.mouse();
}

function keyPressed() {
  aven.teclas();
  aven.juego.moverC(keyCode);
  aven.juego.cambioP(keyCode);
}
