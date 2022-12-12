
// function teste() {
//     console.log('teste');
// }

// teste();


// function sayMyName(name) {
//     console.log(name);
// }

// sayMyName('Lucas');
// sayMyName('Luciano');



// function quadrado(valor) {
//     return Math.pow(valor, 2);
// }

// console.log(quadrado(10));


// function incrementarJuros(valor, percentualJuros) {
//     const valorDeAcrescimo = (percentualJuros / 100) * valor;
//     return valor + valorDeAcrescimo;
// }

// console.log(incrementarJuros(100, 10));
// console.log(incrementarJuros(100, 55));
// console.log(incrementarJuros(100, 25));

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

//Criar uma função ânonima
(function(){
    console.log('Programa Principal');

    const peso = 150;
    const altura = 1.77;

    const imc = calcularIMC(peso, altura);

    console.log('IMC: ' +  classificarIMC(imc));
})(); //Função imediatamente invocada.



// const main2 = main;
// console.log(main2);
// main2();
