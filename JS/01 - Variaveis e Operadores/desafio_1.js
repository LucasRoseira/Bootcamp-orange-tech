/* Faça um  programa para calcular o valor gasto de uma viagem
Voccê terrá 3 variáveis. Sendo elas
1 - Preço combustível
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem; 

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKM = 100;

let litrosConsumidos = distanciaKM / kmPorLitros;
let valorGasto = litrosConsumidos * precoCombustivel;

console.log("Valor Gasto R$ " + valorGasto.toFixed(2));
