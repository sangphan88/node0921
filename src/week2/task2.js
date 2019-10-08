const fs = require('fs');
const _ = require('lodash');
const moment = require('moment');
const momenttz = require('moment-timezone');

const myzone = "Asia/Ho_Chi_Minh";
let datas = fs.readFileSync('./src/week2/product.json');
let allProduct = JSON.parse(datas);


console.log(allProduct[0]);

console.log('len = ' + allProduct.length);
console.log('--------------------------------------');

//------------------
//GMT+0100(CET) Paris,France
let changeDate = function (listproduct) {
    return _.reduce(listproduct, (result , cur) => {
        cur.dateUpdated = toTimeZone(new Date(cur.dateUpdated), myzone);
    }, listproduct);
};

function toTimeZone(time, zone){
    let dtformat = "DD/MM/YYYY HH:mm:ss";
    return momenttz.tz(time ,zone).format(dtformat);
}

changeDate(allProduct);
console.log('afer change = ' + allProduct[0].dateUpdated);
console.log('--------------------------------------');
//------------------
//0001 - iPhone X - 30,000,000VND - Cập nhật cách đây 3 ngày
let printProuct = function (listprofuct) {
    listprofuct.sort((a, b) => (a.id > b.id) ? 1 : -1);
    listprofuct.forEach(function (el) {
        logCs('-', el.id, el.category, numberWith( ',', el.price), datePass(el.dateUpdated));
    });
};

printProuct(allProduct);

function numberWith(char, number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, char) + 'VND';
}

function logCs(char, ...args){
    console.log(args.join(' - '));
}

function datePass(date, s) {
    let before = moment(new Date(date));
    let now = moment();
    let diff = moment.duration(now.diff(before));
    s = 'cap nhat cach day '
    if (diff.years() > 0) {
        s += diff.years() + ' nam ';
    }
    if (diff.months() > 0) {
        s += diff.months() + ' thang ';
    }
    if (diff.days() > 0) {
        s += diff.days() + ' ngay ';
    }
    s += diff.hours() + ' gio ' + diff.minutes() + ' phut';
    return s;
}