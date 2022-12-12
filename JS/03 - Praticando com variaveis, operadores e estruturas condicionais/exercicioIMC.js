/*
IMC é o índice de massa corporal. Serve para indicar sobre a condição de peso de uma pessoa adulta

Formula: 
IMG = peso(altura * altura)

Elabora um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo

IMC em adultos COndição

- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;


*/

const peso = 150;
const altura = 1.77;
const imc = peso / Math.pow(altura, 2);

console.log('IMC: ' + imc.toFixed(2));

if(imc < 18.5) {
    console.log('Abaixo do peso');
} else if(imc <= 25) {
    console.log('Peso Normal');
} else if(imc <= 30) {
    console.log('Acima do peso');
} else {
    console.log('Obesidade Grave');
}
