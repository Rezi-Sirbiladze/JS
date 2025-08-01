console.log('---');

const animals = [
    { id: 1, name: 'Perro', type: 'Mamífero' },
    { id: 2, name: 'Gato', type: 'Mamífero' },
    { id: 3, name: 'Loro', type: 'Ave' },
    { id: 4, name: 'Tortuga', type: 'Reptil' },
    { id: 5, name: 'Salamandra', type: 'Anfibio' }
];
console.log(animals[0].name);
console.log(animals[1].name);
console.log(animals.length);
console.log(animals.at(-1).name);

console.log('---');

const fruits = ['Manzana', 'Banana', 'Naranja', 'Fresa'];
console.log({ fruits });
const fruitsCopy = fruits.with(1, 'Kiwi');
console.log({ fruitsCopy });

console.log('---');

const numbers = [1, 2, 3, 4, 5];
const groupNumbers = Object.groupBy(numbers, (num) => {
    return num % 2 === 0 ? 'even' : 'odd';
});
console.log({ groupNumbers });

const names = ['Alice', 'Ava', 'Bob', 'Charlie', 'Cloe', 'David', 'Eve', 'Frank', 'Grace', 'Gina', 'Hannah', 'Ian', 'Ivy', 'Jack'];
const groupedNames = Object.groupBy(names, (name) => name[0]);
console.log({ groupedNames });

const motoGp = [
    { id: 1, name: 'Ducati', country: 'Italia', wins: 10 },
    { id: 2, name: 'Yamaha', country: 'Japón', wins: 5 },
    { id: 3, name: 'Honda', country: 'Japón', wins: 8 },
    { id: 4, name: 'KTM', country: 'Austria', wins: 2 },
    { id: 5, name: 'Aprilia', country: 'Italia', wins: 3 }
];
const groupedMotoGp = Object.groupBy(motoGp, (team) => {
    if (team.wins >= 8) return 'high';
    if (team.wins >= 5) return 'medium';
    return 'low';
});
console.log({ groupedMotoGp });

console.log('---');

const colors = new Set(['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Purple', 'Orange', 'Cyan', 'Magenta']);
const moreColors = new Set(['Yellow', 'Pink', 'Purple']);
const otherColors = new Set(['Orange', 'Cyan', 'Magenta']);

const hasRed = colors.has('Red');
const union = new Set([...colors, ...moreColors]);
const intersection = new Set([...colors].filter(color => moreColors.has(color)));
const difference = new Set([...colors].filter(color => !moreColors.has(color)));
const symmetricDifference = new Set([...union].filter(color => !intersection.has(color)));

colors.isSubsetOf(moreColors);
colors.isSupersetOf(moreColors);
colors.isDisjointFrom(moreColors);

console.log({ hasRed, union, intersection, difference, symmetricDifference });