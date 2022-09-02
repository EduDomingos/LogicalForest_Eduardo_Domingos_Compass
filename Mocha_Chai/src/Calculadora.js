import _ from 'underscore'

export default class Calculadora{

  static soma(a,b){
    return a+b;
  }

  static subtrai(a,b){
    return a-b;
  }

  static multiplica(a,b){
    return a*b;
  }

  static divide(a,b){
    return a/b;
  }

  static eleva(a,b){
    return a**b;
  }

  static fatorial(n){
    return _.range(1,n+1).reduce((memo,x)=>{return memo*x});
  }
  
  static media(array){
    return _(array).reduce((memo,x)=>{return memo+x}) / array.length;
  }
}