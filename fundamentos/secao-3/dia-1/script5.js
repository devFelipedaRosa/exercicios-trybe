let num1 = 80;
let num2 = 80;
let num3 = 80;
let maiornumero;
if (num1 > num2 && num1 > num3){
    maiornumero = num1;
}else if (num2 > num1 && num2 > num3){
    maiornumero = num2;
}else if (num3 > num1 && num3 > num2){
    maiornumero = num3;
}else if (num1 === num2){
    maiornumero = 'numero 1 e numero 2 iguais';
}else if (num1 === num3){
    maiornumero = 'numero 1 e numero 3 iguais';
}else if (num2 === num3){
    maiornumero = 'numero 2 e numero 3 iguais';
}else if (num1 === num2 && num1 === num3){
    maiornumero = 'numeros iguais'
}
console.log(maiornumero);