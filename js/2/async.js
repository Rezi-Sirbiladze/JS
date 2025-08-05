function sumSync(a, b) {
  return a + b;
}

console.log('Synchronous sum:', sumSync(2, 3));

console.log('---');

function sumAsync(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

sumAsync(2, 3, function (result) {
  console.log('Asynchronous sum:', result);
});

console.log('---');