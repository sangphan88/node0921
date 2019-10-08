const fs = require('fs');
const _ = require('lodash');
const xlsx = require('xlsx');

//change date
function changeDate(listproduct) {
    return _.reduce(listproduct, (result , cur) => {
        cur.update = new Date(cur.dateUpdated).toLocaleString();
        delete cur.dateUpdated;
    }, listproduct);
};

//write to xlsx
function writeXlsx(datas) {
    let wsName = 'product';
    let wb = xlsx.utils.book_new();
    let ws = xlsx.utils.json_to_sheet(datas);
    xlsx.utils.book_append_sheet(wb, ws, wsName);
    xlsx.writeFile(wb, 'ssproduct.xlsx', );
    console.log('save file success');
}

function startWrite(fileUrl) {
    let datas = fs.readFileSync(fileUrl);
    let productJson = JSON.parse(datas);
    changeDate(productJson);
    writeXlsx(productJson);
}

const fileUrl = './src/week2/product.json';
startWrite(fileUrl)
