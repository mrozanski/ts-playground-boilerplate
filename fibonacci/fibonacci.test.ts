import { fibonacciValue } from './index';

test('fibonacciValue is a function', () => {
  expect(typeof fibonacciValue).toEqual('function');
});

test('fibonacciValue 3 if passeed 4', () => {
    expect(fibonacciValue(4)).toEqual(
      3
    );
  });


test('fibonacciValue 0 if passeed 0', () => {
    expect(fibonacciValue(0)).toEqual(
      0
    );
  });



  test('fibonacciValue 34 if passeed 9', () => {
    expect(fibonacciValue(9)).toEqual(
      34
    );
  });