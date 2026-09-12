// Você está criando um sistema de cadastro em que a pessoa usuária pode cadastrar quantos nomes quiser,
// um por vez. O processo deve continuar até que seja encontrado a palavra "fim" (com letras minúsculas).
// Crie um programa que com base em uma entrada pré-definida de nomes, exiba cada um deles.

const nomes = ['Ana', 'Bruno', 'João', 'fim']

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === 'fim') {
        break;
    } else {
        console.log('Nomes:', nomes[i])
    }
}

