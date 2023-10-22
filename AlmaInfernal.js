class infernal {

  //variables
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.tam = 26;
    this.vel = 5;
    this.disparada = false;
    this.sprite = [];
    this.miPreload();
    this.numImg = round(random(0, 1));
  }

  //si disparada = true, entonces se dibuja el alma infernal
  disparo() {
    this.disparada = true;
  }

  //se mueve hacia abajo, cuando pasa el limite de la pantalla, se destruye
  moverse() {
    this.posY += this.vel;

    if (this.posY >= height) {
      this.disparada = false;
    }
  }


  dibujar() {
    //solo se dibuja si disparada = true
    if (this.disparada) {
      fill(52, 124, 150);
      ellipse(this.posX, this.posY, this.tam, this.tam);
      image(this.sprite[this.numImg], this.posX, this.posY);
      this.moverse();
    }
  }

  //carga de imagenes
  miPreload() {
    for (let i = 0; i < 2; i++) {
      this.sprite.push(loadImage('assets/alma0' + i + '.png'));
    }
  }
}
