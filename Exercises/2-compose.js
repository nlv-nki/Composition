'use strict';

const inc2 = 'x => ++x';
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;


class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
      this.events[eventName] = []
      this.events[eventName].push(callback);
  }
  emit(eventName, args) {
    const event = this.events[eventName];
    if (event) {
      event.forEach(callback => callback.call(null, args));
    }
  }

}

const emmiter = new EventEmitter();

const compose = (...fns) => {
  function wrapper(x) {
  //  debugger
    const f_length = fns.length - 1;
    console.log(f_length, fns.length, 'args in ' );
    console.log(fns[f_length]);
    let result = null;
    try {
      for (let i = f_length; i >= 0; i--) {
        if (typeof fns[i] == 'function') {
          if (result === null) {
            console.log(fns[f_length](x), 666);
            result = fns[f_length](x)
            console.log(result);
          } else {
            result = fns[i](result)
            console.log(result, 'else branch');
          }
        } else {
          throw new Error('F not a function');
        }
      }
    } catch (error) {

        emmiter.emit('error', error.message)
      return undefined;
    }

    return result;

  }

  wrapper.on = emmiter.subscribe.bind(emmiter);
  return wrapper;
}


// const f = compose(inc2, twice, cube);
// f.on('Error', e => {
//   console.log(e);
// })

// const x = f(5);
// console.log(x, 'res');



const inc3 = x => ++x;
const dec = x => --x;
const y = compose(inc3, dec);
const z = y(1);
console.log(`Z result is ${z}`);




// module.exports = {
//   compose
// };
