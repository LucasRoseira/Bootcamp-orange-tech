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
