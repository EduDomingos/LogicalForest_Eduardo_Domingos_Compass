// Exercício Nota Escolar
// Obter a média a partir de um Array

// 0-49: F
// 0-59: E
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const notaAluno = [100, 100, 80]

console.log(mediaAluno(notaAluno))

function mediaAluno(notas) {
  const media = calcMedia(notas)

  if (media < 50) return 'F'
  if (media < 60) return 'E'
  if (media < 70) return 'D'
  if (media < 80) return 'C'
  if (media < 90) return 'B'
  return 'A'
}

function calcMedia(array) {
  let soma = 0
  for (let valor of array) {
    soma += valor
  }

  return soma / array.length
}
