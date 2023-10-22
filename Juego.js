class juego {
  //llama a las clases exorcista y fantasma, establece las variables para los estados y la carga de imagenes
  constructor() {
    this.exorcista = new exorcista();
    this.fantasma = new fantasma();
    this.pantalla = "inicio";
    this.img = [];
    this.miPreload();
  }

  actualizar() {
    //lógica de estado
    //pantalla juego
    if ( this.pantalla == "juego") {
      this.fantasma.actualizar();
      this.exorcista.actualizar();
      this.calcularColision(this.exorcista, this.fantasma, 'infer');
      this.calcularColision(this.fantasma, this.exorcista, 'hech');

      this.furiaFantasmal();

      //pantalla victoria
      if (this.fantasma.vida <= 0) {
        this.pantalla = "ganaste";
      }

      //pantalla derrota
      if (this.exorcista.vida <= 0) {
        this.pantalla = "perdiste";
      }
    }
  }

  dibujar() {
    if (this.pantalla == "inicio") {
      fill(0);
      image(this.img[0], width/2, height/2);
      image(this.img[1], 580, 380);
    }

    if (this.pantalla == "juego") {
      //se dibujan el exorcista y el fantasma solo en la pantalla juego
      image(this.img[2], width/2, height/2);
      this.exorcista.dibujar();
      this.fantasma.dibujar();

      fill(255);
      textSize(24);
      text("vidas exorcista: " + this.exorcista.vida, 20, 60);
      text("vidas fantasma: " + this.fantasma.vida, 560, 60);
    }

    if (this.pantalla == "ganaste") {
      image(this.img[4], width/2, height/2);
      image(this.img[5], width/2, 530);
    }

    if (this.pantalla == "perdiste") {
      image(this.img[3], width/2, height/2);
      image(this.img[5], width/2, 530);
    }
  }

  //solo se detecta el movimiento en la pantalla juego
  movimiento() {
    if (this.pantalla == "juego") {
      this.exorcista.mover(keyCode);
    }
  }

  mouse() {
    //boton de jugar
    if (this.pantalla == "inicio") {
      if (mouseX > 580 - 88 && mouseX < 580 + 88 && mouseY > 380 - 32 && mouseY < 380 + 32) {
        this.pantalla = "juego";
      }
    }

    //boton de volver
    if (this.pantalla == "ganaste" || this.pantalla == "perdiste") {
      if (mouseX > width/2 - 90 && mouseX < width/2 + 90 && mouseY > 530 - 30 && mouseY < 530 + 30) {
        this.pantalla = "inicio";
        this.exorcista.reiniciarExorcista();
        this.fantasma.reiniciarFantasma();
      }
    }
  }

  //calcula la colision entre dos objetos, se usa dos veces para calcular la colision entre
  //el alma infernal y el exorcista; y entre el hechizo y el fantasma
  calcularColision(objeto1, objeto2, objeto3) {
    for (let i = 0; i < objeto2[objeto3].length; i++) {
      let distancia = dist(objeto1.posX, objeto1.posY, objeto2[objeto3][i].posX, objeto2[objeto3][i].posY);
      let distanciaChoque = 30;

      if (distancia < distanciaChoque) {
        objeto1.quitarVida();
        objeto2[objeto3].splice(i, 1);
      }
    }
  }

  //si el exorcista está recargando sus hechizos, el fantasma tira más almas
  furiaFantasmal() {
    if (this.exorcista.puedeLanzarHechizo == false) {
      this.fantasma.tiempoMaxContador = 25;
    } else {
      this.fantasma.tiempoMaxContador = 40;
    }
  }

  //carga de imagenes
  miPreload() {
    for (let i = 0; i < 6; i++) {
      this.img.push(loadImage('assets/juego0' + i + '.png'));
    }
  }
}
