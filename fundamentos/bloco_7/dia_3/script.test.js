const { expect, describe, it } = require('@jest/globals');
const { sum, myRemove, myFizzBuzz } = require('./script');

describe('function sum()', () => {
  it('Testa retorno da soma', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });

  it('Testa retorno de erro da soma', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});

describe('Function MyRemove', () => {
  it('testa o retorno da função', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});

describe('Function myFizzBuzz', ()=> {
  it('testa o retorno da função', ()=>{
    expect(myFizzBuzz(30)).toBe('fizzbuzz');
    expect(myFizzBuzz(6)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(7)).toEqual(7);
    expect(myFizzBuzz('5')).toEqual(false);
  })
})