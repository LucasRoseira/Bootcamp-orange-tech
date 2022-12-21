
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

const lucas = {
    nome: 'Lucas Gomes',
    idade: 26,

    descrever: function () {
        console.log('Meu nome é ' + this.nome + 'e minha idade é ' + this.idade);
    }
};

lucas.altura = 1.72;

lucas.descrever();


lucas.descrever = function () {
    console.log('Meu nome é: ' + this.nome)
}

lucas.descrever();

lucas['idade'] = 27;

console.log(lucas.nome);
console.log(lucas.idade);
console.log(lucas.altura);

console.table(lucas);

const jane = new Pessoa('Jane', 18);
jane.descrever();


const melissa = new Pessoa('Melissa', 22);
melissa.descrever();
