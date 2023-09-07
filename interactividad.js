function keyPressed() {
  if (dentroDeCancha) {
    if (keyCode === RIGHT_ARROW) {
      x += 15;
      jugadorActual = 3;
    }

    if (keyCode === LEFT_ARROW) {
      x -= 15;
      jugadorActual = 2;
    }

    if (keyCode === UP_ARROW) {
      y -= 15;
      jugadorActual = 1;
    }

    if (keyCode === DOWN_ARROW) {
      y += 15;
      jugadorActual = 0;
    }
  }
}

function mousePressed() {
  if (pantalla === 0) {
    if (medidasJugar) {
      pantalla = 1;
    }
  }

  if (pantalla === 0) {
    if (medidasComoJugar) {
      pantalla = 4;
    }
  }

  if (pantalla === 0) {
    if (medidasCreditos) {
      pantalla = 5;
    }
  }


  if (pantalla === 2 || pantalla === 3 || pantalla === 4 || pantalla === 5) {
    if (medidasMenu) {
      pantalla = 0;
      contador = 120;
      x = width/2;
      y = height/2;
      px = random(110, 220) || (580, 690);
      py = random(200, 230) || (450, 510);
      velx = 4;
      vely = 4;
    }
  }
}
