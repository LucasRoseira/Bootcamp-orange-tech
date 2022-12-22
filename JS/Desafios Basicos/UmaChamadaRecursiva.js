const { gets, print } = require('../funcoes-auxiliares');

let n = [10, 15, 4, 55, 15, 16];

let resultado = 0;

function somatorio(n) {

    if (n != 0) {
        resultado += n;
        n--;
        somatorio(n);

    }
    return resultado;
}

// print(somatorio(n));

// n.map(n => print(somatorio(n)));


for (let i = 0; i < n.length; i++) {
    print(somatorio(n[i]));
    resultado = 0;
}

