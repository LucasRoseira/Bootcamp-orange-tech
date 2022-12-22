const { gets, print } = require('../funcoes-auxiliares');

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

let valor = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75];

function verificaSeTemNoArray(valor) {
    if (elementos.includes(valor)) {
        console.log('Achei ' + valor + ' na posicao ' + elementos.indexOf(valor));
    } else {
        console.log('Numero ' + valor + ' nao encontrado!');
    }
}

verificaSeTemNoArray(valor);

for (let i = 0; i < valor.length; i++) {
    verificaSeTemNoArray(valor[i]);
}








