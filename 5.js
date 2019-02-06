var fs = require('fs');

var dir = process.argv[2];
var ext = process.argv[3];
fs.readdir(dir, function(err, read){
    read.forEach(function(files){
        var file = `${dir}/${files}`;
        var stats = fs.statSync(file);

        if(stats.isFile() && files.split('.')[1] == ext){
            console.log(files)
        }
    });
});

