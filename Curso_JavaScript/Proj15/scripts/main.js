function verificarEntrada() {
  let convidado = document.getElementById('inpConvidado').value
  let anfitriao = document.getElementById('inpAnfitriao').value
  let resultado = document.querySelector('#spanValidar')

  switch (anfitriao) {
    case 'Eduardo':
      switch (convidado) {
        case 'Denise':
        case 'Junia':
        case 'Patricia':
        case 'Fernanda':
          resultado.setAttribute('class', 'resultYes')
          resultado.innerHTML = 'Autorizado!'
          break

        default:
          resultado.setAttribute('class', 'resultNo')
          resultado.innerHTML = 'Não autorizado!'
          break
      }
      break

    case 'Nosvaldo':
      switch (convidado) {
        case 'Douglas':
        case 'Karen':
        case 'Kelly':
          resultado.setAttribute('class', 'resultYes')
          resultado.innerHTML = 'Autorizado!'
          break

        default:
          resultado.setAttribute('class', 'resultNo')
          resultado.innerHTML = 'Não autorizado!'
          break
      }
      break

    default:
      resultado.setAttribute('class', 'resultNo')
      resultado.innerHTML = 'Não autorizado!'
      break
  }
}
