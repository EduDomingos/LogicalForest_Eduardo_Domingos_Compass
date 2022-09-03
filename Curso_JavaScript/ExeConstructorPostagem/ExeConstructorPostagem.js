//Constructor function postagem de blog
/*titulo, mensagem, autor, visualizações, comentários[autor,mensagem], estaAoVivo*/

function Postagem(titulo, mensagem, autor) {
  this.titulo = titulo
  this.mensagem = mensagem
  this.autor = autor
  this.visualizacoes = 0
  this.comentarios = []
  this.estaAoVivo = false
}

let postagem1 = new Postagem("JavaScript", "Que bacana!", "Eduardo")

console.log(postagem1)