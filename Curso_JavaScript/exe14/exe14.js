function Endereco(rua, cidade, cep) {
  this.rua = rua
  this.cidade = cidade
  this.cep = cep
}

const end1 = new Endereco('Vanor Junqueira Franco', 'Bebedouro', 14701320)
const end2 = new Endereco('Vanor Junqueira Franco', 'Bebedouro', 14701320)
const end3 = end1

function exibirEndereco(endereco) {
  for (dados in endereco) {
    console.log(dados, endereco[dados])
  }
}

// exibirEndereco(end1)
// exibirEndereco(end2)

function saoIguais(endereco1, endereco2){
  return endereco1.rua===endereco2.rua && endereco1.cidade===endereco2.cidade && endereco1.cep===endereco2.cep
}

function temEnderecoMemoriaIguais(endereco1, endereco2){
  return endereco1===endereco2
}
console.log(saoIguais(end1,end2))
console.log(temEnderecoMemoriaIguais(end1,end2))
console.log(temEnderecoMemoriaIguais(end1,end3))