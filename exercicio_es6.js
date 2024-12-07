// Array de objetos dos alunos
const alunos = [
  {nome: ' João', nota: 5.9},
  {nome: 'Maria', nota: 9.2},
  {nome: 'Pedro', nota: 9.8},
  {nome: 'Ana', nota: 8.7},
  {nome: 'Lucas', nota: 7.8},
]

// Função para filtrar os alunos que tiraram nota maior ou igual à 6
function filtrarAprovados(alunos, nota) {
  return alunos.filter(aluno => aluno.nota >= nota)
}

// Filtrando os alunos e pegando apenas os nomes
const alunosAprovados = filtrarAprovados(alunos, 6).map(aluno => aluno.nome)

// Exibindo os alunos aprovados
console.log("Alunos aprovados: ", alunosAprovados.join(', '))

// Eu pesquisei o método join e achei muito útil para exibir os nomes de forma mais legível.
