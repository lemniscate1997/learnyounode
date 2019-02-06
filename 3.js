var fs = require('fs');

var x = process.argv[2];

var data = fs.readFileSync(x,"UTF-8")
let p = data.split('\n');
//p = p.filter(x=>x !='')
let q = p.length-1;
console.log(q);
