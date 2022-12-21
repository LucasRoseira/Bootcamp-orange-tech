function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}


function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc <= 25) {
        return 'Peso Normal';
    } else if (imc <= 30) {
        return 'Acima do peso';
    } else {
        return 'Obesidade Grave';
    }
}

(function(){
    console.log('Programa Principal');

    const peso = 150;
    const altura = 1.77;

    const imc = calcularIMC(peso, altura);

    console.log('IMC: ' +  classificarIMC(imc));
})(); 