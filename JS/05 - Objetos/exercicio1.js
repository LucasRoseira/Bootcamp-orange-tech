class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarIMC() {
        
        const imc = this.calcularIMC();

        if (this.imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc <= 25) {
            return 'Peso Normal';
        } else if (imc <= 30) {
            return 'Acima do peso';
        } else if (imc <= 30) {
            return 'Acima do peso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

(function () {
    console.log('Programa Principal');

    const lucas = new Pessoa('Lucas', 65, 1.72);
    const luciano = new Pessoa('Luciano', 60, 1.74);
    const jose = new Pessoa('jose', 95, 1.75);
    const renan = new Pessoa('renan', 63, 1.75);
    const vitor = new Pessoa('vitor', 60, 1.75);

    console.log('IMC: ' + lucas.calcularIMC().toFixed(2));
    console.log('IMC: ' + lucas.classificarIMC());
    console.log('IMC: ' + luciano.calcularIMC().toFixed(2));
    console.log('IMC: ' + luciano.classificarIMC());
    console.log('IMC: ' + jose.calcularIMC().toFixed(2));
    console.log('IMC: ' + jose.classificarIMC());
    console.log('IMC: ' + renan.calcularIMC().toFixed(2));
    console.log('IMC: ' + renan.classificarIMC());
    console.log('IMC: ' + vitor.calcularIMC().toFixed(2));
    console.log('IMC: ' + vitor.classificarIMC());

})();