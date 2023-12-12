class Conjuro {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = false;
  }

  dibujar() {

    //sucede cuando el conjuro fue lanzado, es decir this.disparada = true
    if (this.disparada) {
      fill(255);
      ellipse(this.posX, this.posY, 5, 5);
      image(conjuro, this.posX, this.posY);
      this.moverBala();
    }
  }

  //mueve a la bala en el eje Y
  moverBala() {
    this.posY -= 5;
  }

  disparar() {
    this.disparada = true;
  }
}
