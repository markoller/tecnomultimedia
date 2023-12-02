class boton {

  //Al crear el botón, se asigna su posicion en X e Y y su tamaño
  constructor(px, py, tam) {
    this.posX = px;
    this.posY = py;
    this.tam = tam;
  }

  actualizar() {
  }

  //Al dibujar el botón se agrega un texto como parámetro para que se vea dentro del botón
  dibujar(string) {
    //Hover botón
    if (mouseX >= this.posX && mouseX <= this.posX + this.tam * 2 && mouseY >= this.posY && mouseY <= this.posY + this.tam) {
      fill(160);
    } else {
      fill(200);
    }
    rect(this.posX, this.posY, this.tam * 2, this.tam);

    fill(0);
    textSize(18);
    textFont("Ledger");
    text(string, this.posX + this.tam, this.posY + this.tam / 2);
  }

  //mide la distancia entre el mouse y el botón, permite el paso entre pantallas
  distancia() {
    return mouseX >= this.posX && mouseX <= this.posX + this.tam * 2 && mouseY >= this.posY && mouseY <= this.posY + this.tam;
  }
}
