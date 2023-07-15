//Martina Koller, legajo 93526/7
//video: https://youtu.be/QbMZ2GvC6m4

int estado;
int tiempo;
String[] titulo = new String[21];
String[] parrafos = new String[21];
PImage[] ruta = new PImage[22];
PFont parrafostipo;
PFont titulostipo;
PFont finalmalotipo;
PFont botonestipo;
PFont titulocuento;

void setup() {
  size(600, 600);
  textAlign(CENTER, TOP);
  tiempo = 0;
  estado = 0;
  titulo = loadStrings("titulo.txt");
  parrafos = loadStrings("parrafos.txt");
  parrafostipo = loadFont("parrafos.vlw");
  titulostipo = loadFont("titulos.vlw");
  finalmalotipo = loadFont("finalmalo.vlw");
  botonestipo = loadFont("botones.vlw");
  titulocuento = loadFont("titulocuento.vlw");

  for (int i = 0; i < 22; i++) {
    ruta[i] = loadImage("ruta" + i + ".jpg");
  }
}


void draw() {
  stroke(1);
  switch(estado) {
  case 0:
    background(200);
    textFont(titulocuento);
    fill(255);
    image(ruta[0], 0, 0, 600, 600);
    text( titulo[0], width/2+10, height/4 );
    textFont(titulostipo);
    text("¿Serás capaz de ayudar al fantasma?", width/2-10, height/4 + 40);

    if (dentroDelBoton(width/2, 400, 50/2)) {
      fill(150);
    } else {
      fill(220);
    }
    ellipse(width/2, 400, 150, 50);
    textFont(parrafostipo);
    fill(0);
    text("¡Comenzar!", width/2, 395);

    if (dentroDelBoton(width/2, 470, 50/2)) {
      fill(150);
    } else {
      fill(220);
    }
    ellipse(width/2, 470, 130, 50);
    textFont(parrafostipo);
    fill(0);
    text("Créditos", width/2, 465);
    break;

  case 1:
    pantalla(0, 1);
    botonSiguientePantalla();
    break;

  case 2:
    pantalla(255, 2);
    dosBotones("Seguir intentando", "Cambiar de táctica");
    break;

  case 3:
    pantalla(255, 3);
    botonSiguientePantalla();
    break;

  case 4:
    pantalla(255, 4);
    dosBotones("Esperar a Virginia", "Apurar a Virginia");
    break;

  case 5:
    pantalla(255, 5);
    botonSiguientePantalla();
    break;

  case 6:
    pantalla(255, 6);
    tiempo++;
    //finalBueno
    if (tiempo >= frameRate * 14) {
      finalBueno();
      botonReiniciar();
    }
    break;

  case 7:
    pantalla(255, 7);
    botonSiguientePantalla();
    break;

  case 8:
    pantalla(255, 8);
    dosBotones("Confiar en los Otis", "Hablar con Virginia");
    break;

  case 9:
    pantalla(255, 9);
    botonSiguientePantalla();
    break;

  case 10:
    pantalla(255, 10);
    botonSiguientePantalla();
    break;

  case 11:
    pantalla(255, 11);
    tiempo++;
    //finalBueno
    if (tiempo >= frameRate * 14) {
      finalBueno();
      botonReiniciar();
    }
    break;

  case 12:
    pantalla(255, 12);
    botonSiguientePantalla();
    break;

  case 13:
    pantalla(255, 13);
    botonSiguientePantalla();
    break;

  case 14:
    pantalla(255, 14);
    dosBotones("Enfrentar al fantasma", "Escapar del fantasma");
    break;

  case 15:
    pantalla(255, 15);
    botonSiguientePantalla();
    break;

  case 16:
    pantalla(255, 16);
    botonSiguientePantalla();
    break;

  case 17:
    pantalla(255, 17);
    tiempo++;
    //finalMalo
    if (tiempo >= frameRate * 14) {
      finalMalo();
      botonReiniciar();
    }
    break;

  case 18:
    pantalla(255, 18);
    botonSiguientePantalla();
    break;

  case 19:
    pantalla(255, 19);
    botonSiguientePantalla();
    break;

  case 20:
    pantalla(255, 20);
    tiempo++;
    //finalMalo
    if (tiempo >= frameRate * 14) {
      finalMalo();
      botonReiniciar();
    }
    break;

  case 21:
    background(200);
    image(ruta[21], 0, 0, 600, 600);
    textFont(titulostipo);
    fill(0);
    text("Créditos", width/2, height/6);
    textFont(parrafostipo);
    text("Autor : Oscar Wilde", width/2, height/2-50);
    text("Programadora : Martina Koller", width/2, height/2);
    text("Tecnología Multimedial 1, Trabajo Práctico N°3", width/2, 550);

    if (dentroDelBoton(40, 40, 45/2)) {
      fill(150);
    } else {
      fill(255);
    }
    ellipse(40, 40, 45, 45);
    fill(0);
    text("<<", 40, 35);
    break;
  }
}
