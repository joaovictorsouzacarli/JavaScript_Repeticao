// Mostre todos os números pares entre 1 e 50 usando for.

for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
        console.log('PAR', num)
    } else {
        console.log('ÍMPAR', num)
    }
}