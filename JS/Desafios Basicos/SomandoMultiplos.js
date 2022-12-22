const { gets, print } = require('../funcoes-auxiliares');


const a = gets();
let N = 18;
let resultado = 0;

print(a);
print(N);

for (let i = N; i % a == 0, i != 0; i -= a) {
    resultado += i;
}

print(resultado);


