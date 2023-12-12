class Heathcliff {
  constructor(posX, posY, velX) {
    this.posX = posX;
    this.posY = posY;
    this.tam = 30;
    this.velM = 60;
    this.tiempo = 0;
    this.r = this.tam/2;
    this.velX = velX;
    this.direccion = 1;
    this.maleficios = [];
    this.vida = 10;
  }

  actualizar() {

    this.tiempo++;

    this.posX += this.velX * this.direccion;
    if ((this.posX > 700 - this.r) || (this.posX < 110 )) {
      this.direccion = -this.direccion;
    }

    if (this.tiempo >= this.velM) {
      this.tirarMaleficios();
      this.tiempo=0;
    }
  }

  dibujar() {

    fill(255);
    ellipse(this.posX, this.posY, this.tam);
    image(h, this.posX, this.posY, 60, 70);

    for (let i = 0; i < this.maleficios.length; i++) {
      this.maleficios[i].dibujar();
    }
  }

  tirarMaleficios() {
    this.maleficios.push(new Maleficios(this.posX, this.posY));
    this.maleficios[this.maleficios.length-1].disparar();
  }

  colisionDisparo() {
    this.vida--;
  }
}
