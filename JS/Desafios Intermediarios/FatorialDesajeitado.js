const { gets, print } = require('../Desafios Basicos/funcoes-auxiliares.js');


let n = 3;

let resultado = '';
const operacoes = ['*', '/', '+', '-'];

function calcularFatorialDesajustado(n) {

    if(n == 0 ) return 0;
    for (let i = n, j = 0; i > 0; i--) {
        resultado += i;

        if (i != 1) {
            resultado += operacoes[j];
        }

        j++;

        if (j > 3) {
            j = 0
        };

    }

    return resultado;
}

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
}

var funcao = calcularFatorialDesajustado(n);

print(Math.round(parse(funcao)));
