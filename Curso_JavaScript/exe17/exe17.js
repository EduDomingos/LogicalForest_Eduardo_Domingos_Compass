/*Faixa de preço
Criar um array de objetos de faixas de preços pra ser usado em e-commerces
contendo tooltip, minimo e maximo*/

//Primeira solução
let faixas = [
  { tooltip: 'até R$700', minimo: 0, maximo: 700 },
  { tooltip: 'de R$700 até R$1000', minimo: 700, maximo: 1000 },
  { tooltip: 'a partir de R$1000', minimo: 1000, maximo: 999999 }
]

//Segunda solução
function criaFaixa(tooltip, minimo, maximo) {
  return {
    tooltip,
    minimo,
    maximo
  }
}

let faixas2 = [
  criaFaixa('até 700', 0, 700),
  criaFaixa('de 700 até 1000', 700, 1000),
  criaFaixa('a partir de 1000', 1000, 9999999)
]

//Terceira solução
function Faixas(tooltip, minimo, maximo){
  this.tooltip = tooltip,
  this.minimo = minimo,
  this.maximo = maximo
}

let faixas3 = [
  new Faixas('até 700', 0, 700),
  new Faixas('de 700 até 1000', 700, 1000),
  new Faixas('a partir de 1000', 1000, 9999999)
]

console.log(faixas, faixas2, faixas3)
