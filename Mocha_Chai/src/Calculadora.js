import _ from 'underscore'

export default class Calculadora {
  static soma(a, b) {
    if (Number.isInteger(a + b)) {
      return a + b
    } else return Number((a + b).toFixed(2))
  }

  static subtrai(a, b) {
    if (Number.isInteger(a - b)) {
      return a - b
    } else return Number((a - b).toFixed(2))
  }

  static multiplica(a, b) {
    if (Number.isInteger(a * b)) {
      return a * b
    } else return Number((a * b).toFixed(2))
  }

  static divide(a, b) {
    if (Number.isInteger(a / b)) {
      return a / b
    } else return Number((a / b).toFixed(2))
  }

  static eleva(a, b) {
    if (a === 0 && b <= 0) return NaN
    else {
      if (Number.isInteger(a ** b)) {
        return a ** b
      } else return Number((a ** b).toFixed(2))
    }
  }
  static fatorial(n) {
    if (n === 0) return 1
    else
      return _.range(1, n + 1).reduce((memo, x) => {
        return memo * x
      })
  }

  static media(array) {
    let media = _(array).reduce((memo, x) => {return memo + x}) / array.length
    if (Number.isInteger(media)) {
      return media
    } else return Number(media.toFixed(2))


  }
}
