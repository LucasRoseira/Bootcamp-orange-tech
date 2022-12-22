const entradas = [10, 1, 2, 3, 4, 5, 18, 33, 85, 29, 44, 33];
let i = 0;


function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };


