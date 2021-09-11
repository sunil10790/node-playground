const fs = require('fs');

// Read the contents of the file
const jsonData = fs.readFileSync('1-json-fs.json', {
    encoding: 'utf-8'
})

// Modify the data
const data = JSON.parse(jsonData)
data.name = 'Mogambo'
data.age = 1000

// Override the data in the file
const overrideData = JSON.stringify(data);
fs.writeFileSync('1-json-fs.json', overrideData);