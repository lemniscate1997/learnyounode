var mymodule = require('./mymodule.js');

var dir = process.argv[2];
var ext = process.argv[3];



mymodule(dir, ext, function(err, result){
    if(err){
        console.log(err);
    }
    else{
        result.forEach(x => {
            console.log(x);
        });
    }
})