function *generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}

let generator = generateSequence();

console.log(...generator);

//iterable iterator with generators
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log(...range); // 1,2,3,4,5


function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
  yield* generateSequence(48, 57);
  // A..Z
  yield* generateSequence(65, 90);
  // a..z
  yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z


function* pseudoRandom(seed) {
  let value = seed;

  while(true) {
    value = value * 16807 % 2147483647
    yield value;
  }
};

let generator1 = pseudoRandom(1);


console.log(generator1); // 16807
console.log(generator1.next().value); // 16807
console.log(generator1.next().value); // 282475249
console.log(generator1.next().value); // 1622650073