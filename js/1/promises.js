console.log('---');

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 1);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2);
});

Promise.allSettled([promise1, promise2]).then((results) => {
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index + 1} resolved with: ${result.value}`);
        } else {
            console.log(`Promise ${index + 1} rejected with: ${result.reason}`);
        }
    });
    console.log('---');
});

console.log('---');

const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const api2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
const api3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

Promise.any([api1, api2, api3])
    .then(response => response.json())
    .then(data => console.log('API response:', data))
    .catch(error => console.error('Error fetching APIs:', error));

console.log('---');

function getMotorcycle() {
    return {
        brand: 'Honda',
        model: 'CBR650R',
        year: 2029
    }
}

Promise.try(() => getMotorcycle())
    .then((result) => {
        console.log({ result });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

console.log('---');


const { promise, resolve, reject } = Promise.withResolvers();

setTimeout(() => {
    resolve({
        brand: 'BMW',
        model: 'M3',
        year: 2006
    });
}, 40);

promise
    .then((car) => {
        console.log('Car details:', car);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

console.log('---');