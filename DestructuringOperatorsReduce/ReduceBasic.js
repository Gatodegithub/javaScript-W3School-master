// iterates, callback function
// recude a un unico valor - numero, array, objeto
// 1st parameter ('total') - total of all calculations
// 2st parameter ('element') - current iteration / value

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const dailyTotal = staff.reduce((total, element) => {
  total += element.salary;
  return total;
}, 0)

console.log(dailyTotal);