var fs = require('fs');

module.exports = function(dir, ext, callback){
    let p = this
    fs.readdir(dir, function(err, read){
        if (err){
            return callback(err);
        }
        else{
            let data = [];
            read.forEach(function(files){
                var file = `${dir}/${files}`;
                var stats = fs.statSync(file);
    
                if(stats.isFile() && files.split('.')[1] == ext){
                    data.push(files);
                }
            });
            return callback(null, data);
        }
    });
}