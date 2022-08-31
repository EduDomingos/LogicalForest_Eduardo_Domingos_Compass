//Criar uma função que exibe a quantidade de *
//que aquela linha possui
exibirAsteriscos(7)

function exibirAsteriscos(linhas) {
  // let ast = "*";
  // for(i=1; i<=linhas; i++){
  //   console.log(ast);
  //   ast += "*";
  // }

  for (let i = 0; i < linhas; i++) {
    let ast = '*'
    for (j = 1; j <= i; j++) {
      ast += '*'
    }
    console.log(ast)
  }
}
