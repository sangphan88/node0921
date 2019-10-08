
const students = require('./student');

let _ = require('lodash');

// ----------- count gender
let countGender = _.reduce(students, function(result, student) {
    result[student.gender] = result[student.gender] ? result[student.gender] + 1 : 1;
    return result;
}, {} );

console.log(countGender);


// ---------- show name
let studentNames = function (colName) {
    return _.map(students, colName);
};

let keyName = 'name';
console.log(studentNames(keyName));
