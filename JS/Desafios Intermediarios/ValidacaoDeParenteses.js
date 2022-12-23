const { gets, print } = require('../Desafios Basicos/funcoes-auxiliares.js');

var string = gets().split('');


if (string[0] === '[' && string[1] === ']' ||
    string[0] === '{' && string[1] === '}' ||
    string[0] === '(' && string[1] === ')') {
    print('true');
} else {
    print('false');

}