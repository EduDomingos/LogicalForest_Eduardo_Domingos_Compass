import assert from 'assert'
import chai from 'chai'
import { describe } from 'mocha'
import Calculadora from '../src/Calculadora.js'

const expect = chai.expect

describe('Testes da classe Calculadora.js', () => {
  //Suíte de soma
  describe('Testes de soma', () => {
    it('01- Naturais: deve somar 7 e 5 resultando em 12', () => {
      let resultado = Calculadora.soma(7, 5)
      expect(resultado).to.be.eq(12)
    })

    it('02- Inteiros: deve somar -7 e 5 resultando em -2', () => {
      let resultado = Calculadora.soma(-7, 5)
      expect(resultado).to.be.eq(-2)
    })

    it('03- Racionais: deve somar 1.5 e 1.5 resultando em 3', () => {
      let resultado = Calculadora.soma(1.5, 1.5)
      expect(resultado).to.be.eq(3)
    })

    it('04- Racionais, resultado com decimal: deve somar 1.31 e 1.600 resultando em 2.91', () => {
      let resultado = Calculadora.soma(1.31, 1.600)
      expect(resultado).to.be.eq(2.91)
    })
  })

  //Suíte de subtração
  describe('Testes de subtração', () => {
    it('05- Naturais: deve subtrair 7 e 5 resultando em 2', () => {
      let resultado = Calculadora.subtrai(7, 5)
      expect(resultado).to.be.eq(2)
    })

    it('06- Inteiros: deve subtrair -7 e 5 resultando em -12', () => {
      let resultado = Calculadora.subtrai(-7, 5)
      expect(resultado).to.be.eq(-12)
    })

    it('07- Racionais: deve subtrair 1.5 e 1.5 resultando em 0', () => {
      let resultado = Calculadora.subtrai(1.5, 1.5)
      expect(resultado).to.be.eq(0)
    })

    it('08- Racionais, resultado com decimal: deve subtrair 1.5 e 1.49 resultando em 0.01', () => {
      let resultado = Calculadora.subtrai(1.5, 1.49)
      expect(resultado).to.be.eq(0.01)
    })
  })

  //Suíte de multipicação
  describe('Testes de multiplicação', () => {
    it('09- Naturais: deve multiplicar 7 e 5 resultando em 35', () => {
      let resultado = Calculadora.multiplica(7, 5)
      expect(resultado).to.be.eq(35)
    })

    it('10- Inteiros: deve multiplicar -7 e 5 resultando em -35', () => {
      let resultado = Calculadora.multiplica(-7, 5)
      expect(resultado).to.be.eq(-35)
    })

    it('11- Racionais, resultado com decimal: deve multiplicar 1.5 e 1.5 resultando em 2.25', () => {
      let resultado = Calculadora.multiplica(1.5, 1.5)
      expect(resultado).to.be.eq(2.25)
    })

  })

  //Suíte de divisão
  describe('Testes de divisão', () => {
    it('12- Naturais: deve dividir 35 por 5 resultando em 7', () => {
      let resultado = Calculadora.divide(35, 5)
      expect(resultado).to.be.eq(7)
    })

    it('13- Inteiros: deve dividir -35 por 5 resultando em -7', () => {
      let resultado = Calculadora.divide(-35, 5)
      expect(resultado).to.be.eq(-7)
    })

    it('14- Racionais: deve dividir 1.5 por 1.5 resultando em 1', () => {
      let resultado = Calculadora.divide(1.5, 1.5)
      expect(resultado).to.be.eq(1)
    })

    it('15- Racionais, resultado com decimal: deve dividir 3 por 4 resultando em 0.75', () => {
      let resultado = Calculadora.divide(3, 4)
      expect(resultado).to.be.eq(0.75)
    })

    it('16- Racionais, resultado é dízima periódica: deve dividir 1 por resultando em 0.33', () => {
      let resultado = Calculadora.divide(1, 3)
      expect(resultado).to.be.eq(0.33)
    })

    it('17- Inconsistência: deve dividir 0 por 0 resultando em NaN', () => {
      let resultado = Calculadora.divide(0, 0)
      expect(isNaN(resultado)).to.be.eq(true)
    })
  })

  //Suíte de potenciação
  describe('Testes de potenciação a^b', () => {
    it('18- 4 elevado a 2 resultando em 16', () => {
      let resultado = Calculadora.eleva(4, 2)
      expect(resultado).to.be.eq(16)
    })

    it('19- 3 elevado a 3 resultando em 27', () => {
      let resultado = Calculadora.eleva(3, 3)
      expect(resultado).to.be.eq(27)
    })

    it('20- 25 elevado a 0.5 resultando em 5', () => {
      let resultado = Calculadora.eleva(25, 0.5)
      expect(resultado).to.be.eq(5)
    })

    it('21- 4 elevado a -2 resultando em 0.06', () => {
      let resultado = Calculadora.eleva(4, -2)
      expect(resultado).to.be.eq(0.06)
    })

    it('22- 10 elevado a 0 resultando em 1', () => {
      let resultado = Calculadora.eleva(10, 0)
      expect(resultado).to.be.eq(1)
    })

    it('23- 0 elevado a 0 resultando em NaN', () => {
      let resultado = Calculadora.eleva(0, 0)
      expect(isNaN(resultado)).to.be.eq(true)
    })

    it('24- 0 elevado a -1 resultando em NaN', () => {
      let resultado = Calculadora.eleva(0, -1)
      expect(isNaN(resultado)).to.be.eq(true)
    })

  })

  //Suíte de fatorial
  describe('Testes de fatorial n!', () => {
    it('25- Fatorial de 4 resultando em 24', () => {
      let resultado = Calculadora.fatorial(4)
      expect(resultado).to.be.eq(24)
    })

    it('26- Fatorial de 6 resultando em 720', () => {
      let resultado = Calculadora.fatorial(6)
      expect(resultado).to.be.eq(720)
    })

    it('27- Fatorial de 1 resultando em 1', () => {
      let resultado = Calculadora.fatorial(1)
      expect(resultado).to.be.eq(1)
    })

    it('28- Fatorial de 0 resultando em 1', () => {
      let resultado = Calculadora.fatorial(0)
      expect(resultado).to.be.eq(1)
    })
  })

  //Suíte de média
  describe('Testes de calculo de média simples utilizando array', () => {
    it('29- Média do array [10, 10, 10, 2] resultando em 8', () => {
      let resultado = Calculadora.media([10, 10, 10, 2])
      expect(resultado).to.be.eq(8)
    })

    it('30- Média do array [10, 10, 10, 5, 5, 5] resultando em 7.5', () => {
      let resultado = Calculadora.media([10, 10, 10, 5, 5, 5])
      expect(resultado).to.be.eq(7.5)
    })

    it('31- Média do array [10, 7, 6, 5, 4, 3] resultando em 5.83', () => {
      let resultado = Calculadora.media([10, 7, 6, 5, 4, 3])
      expect(resultado).to.be.eq(5.83)
    })

    it('32- Média do array [a, 10] resultando em NaN', () => {
      let resultado = Calculadora.media(['a', 10])
      expect(isNaN(resultado)).to.be.eq(true)
    })
  })
})
