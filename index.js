const StreamArray = require('stream-json/streamers/StreamArray');
const path = require('path');
const fs = require('fs');
const utils = require('./utils');

const jsonStream = StreamArray.withParser();

var table = [];

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