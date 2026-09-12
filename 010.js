// Crie uma variável anoNascimento e anoAtual. Use um for para listar a idade da pessoa ano a ano até o ano atual.

const anoAtual = 2026
const anoNascimento = 1995

for (let ano = anoNascimento; ano <= anoAtual; ano++) {
    console.log('Em', ano, 'eu tinha:', ano - anoNascimento)
}