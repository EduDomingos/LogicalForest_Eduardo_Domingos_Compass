//Objeto endereço
//Criar um objeto endereço que contem rua, cidade, cep, e exibirEndereco

function Endereco(rua, cidade, cep) {
  this.rua = rua
  this.cidade = cidade
  this.cep = cep
}

const end1 = new Endereco('Vanor Junqueira Franco', 'Bebedouro', 14701320)

function exibirEndereco(endereco) {
  for (dados in endereco) {
    console.log(dados, endereco[dados])
  }
}

exibirEndereco(end1)
