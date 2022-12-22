const { gets, print } = require('../funcoes-auxiliares');

const resultado = [3, 5, 15, 4];


function fizzBuzz(resultado) {
    if (resultado % 3 == 0 && resultado % 5 == 0) {
        return 'FizzBuzz';
    }
    else if (resultado % 3 == 0) {
        return 'Fizz';
    }
    else if (resultado % 5 == 0) {
        return 'Buzz';
    }
    else {
        return resultado;
    }
}

for (let i = 0; i < resultado.length; i++) {
    print(fizzBuzz(resultado[i]));
}
