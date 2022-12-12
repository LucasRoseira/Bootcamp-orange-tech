const camisetaAzulLucas = false;
const camisetaAzulLemao = true;

const numero = 18;

const ehNumeroPar = 10;
const ehNumeroImpar = 11;

verificaParImpar(ehNumeroPar);
verificaParImpar(ehNumeroImpar);

function verificaParImpar(numero) {
    numero % 2 === 0 ? console.log('Par') :  console.log('impar');

    // numero =  numero % 2 === 0;
    // if (numero) {
    //     console.log('Par')
    // } else if (!numero) {
    //     console.log('impar')
    // }
}
const numeroDivisivelPor5 = (numero % 5) === 0;
if(numero === 0) {
    console.log('Número é inválido');
}
else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Nao');
}

