// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
//   return {
//     marcaCelular,
//     tamanhoTela,
//     capacidadeBateria,
//     ligar(){console.log(`Fazendo Ligação...`)}
//   }
// }

function JogadorFutebol(nome, idade, posicao, altura, peso){
  this.nome = nome;
  this.idade = idade;
  this.posicao = posicao;
  this.altura = altura;
  this.peso = peso;

  this.jogar = function(){console.log("Jogando...")}
}

const camisa1 = new JogadorFutebol("Dida", 27, "Goleiro", 1.93, 80);

console.log(camisa1)