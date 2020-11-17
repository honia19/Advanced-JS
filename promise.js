// Promise.all success
let names = ['honia19', 'plzen', 'roman-boyko', 'Draglon'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => Promise.all(responses.map(r => r.json())))
  .then(users => users.forEach(({ name }) => console.log(name)));


  // Promise.all error
  Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Error!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ])
  .catch(error => console.log(error));

  // Promise.race
  Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1500)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
  ]).then(resp => console.log(resp)); // 3

  //Promise.allSettled

  let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
  ];
  
  Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => {
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          console.log(`${urls[num]}: ${result.value.status}`); //
        }
        if (result.status == "rejected") {
          console.log(`${urls[num]}: ${result.reason}`); // get fetch error reason
        }
      });
    });