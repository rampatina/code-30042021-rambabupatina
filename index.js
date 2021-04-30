const StreamArray = require('stream-json/streamers/StreamArray');
const path = require('path');
const fs = require('fs');
const utils = require('./utils');

const jsonStream = StreamArray.withParser();
//var count = 0;
var table = [];
//You'll get json objects here
//Key is an array-index here
jsonStream.on('data', ({key, value}) => {
    let col = utils.addColumns(value);
    if (col) {
        table.push(col);
    }
});



jsonStream.on('end', () => {
    console.log('Count of Overweight people is: ' + table.filter(x => x.BMICategeory == "Overweight").length);
});

const filename = path.join(__dirname, 'input.json');
fs.createReadStream(filename).pipe(jsonStream);