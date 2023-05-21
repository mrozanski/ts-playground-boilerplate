import { someCodingFun } from './index';

test('someCodingFun is a function', () => {
  expect(typeof someCodingFun).toEqual('function');
});

test('someCodingFun returns the input string', () => {
    expect(someCodingFun('Typescript is bueno')).toEqual(
      'Typescript is bueno'
    );
  });