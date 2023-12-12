class Catherine {

  constructor() {
    this.posX = 300;
    this.posY = 470;
    this.tam = 30;
    this.bala = new Conjuro();
    this.vida = 3;
  }

  actualizar() {
  }

  dibujar() {

    //se dibujan los conjuros
    this.bala.dibujar();

    //se dibuja a Catherine y la ellipse debajo para la colisión
    ellipse(this.posX, this.posY, this.tam);
    image(c, this.posX, this.posY, 70, 80);
  }


  //asignación de teclas para mover a Catherine y disparar conjuros
  moverC(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === ENTER) {
      this.dispararBala();
    }
  }

  moverIzquierda() {
    if (this.posX > 100 + this.tam) {
      this.posX -= 8;
    }
  }

  moverDerecha() {
    if (this.posX < 700 - this.tam) {
      this.posX += 8;
    }
  }

  //método para llamar a la clase conjuros y poder disparar
  dispararBala() {

    this.bala = new Conjuro(this.posX, this.posY);
    this.bala.disparar();
  }


  cDisparolaBala() {
    return this.bala.disparada;
  }


  //método para restar vida cuando C colisiona con los maleficios
  colisionDisparo() {
    this.vida--;
  }
}
