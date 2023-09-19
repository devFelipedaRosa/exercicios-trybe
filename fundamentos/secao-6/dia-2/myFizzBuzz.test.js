const myFizzBuzz = require ('./myFizzBuzz');

describe ('test myFizzBuzz function', () => {
    test ('Return fizzbuzz if num divide by 3 and 5', () => {
        expect (myFizzBuzz (15)) .toBe ('fizzbuzz');
    });

    test ('Return fizz if num divide by 3', () => {
        expect (myFizzBuzz (9)) .toBe ('fizz');
    });

    test ('Return buzz if num divide by 5', () => {
        expect (myFizzBuzz (10)) .toBe ('buzz');
    });

    test ('Return num if num is not divisible by 3 nor 5', () => {
        expect (myFizzBuzz (8)) .toBe (8);
    });

    test ('Return false if num is not a number', () => {
        expect (myFizzBuzz ('12')) .toBe (false);
    });
})