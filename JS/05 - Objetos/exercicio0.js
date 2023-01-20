/* 
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.*/

class Carro {
    marca;
    cor;
    gastoMedioCombustivelPorKM;
    quantidadeKM;
    precoCombustivel;

    constructor(marca, cor, gastoMedioCombustivelPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKM = gastoMedioCombustivelPorKM;
    }

    calculaValorViagem(quantidadeKM, precoCombustivel) {
        let total = quantidadeKM  * this.gastoMedioCombustivelPorKM * precoCombustivel;
        return total.toFixed(2);
    }
}

const carro1 = new Carro('Uno', 'Azul', 1/8);
const carro2 = new Carro('Palio', 'Azul', 1/12);
const carro3 = new Carro('Audi A3', 'Azul', 1/5);

console.log(carro1.calculaValorViagem(70, 5.5));
console.log(carro2.calculaValorViagem(50, 5.5));
console.log(carro3.calculaValorViagem(150, 5.5));