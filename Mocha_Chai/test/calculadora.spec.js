import assert from "assert";
import chai from 'chai';
import { describe } from "mocha";
import Calculadora from "../src/Calculadora.js"

const expect = chai.expect

describe('Testando classe Calculadora.js', ()=>{

  //Suíte de soma
  describe("Testes de soma", () => {
  
    it("Naturais: deve somar 7 e 5 resultando em 12", ()=>{
      let resultado = Calculadora.soma(7,5)
      expect(resultado).to.be.eq(12)
    })

    it("Inteiros: deve somar -7 e 5 resultando em -2", ()=>{
      let resultado = Calculadora.soma(-7,5)
      expect(resultado).to.be.eq(-2)
    })

    it("Racionais: deve somar 1.5 e 1.5 resultando em 3", ()=>{
      let resultado = Calculadora.soma(1.5,1.5)
      expect(resultado).to.be.eq(3)
    })

  })

  //Suíte de subtração
  describe("Testes de subtração", () => {
  
    it("Naturais: deve subtrair 7 e 5 resultando em 2", ()=>{
      let resultado = Calculadora.subtrai(7,5)
      expect(resultado).to.be.eq(2)
    })

    it("Inteiros: deve subtrair -7 e 5 resultando em -12", ()=>{
      let resultado = Calculadora.subtrai(-7,5)
      expect(resultado).to.be.eq(-12)
    })

    it("Racionais: deve subtrair 1.5 e 1.5 resultando em 0", ()=>{
      let resultado = Calculadora.subtrai(1.5,1.5)
      expect(resultado).to.be.eq(0)
    })

  })

  //Suíte de multipicação
  describe("Testes de multiplicação", () => {
  
    it("Naturais: deve multiplicar 7 e 5 resultando em 35", ()=>{
      let resultado = Calculadora.multiplica(7,5)
      expect(resultado).to.be.eq(35)
    })

    it("Inteiros: deve multiplicar -7 e 5 resultando em -35", ()=>{
      let resultado = Calculadora.multiplica(-7,5)
      expect(resultado).to.be.eq(-35)
    })

    it("Racionais: deve subtrair 1.5 e 1.5 resultando em 0", ()=>{
      let resultado = Calculadora.multiplica(1.5,1.5)
      expect(resultado).to.be.eq(2.25)
    })
  })

  //Suíte de divisão
  describe("Testes de divisão", () => {
  
    it("Naturais: deve dividir 35 por 5 resultando em 7", ()=>{
      let resultado = Calculadora.divide(35,5)
      expect(resultado).to.be.eq(7)
    })

    it("Inteiros: deve dividir -35 por 5 resultando em -7", ()=>{
      let resultado = Calculadora.divide(-35,5)
      expect(resultado).to.be.eq(-7)
    })

    it("Racionais: deve dividir 1.5 por 1.5 resultando em 1", ()=>{
      let resultado = Calculadora.divide(1.5,1.5)
      expect(resultado).to.be.eq(1)
    })

    it("Inconsistência: deve dividir 0 por 0 resultando em NaN", ()=>{
      let resultado = Calculadora.divide(0,0)
      expect(resultado.toString()).to.be.eq("NaN")
    })

  })
  
  //Suíte de potenciação
  describe("Testes de potenciação a^b", ()=>{
    
    it("4 elevado a 2 resultando em 16", ()=>{
      let resultado = Calculadora.eleva(4,2)
      expect(resultado).to.be.eq(16)
    })

    it("3 elevado a 3 resultando em 27", ()=>{
      let resultado = Calculadora.eleva(3,3)
      expect(resultado).to.be.eq(27)
    })

    it("25 elevado a 0.5 resultando em 5", ()=>{
      let resultado = Calculadora.eleva(25,0.5)
      expect(resultado).to.be.eq(5)
    })

  })

  //Suíte de fatorial
  describe("Testes de fatorial n!", ()=>{
    
    it("Naturais: fatorial de 4 resultando em 24", ()=>{
      let resultado = Calculadora.fatorial(4)
      expect(resultado).to.be.eq(24)
    })

    it("Naturais: fatorial de 6 resultando em 720", ()=>{
      let resultado = Calculadora.fatorial(6)
      expect(resultado).to.be.eq(720)
    })

  })

  //Suíte de média
  describe("Testes de calculo de média com array", ()=>{
    
    it("Média do array [10, 10, 10, 2] resultando em 8", ()=>{
      let resultado = Calculadora.media([10, 10, 10, 2])
      expect(resultado).to.be.eq(8)
  
    })

    it("Média do array [10, 10, 10, 5, 5, 5] resultando em 7.5", ()=>{
      let resultado = Calculadora.media([10, 10, 10, 5, 5, 5])
      expect(resultado).to.be.eq(7.5)
    })

    it("Média do array [a, 10] resultando em NaN", ()=>{
      let resultado = Calculadora.media(['a', 10])
      expect(resultado.toString()).to.be.eq("NaN")
    })
  
  })
})
