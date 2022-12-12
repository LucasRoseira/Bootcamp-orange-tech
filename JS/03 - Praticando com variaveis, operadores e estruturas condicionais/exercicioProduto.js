/*
Elabora um algoritmo que calcule o que deve ser pago por um produuto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálcuulo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no PIX ou Dinheiro, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let valorProduto = 100;
const formaDePagamento = 3;

console.log({ '1': 'Debito', '2': 'PIX ou Dinheiro', '3': 'Duas vezes', '4': 'Acima de 2x' });

let total = 0;

if (formaDePagamento === 1) {
    valorProduto -= (valorProduto * 0.1);
} else if (formaDePagamento === 2) {
    valorProduto -= (valorProduto * 0.15);
} else if (formaDePagamento === 3) {

} else {
    valorProduto += (valorProduto * 0.1);
}
console.log('Total: ' + valorProduto);