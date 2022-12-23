const { print } = require('../Desafios Basicos/funcoes-auxiliares.js');

let arr = gets().split('');

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {                             
        arr = mudaPosicao(arr, i, 0);
    }
}

print(arr);

function mudaPosicao(arr, from, to) {
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    return arr;
}