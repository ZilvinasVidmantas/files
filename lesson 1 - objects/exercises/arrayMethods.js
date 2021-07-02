// array.prototype.forEach
function printDouble(el, i, arr) {
  console.log(el * 2);
}

const printDoubleLambda = x => console.log(x * 2);

const numbers = [2, 5, 7, -2, 6];
// numbers.forEach(printDouble); // function
// numbers.forEach(printDoubleLambda); // lambda
// numbers.forEach(x => console.log(x * 2)); // annonymous lambda
// numbers.forEach(function (x) { console.log(x * 2) }); // annonymous function


// array.prototype.map
// this method returns an array, which is formed by iterating through base array,
//  and saving values by executing the callback function
//  the callback function must return value

const numbersDoubled = numbers.map(function (x) { return x * 2 });
const valuesAndDoubles = numbers.map(function (x) {
  return {
    val: x,
    doubled: x * 2
  }
});

const people = [
  { name: 'Serbetautas', surname: 'Bordiuras', age: 26, salary: 2000 },
  { name: 'Jolka', surname: 'Kalėdaitė', age: 16, salary: 1600 },
  { name: 'Saulius', surname: 'Manegrūda', age: 23, salary: 2400 }
];

// 1. Create an array of fullnames based on <people> array: Array of strings
const fullnames = people.map(function (person) {
  return `${person.name} ${person.surname}`
})
const fullnames2 = people.map(({ name, surname }) => `${name} ${surname}`);

// 2. Create and array of objects, without name ar surname
const fullnameObjects = [];
// 3. Create and array of same objects, appended by a property <portion>, which value
// is a percentage of all other members salary in array
const peopleWithSalaryPortion = [];