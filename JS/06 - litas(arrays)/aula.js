
// const alunos = ['João', 'Vitor', 'Marina'];
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);
// console.table(alunos);

// alunos.push('Renan');
// alunos[4] = 'Selma';

// console.table(alunos);

// alunos.pop();
// console.table(alunos);

// const nome = 'Lucas Gomes Roseira';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

const notas = [];
let soma = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);


for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
let media = (soma / notas.length);

console.log('Media: ' + media.toFixed(2));
