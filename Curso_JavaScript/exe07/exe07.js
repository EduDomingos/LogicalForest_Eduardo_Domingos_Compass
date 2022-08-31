//Criar função somar que retorna a
//soma de todos os múltiplos de 3 e 5

console.log(somar(10))

function somar(limite){
  let resultado = 0

  for(i=1; i<=limite; i++){
    if(i % 3 === 0) resultado += i 
    if(i % 5 === 0) resultado += i 
  }
  
  return resultado
}