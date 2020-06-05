/**
 * While Looping
 */

console.log('While Looping...');
let index = 0;

while (index < 5) {
    console.log(index);
    index++;
}

console.log('\n');

/**
 * For Looping
 */

console.log('For Looping...');
for (let index = 0; index < 5; index++) {
    console.log(index);
}

console.log('\n');

/**
 * Array For Looping
 */

console.log('Array For Looping...'); 
const fruits = ['Apel', 'Mangga', 'Pisang'];
for ( fruit of fruits ) {
    console.log(fruit); // returning value of array only
} 

console.log('\n');

/**
 * Object For Looping
 */

console.log('Object For Looping...'); 
const profile = {
    name: 'Jojon',
    age: 21
}

for ( key in profile ) {
    console.log(key); //key
    console.log(profile[key]); //value
}

console.log('\n');

/**
 * Foreach Looping
 */

console.log('Foreach Looping...'); 
fruits.forEach(value => {
    console.log(value);
});

console.log('Foreach Looping with value(fruit) and key(index)...'); 
fruits.forEach((fruit, index) => {
    console.log(fruit + ' is value of index ' + index);
});

console.log('\n');

/**
 * Map Looping (similiar to Foreach with some advantages)
 */

console.log('Map Looping...');
const fruitModified = fruits.map((fruit, index) => {
    return {
        fruit: fruit,
        index: index
    }
});

console.log(fruitModified);
