let num1 = 50;
let num2 = 50;
let num3 = 30;
let maiornumero;
if (num1 > num2 && num1 > num3){
    maiornumero = num1;
}else if (num2 > num1 && num2 > num3){
    maiornumero = num2;
}else if (num3 > num1 && num3 > num2){
    maiornumero = num3;
}else{
    maiornumero = 'iguais';
}
console.log(maiornumero);