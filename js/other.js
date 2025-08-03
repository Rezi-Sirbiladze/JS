const price = 100_342_000;
const taxRate = 0.15_123_123;
const tax = price * taxRate;
console.log(`Price: $${price.toLocaleString()}`);

const numberBinary = 0b1010_1011_1100_1101;
console.log(`Binary Number: ${numberBinary.toString(2)}`);

console.log('---');

const sym = Symbol('description');
console.log(`Symbol: ${sym.description}`);

console.log('---');