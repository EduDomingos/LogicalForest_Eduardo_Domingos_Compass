//Números primos
//Criar função para exibir números primos até um limite

exibirNumerosPrimos(20)

function exibirNumerosPrimos(limite) {
  for (numero = 2; numero <= limite; numero++) {
    if (numeroPrimo(numero)) console.log(numero)
  }
}

function numeroPrimo(numero) {
  for (divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      return false
    }
    return true
  }
}

//*************Primeira solução*************
// function exibirNumerosPrimos(limite) {
// for(i=2; i<=limite; i++){
//   let divisores = 0;
//   for(j=2; j<i; j++){
//     let testeDivisao = i % j;
//     if(testeDivisao === 0) divisores += 1;
//   }
//   if(divisores === 0) console.log(`${i} é primo`)
// }
//}

//*************Segunda solução*************
// function exibirNumerosPrimos(limite) {
// for (numero = 2; numero <= limite; numero++) {
//   let flagPrimo = true
//   for (divisor = 2; divisor < numero; divisor++) {
//     if (numero % divisor === 0) {
//       flagPrimo = false;
//       break;
//     }
//   }
//   if(flagPrimo) console.log(`${numero} é um número primo.`)
// }
//}
