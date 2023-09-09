//Martina Koller, 93526/7
//video: https://www.youtube.com/watch?v=rZVFS6LEzzs

function preload() {

  //carga de imagenes
  titulo = loadImage("media/titulo.png");
  perdida = loadImage("media/perdida.png");
  gana = loadImage("media/ganar.png");

  //carga imagenes fondos y +
  fondo = loadImage("media/fondo.png");
  fondoComoJugar = loadImage("media/fondoCoJug.png");
  teclas = loadImage("media/teclas.png");
  fondoGan = loadImage("media/fondoGan.png");
  fondoJuego = loadImage("media/fondoJuego.png");
  jugadores = loadImage("media/jugadores.png");

  //carga imagenes botones
  comoJugar = loadImage("media/comojugar.png");
  creditos = loadImage("media/creditos.png");
  jugar = loadImage("media/jugar.png");
  menu = loadImage("media/menu.png");

  //carga imagenes spritesheet
  jugadorSpritesheet = loadImage("media/spritesheet.png");
  imagenPelota = loadImage("media/pelota.png");
}

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
  imageMode(CENTER)
  frameRate(60);

  //asignacion de valor jugador
  x = width/2;
  y = height/2;

  //asignacion de valor pelota
  px = random(110, 220);
  py = random(200, 450);
  velx = 4;
  vely = 4;

  //pantalla
  pantalla = 0;

  // variables contador
  contador = 121;
  tiempoAnterior = 0;
  restaContador = 1;

  //spritesheet valor
  jugadorActual = jugadorSpritesheet.get(0, 0, 57, 70);
}


function draw() {
  textFont("VT323");

  //medidas botones + mouse
  medidasJugar = mouseX > (width/2) - 70 && mouseX < (width/2) + 70 && mouseY > 350 - 35 && mouseY < 350 + 35;
  medidasComoJugar = mouseX > (width/2) - 125 && mouseX < (width/2) + 125 && mouseY > 430 - 35 && mouseY < 430 + 35;
  medidasCreditos = mouseX > (width/2) - 80 && mouseX < (width/2) + 80 && mouseY > 510 - 35 && mouseY < 510 + 35;
  medidasMenu = mouseX > 650 - 70 && mouseX < 650 + 70 && mouseY > 520 - 35 && mouseY < 520 + 35;



  //titulo
  if (pantalla === 0) {
    background(200);
    imagenFondo(fondo);

    //imagen titulo
    image(titulo, width/2, height/2 - 132);
    fill(255);

    //botones hover
    if (medidasJugar) {
      tint(180);
      image(jugar, width/2, 350, 140, 70);
      noTint();
    } else {
      image(jugar, width/2, 350, 140, 70);
    }

    if (medidasComoJugar) {
      tint(180);
      image(comoJugar, width/2, 430, 250, 70);
      noTint();
    } else {
      image(comoJugar, width/2, 430, 250, 70);
    }

    if (medidasCreditos) {
      tint(180);
      image(creditos, width/2, 510, 160, 70);
      noTint();
    } else {
      image(creditos, width/2, 510, 160, 70);
    }
  }

  //pantalla juego
  if (pantalla === 1) {
    background(200);
    imagenFondo(fondoJuego);
    imagenFondo(jugadores);

    dentroDeCancha = x > width/2 - 320 && x < width/2 + 320 && y > (height/2 + 40) - 225 && y < (height/2 + 40) + 225;

    //rectangulo cancha
    stroke(216, 191, 131);
    fill(216, 191, 131);
    rect(width/2, height/2 + 40, 640, 450);

    if (dentroDeCancha == false) {
      pantalla = 2;
    }


    pelota();
    image(imagenPelota, px, py);

    d = dist(x, y, px, py);

    if (d <= 60) {
      pantalla = 2;
    }

    //contador
    let tiempoActual = millis();
    let tiempoTranscurrido = tiempoActual - tiempoAnterior;

    if (tiempoTranscurrido >= 1000) {
      contador -= restaContador;
      tiempoAnterior = tiempoActual;
    }

    if (contador <= 60) {
      velx = 6 * (velx / abs(velx));
      vely = 6 * (vely / abs(vely));
    }

    if (contador <= 0) {
      pantalla = 3;
    }

    //contador escrito
    textAlign(CENTER);
    fill(230);
    strokeWeight(5);
    stroke(0);
    textSize(60);
    text(contador, width/2, 80);

    //cambiar frame jugador
    if (keyIsDown(RIGHT_ARROW)) {
      jugadorActualFrame = 3;
    } else if (keyIsDown(LEFT_ARROW)) {
      jugadorActualFrame = 2;
    } else if (keyIsDown(UP_ARROW)) {
      jugadorActualFrame = 1;
    } else if (keyIsDown(DOWN_ARROW)) {
      jugadorActualFrame = 0;
    }

    image(jugadorSpritesheet, x, y, 57, 70, jugadorActualFrame * 57, 0, 57, 70);
  }

  //pantalla pierde
  if (pantalla === 2) {
    background(0);
    image(perdida, width/2 - 10, height/2);

    fill(255);
    textSize(40);
    text("¿Volver a jugar?", 650, 470);

    //boton menu
    botonMenu();
  }

  //pantalla gana
  if (pantalla == 3) {
    imagenFondo(fondoGan);
    image(gana, width/2, height/2 - 25);

    fill(255);
    textSize(40);
    text("¿Volver a jugar?", 650, 470);

    //boton menu
    botonMenu();
  }

  //pantalla Como Jugar
  if (pantalla === 4) {
    background(200);
    imagenFondo(fondoComoJugar);
    image(teclas, 630, height/2 + 50, 180, 112);

    //texto instrucciones
    textAlign(CENTER);
    textSize(80);
    stroke(0);
    strokeWeight(6);
    fill(87, 136, 155);
    text("Como jugar", width/2, 80);
    noStroke();
    textSize(25);
    fill(255);
    text("¡Faltan 2 minutos para que termine la hora de Educación Física y sos\n el último del equipo rojo en la cancha!", width/2, 150);
    text("Utilizando las flechas arriba, abajo, izquierda y derecha esquiva la\n pelota hasta que el tiempo termine para llevar a tu equipo a la victoria", width/2, 220);
    text("La velocidad de la pelota aumentará\n a medida que el equipo azul se desespere", 280, 370);
    fill(255, 0, 0);
    stroke(0);
    strokeWeight(4);
    textSize(40);
    text("¡CUIDADO!", 280, 340);

    //boton menu
    botonMenu();
  }

  //pantalla créditos
  if (pantalla === 5) {
    background(200);
    imagenFondo(fondoComoJugar);

    fill(118, 237, 112);
    textAlign(CENTER);
    textSize(80);
    stroke(0);
    strokeWeight(6);
    text("Creditos", width/2, 200);
    fill(255);
    textSize(30);
    noStroke();
    text("Diseño : Martina Koller\n Programación : Martina Koller\n Historia : Martina Koller", width/2, height/2);

    botonMenu();
  }
}
