// Você é analista de segurança da informação em uma empresa e precisa validar a senha digitada
// por um novo usuário. Sua tarefa é mostrar, caractere por caractere, todos os símbolos digitados,
// para garantir que nada foi escondido.
// Como você pode percorrer e exibir todos os caracteres de uma senha digitada, um por um?

const senha = 'eu28091995@'

for (let i = 0; i < senha.length; i++) {
    console.log(senha[i])
}