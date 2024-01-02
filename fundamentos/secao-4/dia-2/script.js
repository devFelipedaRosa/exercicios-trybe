let irmaoElementoOndeVcEsta = document.createElement('section');
irmaoElementoOndeVcEsta.id = 'irmaoElementoOndeVcEsta';
let paiElementoOndeVcEsta = document.querySelector('#pai');
paiElementoOndeVcEsta.appendChild(irmaoElementoOndeVcEsta);

let filhoElementoOndeVcEsta = document.createElement('section');
filhoElementoOndeVcEsta.id = 'filhoElementoOndeVcEsta';
let elementoOndeVcEsta = document.querySelector('#elementoOndeVoceEsta');
elementoOndeVcEsta.appendChild(filhoElementoOndeVcEsta);

let filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho';
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

let terceiroFilho = filhoPrimeiroFilhoDoFilho
.parentElement
.parentElement
.nextElementSibling;
console.log(terceiroFilho);