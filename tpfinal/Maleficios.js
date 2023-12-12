class Maleficios {

  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.velY = 4;
    this.disparada = false;
  }

  dibujar() {
    if (this.disparada) {
      fill(0);
      ellipse(this.posX, this.posY, 5, 5);
      image(maleficio, this.posX, this.posY);
      this.mover();
    }
  }

  mover() {
    this.posY += this.velY;
  }

  disparar() {
    this.disparada = true;
  }
}
