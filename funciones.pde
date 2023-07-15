boolean dentroDelBoton(int x, int y, int r) {
  float dist = dist(mouseX, mouseY, x, y);
  if (dist <= r) {
    return true;
  } else {
    return false;
  }
}

boolean dentroDelBotonSiguiente() {
  if (mouseX > 165 && mouseX < 145 + 275 && mouseY > 530 && mouseY < 530 + 45) {
    return true;
  } else {
    return false;
  }
}

boolean dentroDelBotonIzq() {
  if (mouseX > 20 && mouseX < 20 + 160 && mouseY > 510 && mouseY < 510 + 60) {
    return true;
  } else {
    return false;
  }
}

boolean dentroDelBotonDer() {
  if (mouseX > 420 && mouseX < 420 + 160 && mouseY > 510 && mouseY < 510 + 60) {
    return true;
  } else {
    return false;
  }
}

void pantalla(color c1, int i) {
  background(200);
  image(ruta[i], 0, 0, 600, 600);
  fill(c1);
  textFont(titulostipo); //30
  text(titulo[i], width/2, 20 );
  fill(0, 100);
  rect(45, 60, 505, 120);
  fill(255);
  textFont(parrafostipo); //15
  text(parrafos[i], 45, 60, 500, 320);
}

void botonSiguientePantalla() {
  if (dentroDelBotonSiguiente()) {
    fill(150);
  } else {
    fill(255);
  }
  rect(165, 530, 275, 45, 20);
  fill(0);
  textFont(botonestipo); //25
  text("siguiente pantalla", width/2, 545);
}

void dosBotones(String uno, String dos) {
  if (dentroDelBotonIzq()) {
    fill(180);
  } else {
    fill(255);
  }
  rect(20, 510, 160, 60, 20);
  fill(0);
  text(uno, 100, 535);

  if (dentroDelBotonDer()) {
    fill(180);
  } else {
    fill(255);
  }
  rect(420, 510, 160, 60, 20);
  fill(0);
  text(dos, 500, 535);
}

void botonReiniciar() {
  if (mouseX > 200 && mouseX < 200 + 200 && mouseY > 400 && mouseY < 400 + 50) {
    fill(180);
  } else {
    fill(255);
  }
  rect(200, 400, 200, 50, 20);
  fill(0);
  textFont(botonestipo); //25
  text("Reiniciar", width/2, 415);
}

void finalMalo() {
  fill(0, 150);
  rect(0, 0, 600, 600);
  fill(103, 11, 11);
  noStroke();
  ellipse(width/2, height/4, 150, 150);
  ellipse(width/2 + 90, height/4 - 50, 90, 90);
  ellipse(width/2 + 70, height/4 + 70, 100, 100);
  ellipse(width/2 - 80, height/4, 110, 110);
  ellipse(width/2 - 60, height/4 - 70, 80, 80);
  ellipse(width/2 + 70, height/4, 80, 80);
  ellipse(width/2 - 180, height/4 + 60, 60, 60);
  ellipse(width/2 + 170, height/4 - 80, 50, 50);
  fill(255);
  textFont(finalmalotipo); //30
  text("Final malo", width/2, height/4 - 40);
  textSize(20);
  fill(255);
  text("No pudiste ayudar al fantasma \nde Canterville", width/2, height/4);
  stroke(1);
}

void finalBueno() {
  rectMode(CORNER);
  fill(0, 150);
  rect(0, 0, 600, 600);
  rectMode(CENTER);
  fill(54, 175, 44);
  noStroke();
  rect(width/2, height/4, 150, 150);
  rect(width/2 + 90, height/4 - 50, 90, 90);
  rect(width/2 + 70, height/4 + 70, 100, 100);
  rect(width/2 - 80, height/4, 110, 110);
  fill(87, 211, 77);
  rect(width/2 - 60, height/4 - 70, 80, 80);
  rect(width/2 + 70, height/4, 80, 80);
  rect(width/2 - 180, height/4 + 60, 60, 60);
  rect(width/2 + 170, height/ 4 - 80, 50, 50);
  fill(255);
  textFont(titulostipo);  //30
  text("Final bueno", width/2, height/4-40);
  textSize(20);
  fill(255);
  text("¡El fantasma obtuvo paz!", width/2, height/4);
  rectMode(CORNER);
}
