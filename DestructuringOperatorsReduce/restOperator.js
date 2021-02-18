// arrays
const fruits = ['sandia', 'manzana', 'naranja', 'platano', 'shirimoya', 'mora'];
const [first, ...restOfTheFruits] = fruits;

console.log(first, restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit) => fruit === 'platano');

console.log(specificFruit)

// Objects
const person = { name: 'Aldo', lastName: 'Saavedra', job: 'Developer' };
const { job, ...rest } = person;

console.log(job, rest);

// Functions
const getAverage = (name, ...scores) => {
  console.log(name)
  console.log(scores)
  const average = scores.reduce((total, item) => {
    return total += item
  }, 0) / scores.length;
  console.log(average);
};

const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores);