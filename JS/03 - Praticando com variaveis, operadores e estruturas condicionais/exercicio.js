/*
Faça um  algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a 
sua média e a sua classificação conforme a tabela abaixo

Média = (nota1 + nota 2 + nota 3) / 3/

Classificação: 
- Média menor que 5, reprovado
- Média entre 5 e 7, recuperação
- Média acima de 7, passou de semestre
*/


const notas = [8, 6, 7.1];

calculaMedia(notas);

function calculaMedia(notas) {
    let media = 0;
    for (i = 0; i < notas.length; i++) {
        media += notas[i];
    }
    
    media /= 3;
    if (media < 5) {
        console.log('Reprovado');
    } else if (media <= 7 ) {
        console.log('recuperação');
    } else {
        console.log('Passou de semestre');
    }

    console.log('Media = ' + media.toFixed(2));
}
