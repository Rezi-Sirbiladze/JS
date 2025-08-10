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

async function calculateFee(amount) {
  return amount * 0.05;
}

async function main() {
  const fee = await calculateFee(100);
  console.log('Calculated fee:', fee);
  return fee;
}

main();

console.log('---');

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log('Fetched data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    console.log('Fetch data operation completed.');
    throw new Error('Fetch data failed');
  }
}

fetchData();
