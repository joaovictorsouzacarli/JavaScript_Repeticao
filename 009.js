// Crie uma variável numeroSecreto com valor fixo.
//Simule até 3 tentativas usando um for.
// Em cada tentativa, compare o valor tentado com o número secreto e mostre no console:

// "Acertou!" se for igual
// "Tente novamente" se for diferente
// 📌 Observação:
// As tentativas devem ser simuladas por variáveis dentro do laço.

const numeroSecreto = 5

for (let num = 1; num <= 10; num++) {
    if (num === numeroSecreto) {
        console.log('Acertou!')
    } else {
        console.log('Tente novamente')
    }
}