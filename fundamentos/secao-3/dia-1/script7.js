let pecaXadrez = 'Rei'
switch (pecaXadrez.toLowerCase()) {
    case 'peão':
        console.log('uma casa pra frente');
        break;
    case 'torre':
        console.log('horizontal e vertical');
        break;
    case 'cavalo':
        console.log('em L - pula sobre peças');
        break;
    case 'bispo':
        console.log('diagonais');
        break;
    case 'rainha':
        console.log('todos os movimentos');
        break;
    case 'rei':
        console.log('uma casa em qualquer direção');
        break;

    default:
        console.log('peça inválida');
        break;
}