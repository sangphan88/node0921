const  moment = require('moment');

let newDate = new Date('Mon Jan 01 2018 00:00:00 GMT+0100 (CET)');

//console.log(newDate);
//console.log(newDate.toLocaleString());

var momentDate = moment(newDate);
console.log(momentDate.format('DD/MM/YYYY h:mm:ss a'));

let date = momentDate.toString('dd/MM/YYYY hh:mm:ss');

console.log(date);