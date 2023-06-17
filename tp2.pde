//Martina Koller, legajo 93526/7
//video: https://youtu.be/EHc5xKHPQGA

void setup(){
  size(800, 400);
  colorMode(RGB);
  opart = loadImage("opart.jpg");
}

void draw(){
  background(0);
  strokeWeight(2);



//rombos celestes arriba
  pushMatrix();
  translate(200, 0);

  for(int i = 0; i <= 7; i++){
    stroke(c2);
    rombo(i * 180, 5, 30);
  }
  popMatrix();

//rombos verdes abajo
  pushMatrix();
  translate(200, 400);

  for(int i = 0; i <= 7; i++){
    stroke(c1);
    rombo((i * 180)+80, 5, 30);
  }
  popMatrix();

//rombos colores
  pushMatrix();
 translate(width/3, height/2);

//rombos celeste y rojos
  for(int i = 0; i <= 7; i++){ 
   if(i % 2 == 0){
     stroke(c3);
   } else {
     stroke(c4);
   }
    rombo(i*102, 5, 20);
  }

//rombos amarillos y naranjas
  for(int i = 0; i <= 7; i++){
   if(i % 2 == 0){
     stroke(c5);
   } else {
     stroke(c6);
   }
   rombo((i*104)+ 50, 5, 20);
  }
  
  popMatrix();

fill(0);
noStroke();
rect(0, 0, 400, 400);
image(opart, 50, 0, 300, 300);

//boton

if(dentroDelBoton(50, 360, 50/2)){
fill(150);
text("reiniciar", 30, 320);
} else {
fill(255);
}
ellipse(50, 360, 50, 50);
fill(255);
text("Carlos Ruiz - Diez", width/3, 310);

}
