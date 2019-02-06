var fs = require('fs');

var x = process.argv[2];

fs.readFile(x,"UTF-8" ,function(err, data){
    console.log(data.split('\n').length-1);
});