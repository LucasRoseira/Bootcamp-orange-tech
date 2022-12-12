/* Faça um  programa para calcular o valor gasto de uma viagem
Voccê terrá 3 variáveis. Sendo elas
1 - Preço do Etanol;
2 - Preço do Gasolina;
3 - O tipo de combustível;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem; 



Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 7.79;
const tipoCombustivel = 'Gasolina';
const kmPorLitros = 10;
const distanciaKM = 100;
let valorGasto;


let litrosConsumidos = distanciaKM / kmPorLitros;

valorGastoViagem(litrosConsumidos, tipoCombustivel);
console.log("Valor Gasto R$ " + valorGasto.toFixed(2));


function valorGastoViagem(litrosConsumidos, tipoCombustivel) {

    if (tipoCombustivel === 'Etanol') {
        valorGasto = litrosConsumidos * precoEtanol;
    } else {
        valorGasto = litrosConsumidos * precoGasolina;
    }
    return valorGasto;
}




