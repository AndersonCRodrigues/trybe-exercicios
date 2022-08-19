let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for (let i = 1; i < numbers.length; i += 1) {
  numbers2.push(numbers[i-1] * numbers[i]);
}

console.log(numbers2);