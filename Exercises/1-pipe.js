'use strict';
const inc = x => ++x;
// const inc =  'err';
const twice = x => x * 2;
const cube = x => x ** 3;
// console.log(typeof inc);

//const pipe = (...fns) => x => null;
///const pipe = (...fns) => x => null;

function pipe(...fns) {
  return function (x) {
    return fns.reduce((result, current) => {
      console.log(result);
      if (typeof current !== 'function') {
        throw new Error('All compose arguments should be functions');
      } else {
        return result = current(result)
      }
    }, x)
  }
}

// const pipe = (...fns) => x => fns.reduce((result,current) => result = current(result),x)


 const f = pipe(inc, twice, cube);
 const x = f(5);
 console.log(x);



module.exports = { pipe };
