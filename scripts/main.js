function verificarEntrada() {
  let convidado = document.getElementById('inpConvidado').value
  let anfitriao = document.getElementById('inpAnfitriao').value
  let resultado = document.querySelector('#spanValidar')

  convidadosEduardo = ['Denise', 'Junia', 'Patricia', 'Fernanda']
  convidadosNosvaldo = ['Douglas', 'Karen', 'Kelly']

  switch (anfitriao) {
    case 'Eduardo':
      if (convidadosEduardo.includes(convidado)) {
        resultado.setAttribute('class', 'resultYes')
        resultado.innerHTML = 'Autorizado!'
      } else {
        resultado.setAttribute('class', 'resultNo')
        resultado.innerHTML = 'Não autorizado!'
      }

      break

    case 'Nosvaldo':
      if (convidadosNosvaldo.includes(convidado)) {
        resultado.setAttribute('class', 'resultYes')
        resultado.innerHTML = 'Autorizado!'
      } else {
        resultado.setAttribute('class', 'resultNo')
        resultado.innerHTML = 'Não autorizado!'
      }

      break

    default:
      resultado.setAttribute('class', 'resultNo')
      resultado.innerHTML = 'Não autorizado!'
      break
  }
}
