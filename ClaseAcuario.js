class Acuario {

  constructor() {
    this.pez = [];
    for (let i = 0; i < 6; i++) {
      this.pez[i] = new Pez();
    }

    this.raya1 = new Mantaraya();
    this.raya2 = new Mantaraya();

    this.coral = [];
    for (let i = 0; i < 15; i++) {
      this.coral[i] = new Coral();
    }
  }

  actualizar() {
    for (let i = 0; i < 6; i++) {
      this.pez[i].nadar();
    }

    this.raya1.nadar();
    this.raya2.nadar();
  }


  dibujar() {
    for (let i = 0; i < 6; i++) {
      this.pez[i].dibujar();
    }

    this.raya1.dibujar();
    this.raya2.dibujar();

    for (let i = 0; i < 15; i++) {
      this.coral[i].dibujar();
    }
  }
}
