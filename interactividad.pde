void mousePressed() {
  if (estado == 0) {
    if (dist(mouseX, mouseY, width/2, 400) <= 50/2) {
      estado = 1;
    }
  }

  if (estado == 0) {
    if (dist(mouseX, mouseY, width/2, 470) <= 50/2) {
      estado = 21;
    }
  }

  //primera ruta
  //ciclo for para las pantallas con un boton y con num impar
  for (int e = 1; e < 6; e += 2) {
    if (estado == e && (dentroDelBotonSiguiente())) {
      estado = e + 1;
    }
  }
  if (estado == 2 && (dentroDelBotonIzq())) {
    estado = 3;
  } else if (estado == 2 && (dentroDelBotonDer())) {
    estado = 7;
  } else if (estado == 4 && (dentroDelBotonIzq())) {
    estado = 5;
  } else if (estado == 4 && (dentroDelBotonDer())) {
    estado = 12;
  }

  //segunda ruta

  if (estado == 7 && (dentroDelBotonSiguiente())) {
    estado = 8;
  } else if (estado == 8 && (dentroDelBotonIzq())) {
    estado = 9;
  } else if (estado == 8 && (dentroDelBotonDer())) {
    estado = 4;
  } else if (estado == 9 && (dentroDelBotonSiguiente())) {
    estado = 10;
  } else if (estado == 10 && (dentroDelBotonSiguiente())) {
    estado = 11;
  }

  //tercera ruta
  if (estado == 12 && (dentroDelBotonSiguiente())) {
    estado = 13;
  } else if (estado == 13 && (dentroDelBotonSiguiente())) {
    estado = 14;
  } else if (estado == 14 && (dentroDelBotonDer())) {
    estado = 18;
  } else if (estado == 14 && (dentroDelBotonIzq())) {
    estado = 15;
  } else if (estado == 15 && (dentroDelBotonSiguiente())) {
    estado = 16;
  } else if (estado == 16 && (dentroDelBotonSiguiente())) {
    estado = 17;
  }

  if (estado == 18 && (dentroDelBotonSiguiente())) {
    estado = 19;
  } else if (estado == 19 && (dentroDelBotonSiguiente())) {
    estado = 20;
  }

  if (estado == 21) {
    if (dist(mouseX, mouseY, 40, 40) <= 45/2) {
      estado = 0;
    }
  }

  //botonreiniciar
  //final bueno
  if (tiempo >= frameRate * 15) {
    if ((estado == 6 || estado == 11) && (mouseX > 200 && mouseX < 200 + 200 && mouseY > 400 && mouseY < 400 + 50)) {
      estado = 0;
      tiempo = 0;
    }
  }

  //finalmalo
  if (tiempo >= frameRate * 15) {
    if ((estado == 17 || estado == 20) && (mouseX > 200 && mouseX < 200 + 200 && mouseY > 400 && mouseY < 400 + 50)) {
      estado = 0;
      tiempo = 0;
    }
  }
}


void keyPressed() {
  if (key == ' ') {
    estado = 0;
    tiempo = 0;
  }
}
