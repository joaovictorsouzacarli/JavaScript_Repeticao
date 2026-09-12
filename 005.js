// Contar quantos numeros pares e quantos pares impares nós temos entre 0 e 100

let par = 0
let impar = 0

for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log(num, ':', 'PAR')
        par++
    } else {
        console.log(num, ':', 'ÍMPAR')
        impar++
    }
}

console.log('Quantidade de numeros pares:', par)
console.log('Quantidade de numeros ímpares:', impar)