//Receber uma quantidade de valores para avaliar
//função exibe se cada valor é par ou ímpar

exibirTipo(15, 10)

function exibirTipo(a, b) {
  if (a > b) {
    let c = a
    a = b
    b = c
  }
  for (i = a; i <= b; i++) {
    if (i % 2 === 0) console.log(`${i} é par`)
    else console.log(`${i} é ímpar`)
  }
}
