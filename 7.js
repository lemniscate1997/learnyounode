var http = require('http');
var url = process.argv[2];

http.get(url, function(req, res){
    var responseBody = [];
    
    req.on('data', function(data){
        responseBody.push(data.toString());
    });

    req.on('end', function(){
        responseBody.forEach(x=>console.log(x));
    })
});