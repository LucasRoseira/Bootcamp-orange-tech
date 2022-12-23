const { print } = require('../Desafios Basicos/funcoes-auxiliares.js');

entrada = 'inocavao';

// function reverse(string1) {
//     return string1.split("").reverse().join("");
// }

// function checaPalindromo(entrada) {
//     let inversa = reverse(entrada);
//     var resultado;

//     return resultado === inversa ? true : false;
// }

// print(checaPalindromo(entrada)); 


print(checaPalindromo(entrada));

function checaPalindromo(entrada) {
    for (var i = 0; i < entrada.length / 2; i++) {
        return (entrada[i] != entrada[entrada.length - i - 1]) ? 'FALSE' : 'TRUE';
    }
}