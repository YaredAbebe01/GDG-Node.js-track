const _ = require('lodash');

const numbers = [1,2,3,4,5,6,7,8,9];

const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

console.log("Max number:", maxNumber);
console.log("Min number:", minNumber);
