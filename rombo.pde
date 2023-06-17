void rombo(int o, int n, int cant){
//rombo(posición x, espacio entre lineas, cantidad de lineas);

for(int i = 0; i < cant+1; i++){
    int x = o + i * n;
    int y = 0 + i * n*2;
    
    line(x, 0, x, y);
    line(x, (-y), x, 0);
    
//ciclo for anidado
    for(int j = 0; j < cant+1; j++){
    int x2 = o + (n*cant) + j * n;
    int y2 = (n*2*cant) - j * (n*2);
    
    strokeWeight(1);
    line(x2, 0, x2, y2);
    line( x2, (-y2), x2, 0);
    
    }
}

}
