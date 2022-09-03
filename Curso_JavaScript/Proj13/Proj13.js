//Montador de postagem de blog
//Objeto postagem de blog
/*titulo, mensagem, autor, visualizações, comentários[autor,mensagem], estaAoVivo*/

let postagem = {
  titulo: 'exemplo',
  mensagem: 'que exemplo!',
  autor: 'Eduardo',
  visualizacoes: 532,
  comentarios: [
    {
      autor: 'Douglas',
      comentario: 'muito bom exemplo!'
    },
    {
      autor: 'Junia',
      comentario: 'top!'
    },
    {
      autor: 'Patricia',
      comentario: ':joy:joy:joy'
    }
  ],
  estaAoVivo: true
}

console.log(postagem)