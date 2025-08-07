function helloWorld() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Hello, World!');
    } else {
      reject(new Error('Failed to say hello'));
    }
  });
}

function addEmoji(message) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message + ' 👋');
    }, 1000);
  });
}

helloWorld()
  .then(message => {
    console.log(message);
    return addEmoji(message);
  })
  .then(emojiMessage => console.log(emojiMessage))
  .catch(error => console.error(error))
  .finally(() => console.log('Promise completed'));

console.log('---');

function getMotorcycle(id) {
  return new Promise((resolve, reject) => {
    resolve({ id, brand: 'Honda', model: 'CB500 Hornet', year: 2024, price: 7000 });
  });
}

function addTax(price) {
  return Promise.resolve(price * 1.2);
}

getMotorcycle(1)
  .then(motorcycle => addTax(motorcycle.price))
  .then(taxedMotorcycle => console.log(taxedMotorcycle))
  .catch(error => console.error(error));

console.log('---');