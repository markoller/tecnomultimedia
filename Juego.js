class Juego {

  constructor() {

    this.c = new Catherine();
    this.h = new Heathcliff(120, 150, 4);
    this.estado = "instrucciones";
    this.contador = 0;
    this.haOcurridoColision = false;
    this.haOcurridoMaleficio = false;
  }

  actualizar() {
    if (this.estado === "juego1") {

      this.h.actualizar();
      this.c.actualizar();

      this.colisionConConjuro();
      this.colisionConMaleficio();

      this.contador++;

      this.cambioP();

      //aumenta la velocidad de disparo cada vez que el contador es divisible por 2000
      if (this.contador % 2000 === 0) {
        this.h.velM -= 10;
      }


      if ((this.contador >= 6200) || (this.c.vida === 0)) {
        this.estado = "perdiste";
      } else if (this.h.vida === 0) {
        this.estado = "ganaste";
      }
    }
  }

  dibujar() {

    if ( this.estado === "instrucciones" ) {
      background(50);
      image(instrucciones, width/2, height/2);
      if (key === ' ') {
        this.estado = "juego1";
      }
    } else if (this.estado === "juego1") {
      background(50);
      image(jugando, width/2, height/2);

      this.c.dibujar();
      this.h.dibujar();

      push();
      fill(255);
      textSize(20);
      text(this.h.vida, 364, 45);
      text(this.c.vida, 550, 45);
      pop();

      for (let i = 1; i <= 4; i++) {
        if (this.contador > 2000 * i) {
          const xPos = 130 + i * 18; //Espacio entre rectángulos
          fill(255, 0, 0);
          rect(xPos, 27, 18, 15);
        }
      }
    } else if (this.estado === "perdiste") {
      background(50);
      image(perdiste, width/2, height/2);
    } else if (this.estado === "ganaste") {
      background(50);
      image(ganaste, width/2, height/2);
    }
  }

  moverC() {
    if (this.estado === "juego1") {
      this.c.moverC(keyCode);
    }
  }

  //colisión de Heathcliff y los conjuros de Catherine
  colisionConConjuro() {
    if (this.haOcurridoColision && dist(this.h.posX, this.h.posY, this.c.bala.posX, this.c.bala.posY) >= 25) {
      this.haOcurridoColision = false;
    }
    if (!this.haOcurridoColision && dist(this.h.posX, this.h.posY, this.c.bala.posX, this.c.bala.posY) < 25) {
      this.h.colisionDisparo();
      this.haOcurridoColision = true;
    }
  }

  //colisión de Catherine y los maleficios de Heathcliff
  colisionConMaleficio() {
    for (let i = 0; i < this.h.maleficios.length; i++) {
      const maleficio = this.h.maleficios[i];
      if (dist(this.c.posX, this.c.posY, maleficio.posX, maleficio.posY) < 25) {
        this.c.colisionDisparo();
        this.h.maleficios.splice(i, 1);
      }
    }
  }

  //método que me permite que el cambio de estados sea fluido y las variables se reseteen
  resetearJuego() {
    this.c = new Catherine();
    this.h = new Heathcliff(120, 150, 4);
    this.estado = "instrucciones";
    this.contador = 0;
    this.haOcurridoColision = false;
    this.haOcurridoMaleficio = false;
  }

  //método para cambiar de estados
  cambioP() {
    if (keyCode === ENTER) {
      if ((this.estado === "perdiste") || (this.estado === "ganaste")) {
        this.resetearJuego(); // Llama a la función para reiniciar el juego
        this.estado = "instrucciones";
      }
    }
  }
}
