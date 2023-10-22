class fantasma {

  //variables
  constructor() {
    this.posX = random(0, (width - 40) );
    this.posY = height/2 - 140;
    this.vel = 3;
    this.vida = 12;
    this.tam = 40;
    this.infer = [];
    this.contador = 0;
    this.tiempoMaxContador = 40;
    this.sprite = [];
    this.miPreload();
    this.moviendoseDerecha = true;
  }

  //se hacen los cálculos para que el fantasma se mueva a la derecha o a la izquierda
  //también se calcula cada cuánto tiempo puede tirar un alma
  actualizar() {
    this.posX += this.vel;

    if (this.posX >= width - this.tam || this.posX <= 0) {
      this.vel = -this.vel;
      this.moviendoseDerecha = !this.moviendoseDerecha;
    }

    this.contador++;


    if (this.contador >= this.tiempoMaxContador) {
      this.lanzarAlma();
      this.contador = 0;
    }
  }

  lanzarAlma() {
    this.infer.push(new infernal(this.posX, this.posY));
    this.infer[this.infer.length - 1].disparo();
  }

  //si un hechizo lo toca, pierde una vida
  quitarVida() {
    this.vida--;
  }

  dibujar() {
    //se dibujan las almas por debajo de la imagen del fantasma
    for (let i = 0; i < this.infer.length; i++) {
      this.infer[i].dibujar();
    }

    //cambio de imagen dependiendo del lado al que se mueva
    if (this.moviendoseDerecha) {
      image(this.sprite[0], this.posX, this.posY);
    } else {
      image(this.sprite[1], this.posX, this.posY);
    }
  }

  //carga de imagenes
  miPreload() {
    for (let i = 0; i < 2; i++) {
      this.sprite.push(loadImage('assets/fantasma0' + i + '.png'));
    }
  }

  //cuando el juego termina, se reinician las variables del fantasma
  reiniciarFantasma() {
    this.posX = random(0, (width - 40) );
    this.posY = height/2 - 140;
    this.vel = 3;
    this.vida = 12;
    this.tam = 40;
    this.infer = [];
    this.contador = 0;
    this.tiempoMaxContador = 40;
    this.moviendoseDerecha = true;
  }
}
