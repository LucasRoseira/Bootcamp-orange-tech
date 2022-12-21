function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * ( juros / 100));
}


(function () {
    let valorProduto = 100;
    const formaDePagamento = 4;

    console.log({ '1': 'Debito', '2': 'PIX ou Dinheiro', '3': 'Duas vezes', '4': 'Acima de 2x' });


    calculaValorProduto(valorProduto, formaDePagamento);
})();


function calculaValorProduto(valorProduto, formaDePagamento) {
    let total = 0;
    if (formaDePagamento === 1) {
        total = aplicarDesconto(valorProduto, 10);
    } else if (formaDePagamento === 2) {
        total = aplicarDesconto(valorProduto, 15);
    } else if (formaDePagamento === 3) {
        console.log(valorProduto);
    } else {
        total = aplicarJuros(valorProduto, 10);
    }
    console.log('Total: ' + total);
}