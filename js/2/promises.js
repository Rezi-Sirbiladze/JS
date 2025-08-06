function helloWorld() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Hello, World!');
    } else {
      reject(new Error('Failed to say hello'));
    }
  });
}

console.log('---');