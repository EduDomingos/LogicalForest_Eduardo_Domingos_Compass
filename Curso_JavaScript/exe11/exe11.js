const celular1 = {
  marcaCelular: 'Asus',
  tamanhoTela: {
    vertical: 155,
    horizontal: 75
  },
  capacidadeBateria: 5000,
  ligar: function () {
    console.log('Fazendo ligação...')
  }
}

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
  return {
    marcaCelular,
    tamanhoTela,
    capacidadeBateria,
    ligar(){console.log(`Fazendo Ligação...`)}
  }
}

let celular2 = criarCelular("Samsung", 6, 5500);

console.log(celular1,celular2)