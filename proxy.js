//proxy without traps

let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;

console.log(target.test);

console.log(proxy.test); // 5

//proxy with traps (get)

let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};
dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    if (phrase in target) {
      return target[phrase];
    } else {
      return phrase;
    }
  }
});

console.log(dictionary) // proxy type
console.log(dictionary['Hello'] ); // Hola
console.log(dictionary['Welcome to Proxy']); // Welcome to Proxy (translation is absent)


//proxy with traps (set)

let numbers = [];

numbers = new Proxy(numbers, {
  set(target, prop, val) {
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers.push(1);
numbers.push(2);

console.log(numbers.length); // 2

// numbers.push("test"); // TypeError (trap set on proxy returned false)


let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
      get(proxyTarget, property, receiver) {
        if (property in proxyTarget) {
          return Reflect.get(proxyTarget, property, receiver);
        } else {
          throw new Error('Error, this property is absent');
        }
      }
  });
}

// user = wrap(user);

// console.log(user.name); // John
// console.log(user.age); // Error, this property is absent


let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    if (prop < 0) {
      prop = target.length + Number(prop);
    }
    
    return Reflect.get(target, prop, receiver);
  }
});


console.log(array[-1]); // 3
console.log(array[-2]); // 2