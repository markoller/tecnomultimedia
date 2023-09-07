function pelota() {
  px += velx;
  py += vely;

  if ( px >= width/2 + 290 || px <= width/2 - 290) {
    velx = -velx;
  }

  if ( py >= (height/2 + 40) + 195 || py <= (height/2 + 40) - 195) {
    vely = -vely;
  }
}

function botonMenu() {
  if (medidasMenu) {
    tint(180);
    image(menu, 650, 520, 140, 70);
    noTint();
  } else {
    image(menu, 650, 520, 140, 70);
  }
}

function imagenFondo(nombreimagen){
image(nombreimagen, width/2, height/2, 800, 600);
}
