const { gets, print } = require('../funcoes-auxiliares');


// const funcoes {gets, print} = require('./funcoes-auxiliares');

// console.log(funcoes);

/*
Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 - 100
Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado

Dados de entrada: 
5 
50
10
98
23

Saída: 98

*/

let maiorValorEncontrado = 0;
const quantidadeDeAlunos = gets();

for (let i = 0; i < quantidadeDeAlunos; i++) {

    const numeroSorteado = gets();

    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }

}

print(maiorValorEncontrado);

