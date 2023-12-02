class aventura {

  constructor(textos, img) {
    this.bot = [];
    this.pantalla = 0;
    this.juego = new juego();

    //se crean variables locales para los textos e imágenes
    this.misTextos = textos;
    this.misImagenes = img;

    //se llama a cuatro botones distintos, botón izquierda, botón derecha, botón en el centro y botón del juego
    this.bot.push(new boton(200 - 100, 450, 90)); //0
    this.bot.push(new boton(600 - 100, 450, 90)); //1
    this.bot.push(new boton(width/2 - 90, 450, 90)); //2
    this.bot.push(new boton(width/2 - 90, 400, 90)); //3
  }

  actualizar() {
    if (this.pantalla == 6) {
      this.juego.actualizar();
    }
  }

  //se dibujan las pantallas con texto, imágenes y botones
  dibujar() {
    if (this.pantalla == 0) {
      this.juego.resetearJuego();
      background(0, 0, 200);
      image(this.misImagenes[0], 0, 0, 800, 600);
      this.bot[0].dibujar("comenzar");
      this.bot[1].dibujar("créditos");
      textSize(9);
      textFont("Ledger");
      fill(255);
      text("pantalla 0", 775, 590);
      textSize(64);
      textFont("Amita");
      text("Cumbres Borrascosas", width/2, 150);
    } else if (this.pantalla == 1) {
      this.pantvista (1, 1, 0, 0, 125);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 2) {
      this.pantvista (2, 2, 255, 1, 190);
      this.bot[0].dibujar("Edgar"); //pantalla 3
      this.bot[1].dibujar("Heathcliff"); //pantalla 7
    } else if (this.pantalla == 3) {
      this.pantvista (3, 3, 0, 2, 200);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 4) {
      this.pantvista (4, 4, 255, 3, 180);
      this.bot[0].dibujar("seguir venganza"); //pantalla 5
      this.bot[1].dibujar("dejar venganza"); //pantalla 11
    } else if (this.pantalla == 5) {
      this.pantvista (5, 5, 255, 4, 85);
      this.juego.resetearJuego();
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 6) {
      background(0);
      imageMode(CENTER, CENTER);
      this.juego.dibujar();
    } else if (this.pantalla == 7) {
      this.pantvista (7, 7, 255, 6, 160);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 8) {
      this.pantvista (8, 8, 255, 7, 180);
      this.bot[0].dibujar("seguir con Heathcliff"); //pantalla 9
      this.bot[1].dibujar("dejar a Heathcliff"); //pantalla 3
    } else if (this.pantalla == 9) {
      this.pantvista (9, 9, 0, 8, 140);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 10) {
      this.pantvista (10, 10, 255, 9, 100);
      this.bot[2].dibujar("volver al inicio");
    } else if (this.pantalla == 11) {
      this.pantvista (11, 11, 255, 10, 100);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 12) {
      this.pantvista (12, 12, 255, 11, 100);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 13) {
      this.pantvista (13, 13, 255, 12, 120);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 14) {
      this.pantvista (14, 14, 255, 13, 120);
      this.bot[2].dibujar("siguiente");
    } else if (this.pantalla == 15) {
      this.pantvista (15, 15, 255, 14, 125);
      this.bot[2].dibujar("volver al inicio");
    } else if (this.pantalla == 16) {
      background(0, 200, 0);
      image(this.misImagenes[16], 0, 0, 800, 900);
      this.bot[2].dibujar("volver a inicio");
      textSize(9);
      textFont("Ledger");
      fill(255);
      text("pantalla 16", 775, 590);
      textSize(25);
      fill(0);
      text("CREDITOS", width/2, height/3/4);
      textSize(20);
      text("Cumbres borrascosas por Emily Brontë", width/2, height/3/4 + 110);
      text("Programación: Martina Koller y Alexia Anduaga", width/2, height/3/4 + 160);
      text("Diseño: Martina Koller y Alexia Anduaga", width/2, height/3/4 + 210);
      textSize(18);
      text("Tecnología Multimedial 1, comisión 2", width/2, height/3/4 + 290);
    } else if (this.pantalla == 17) {
      this.pantvista (6, 17, 255, 5, 100);
      this.bot[2].dibujar("volver al inicio");
    } else if (this.pantalla == 18) {
      this.pantvista (17, 18, 255, 15, 100);
      this.bot[2].dibujar("volver al inicio");
    }

    if (this.juego.estado == "ganaste") {
      this.bot[3].dibujar("siguiente");
    }
    if (this.juego.estado == "perdiste") {
      this.bot[3].dibujar("siguiente");
    }
  }

  //lógica de pantallas según se clickee dentro de los botones
  mouse() {
    if (this.pantalla === 0 && this.bot[0].distancia()) {
      this.pantalla = 1;
    } else if (this.pantalla === 0 && this.bot[1].distancia()) {
      this.pantalla = 16;

      //recorrido 1
    } else if (this.pantalla === 1 && this.bot[2].distancia()) {
      this.pantalla = 2;
    } else if (this.pantalla === 2 && this.bot[0].distancia()) {
      this.pantalla = 3;
    } else if (this.pantalla === 3 && this.bot[2].distancia()) {
      this.pantalla = 4;
    } else if (this.pantalla === 4 && this.bot[0].distancia()) {
      this.pantalla = 5;
    } else if (this.pantalla === 5 && this.bot[2].distancia()) {
      this.pantalla = 6;

      //del recorrido 1 al 3
    } else if (this.pantalla === 4 && this.bot[1].distancia()) {
      this.pantalla = 11;

      //recorrido 2
    } else if (this.pantalla === 2 && this.bot[1].distancia()) {
      this.pantalla = 7;
    } else if (this.pantalla === 7 && this.bot[2].distancia()) {
      this.pantalla = 8;
    } else if (this.pantalla === 8 && this.bot[0].distancia()) {
      this.pantalla = 9;
    } else if (this.pantalla === 9 && this.bot[2].distancia()) {
      this.pantalla = 10;
    } else if (this.pantalla === 10 && this.bot[2].distancia()) {
      this.pantalla = 0;

      //del recorrido 2 al 1
    } else if (this.pantalla === 8 && this.bot[1].distancia()) {
      this.pantalla = 3;

      //recorrido 3
    } else if (this.pantalla === 11 && this.bot[2].distancia()) {
      this.pantalla = 12;
    } else if (this.pantalla === 12 && this.bot[2].distancia()) {
      this.pantalla = 13;
    } else if (this.pantalla === 13 && this.bot[2].distancia()) {
      this.pantalla = 14;
    } else if (this.pantalla === 14 && this.bot[2].distancia()) {
      this.pantalla = 15;
    } else if (this.pantalla === 15 && this.bot[2].distancia()) {
      this.pantalla = 0;
    } else if (this.pantalla === 16 && this.bot[2].distancia()) {
      this.pantalla = 0;
    } else if (this.pantalla === 17 && this.bot[2].distancia()) {
      this.pantalla = 0;
    } else if (this.pantalla === 18 && this.bot[2].distancia()) {
      this.pantalla = 0;
    }

    if (this.juego.estado === "ganaste" && this.bot[3].distancia()) {
      imageMode(CORNER);
      this.juego.resetearJuego();
      this.pantalla = 18;
    } else if (this.juego.estado === "perdiste" && this.bot[3].distancia()) {
      imageMode(CORNER);
      this.juego.resetearJuego();
      this.pantalla = 17;
    }
  }

  //movimiento del jugador
  teclas() {
    this.juego.moverC();
  }

  pantvista (img, numP, col, texto, tamY) {
    background(200);
    image(this.misImagenes[img], 0, 0, 800, 800);
    textSize(9);
    textFont("Ledger");
    fill(255);
    text("pantalla " + numP, 775, 590);
    textSize(18);
    fill(col);
    text(this.misTextos[texto], 25, 25, 25 + 725, 25 + tamY);
  }
}
