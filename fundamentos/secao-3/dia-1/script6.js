let angulo1 = 60
let angulo2 = 80
let angulo3 = -10
let triangulo
if(angulo1 + angulo2 + angulo3 === 180){
    triangulo = true;
}else if(angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    triangulo = 'Ângulo Inválido'
}else{
    triangulo = false;
}
console.log(triangulo);
