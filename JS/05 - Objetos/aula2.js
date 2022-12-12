class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
    descrever() {
        console.log('Meu nome é ' + this.nome + 'e minha idade é ' + this.idade + ' Ano de nascimento: ' + this.anoDeNascimento);
    }
}

function comparaPessoa(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log('Pessoa 1 é mais velha');
    } else if (p1.idade < p2.idade) {
        console.log('Pessoa 2 é mais velha');
    } else {
        console.log('Tem a mesma idade');
    }

}

const lucas = new Pessoa('Lucas', 25);
const luciano =  new Pessoa('Luciano', 20);

comparaPessoa(lucas, luciano);