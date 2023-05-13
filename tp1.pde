//variables
PFont fuente;
String pantalla; 
int tiempo;
color bg;
int vel = 2;
int x1;
color cl = 0;
int x2 = 640;
int x3 = 0;
int x4 = 300;
boolean izquierda;

PImage menu;
PImage pantalla1;
PImage pantalla2;
PImage pantalla3;
PImage pantalla4;

void setup(){
size(640, 480);
textSize(20);
textAlign(CENTER, CENTER);
colorMode(RGB);

fuente = loadFont("fuente_presentacion.vlw");
textFont(fuente);
pantalla = "menú";
tiempo = 0;
bg = color(255);
x1 = -100;
menu = loadImage("medusasm.jpeg");
pantalla1 = loadImage("medusap1.jpg");
pantalla2 = loadImage("medusap2.jpg");
pantalla3 = loadImage("medusap3.jpg");
pantalla4 = loadImage("medusap4.jpg");
}

void draw(){
  background(bg);
  //text("tiempo: " + tiempo, 100, 50);
  textAlign(CENTER);
  
//pantalla menu
  if(pantalla.equals("menú")) {
  bg=color(0);
  image(menu, 0, 0);
  textSize(50);
  text("MEDUSAS", width/2, height/2);
  textSize(30);
  text("COMENZAR", width/2, height/2 + 50);
 
  
  tiempo++;
  //botón 
  if(dist(mouseX, mouseY, width/2, height/4*3) < 50/2){
  fill(150);
  } else {
  fill(220);
  }
  ellipse(width/2, height/4*3, 50, 50);
  
  fill(255);
  }
  
  
//pantalla 1
  if (pantalla.equals("p1")){
  bg = color(14, 4, 15);
  image(pantalla1, 320, 0);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Introducción", width/2, 20);
  textSize(17);
  textAlign(LEFT);
  text("Las medusas son uno de los organismos más antiguos \n que pueden encontrarse en el planeta Tierra, \n habitando en ella desde hace más de 500 millones de años.", x1, 90);
  text("Es un animal invertebrado, forma parte \n de la familia de los Cnidarios.", x1, 180);
  text("Su tiempo de vida puede ir desde los\n 6 meses hasta los 2 años.", x1, 240);
   
  
  tiempo++;
  if(tiempo >= frameRate*8){
  pantalla = "p2";
  tiempo = 0;
  }
  
  //animación texto
  if(x1 < 5){
  x1++;
  x1 += vel;
  }
  
//pantalla 2
  } else if (pantalla.equals("p2")){
  bg = color(0);
  image(pantalla2, 0, 0);
  fill(255);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Morfología", width/2, 20);
  fill(cl);
  textSize(17);
  textAlign(RIGHT);
  text("Tienen 24 ojos alrededor de su cuerpo\nque les sirven para detectar la luz, la oscuridad\n y para mantenerse en un territorio seguro", 630, 360);
  text("Son simétricas radialmente, es decir que tienen\nun eje central que atraviesa su cuerpo.", 630, 280);
  text("No tienen cerebro ni corazón, pero tienen una red\nde nervios en la piel que les ayuda a detectar\n otros organismos.", 630, 180);
  text("Estos animales tienen un cuerpo gelatinoso con forma\nde campana y tentáculos, su tamaño y color varían\n según la subespecie, algunas son bioluminiscentes.", 630, 80);
  
  
  tiempo++;
  if(tiempo >= frameRate*15){
  pantalla = "p3";
  tiempo= 0;  
  }
  
  //animación texto
  if(cl < 255){
  cl++;
  cl += vel;
  }
  
  
//pantalla 3
  } else if (pantalla.equals("p3")){
  bg = color(0);
  image(pantalla3, 220, 140);
  fill(255);
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Comportamientos de las medusas", width/2, 20);
  textSize(17);
  textAlign(LEFT);
  text("Su forma de desplazamiento es lenta, se impulsan\npor el agua con contracciones rítmicas de todo su cuerpo.\nToma agua y la expulsa usándola como 'propulsor'.", x2, 80);
  textAlign(RIGHT);
  text("Se cree que llegaron a sobrevivir\nhasta nuestros días gracias a su\ncapacidad de reproducirse sin\nnecesidad del sexo opuesto.", x3, 180);
  textAlign(LEFT);
  text("Son carnívoras, se alimentan\nprincipalmente del zooplancton, pero\ntambién pueden alimentarse de pequeños\ncrustáceos, peces y otras especies de medusas.", x2, 300);
  
//animación texto
  vel = 8;
  
  if(x2 > 15){
  x2 -= vel;
  }
  
  
  if(x3 < 630){
  x3 += vel;
  }
  
  tiempo++;
  if(tiempo >= frameRate*12){
  pantalla = "p4";
  tiempo = 0;
  }
  
//pantalla 4
  } else if (pantalla.equals("p4")){
  bg = color(0);
  image(pantalla4, 0, 0);
  textSize(50);
  fill(0);
  textAlign(CENTER, CENTER);
  text("¡Muchas Gracias!", x4, height/2);
  
//animación texto
  vel = 2;
  
  if(x4 >= 400){
  izquierda = true;
  }
  
  if(x4 <= 240){
  izquierda = false;
  }
  
  if(izquierda){
  x4 -= vel;
  } else {
  x4 += vel;
  }
  
//botón "reiniciar"
  tiempo++;
  if(tiempo >= frameRate*2){
  textSize(20);
  fill(200);
  text("Reiniciar", 580, 370);
  if(dist(mouseX, mouseY, 580, 420) < 50/2){
  fill(150);
  } else {
  fill(255);
  }
  ellipse(580, 420, 50, 50);
  
  fill(255);
  }
 } 
}


void mousePressed(){
//boton iniciar
  if(pantalla.equals("menú")){
    if(dist(mouseX, mouseY, width/2, height/4*3) < 50/2){
    pantalla = "p1";
    tiempo = 0;
    }
   }  
   
//boton reiniciar
  if(pantalla.equals("p4")){
   if(dist(mouseX,mouseY, 580, 420) < 50/2){
   pantalla = "menú";
   tiempo = 0;
   }
  }
}

void keyPressed(){
//atajos a pantalla
if(key == ' ') {
  pantalla = "p1";
  tiempo = 0;
  }
  
  if(key == '2'){
  pantalla = "p2";
  tiempo = 0;
  }
  
  if(key == '3'){
  pantalla = "p3";
  tiempo = 0;
  }
  
  if(key == '4'){
  pantalla = "p4";
  tiempo = 0;
  }
}
