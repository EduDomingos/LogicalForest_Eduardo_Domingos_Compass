//Velocidade máxima de até 70
//a cada 5km acima do limite você ganha 1 ponto
//Math.Floor()
//caso pontos maior que 12 -> "Carteira Suspensa"

console.log(verificarVelocidade(180))

function verificarVelocidade(velocidade) {
  const veloMax = 70
  const kmPorPonto = 5
  if (velocidade <= veloMax) return 'Velocidade dentro do limite'
  else {
    const pontos = Math.floor((velocidade - veloMax) / kmPorPonto)
    return pontos >= 12
      ? `Carteira Suspensa com ${pontos} pontos`
      : `pontos na carteira: ${pontos}`
  }
}
