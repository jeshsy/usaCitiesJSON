const fs = require('fs');
let readfile, writefile;
if(process.argv.length === 4) {
  readfile = process.argv[2];
  writefile = process.argv[3];
} else if (process.argv.length === 3) {
  readfile = process.argv[2];
  writefile = './data/testObj';
} else {
  readfile = './data/usaCitiesSmall.txt';
  writefile = './data/testObj';
} 


fs.readFile(readfile, 'utf8', function(err, data) {  
    if (err) throw err;
    const arr = [];
    let ys = /   /g;
    let xs =/ /;
    let name = / \| /;
    let closebracket = /\r/;
    data = data.replace(ys, '","y":"');
    data = data.split('\n');
    for (let i = 0; i < data.length - 1; i++) {
      data[i] = data[i].replace(xs, '{"x":"');
      data[i] = data[i].replace(name, '","name":"');
      data[i] = data[i].replace(closebracket, '"}');
      arr.push(data[i]);
      // let obj = JSON.parse(data[i]);
      // arr.push(obj);
    }
    // console.log(Cities);
    console.log(arr);
    // console.log(data);
    fs.writeFile(writefile, Array.of(arr), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  }); 
});

// console.log(Cities);
// console.log(arr);

