var http = require('http');

http.get(process.argv[2], function(req, res){
    var responseBody = "";
    
    req.on('data', function(data){
        responseBody += data.toString();
    });

    req.on('end', function(){
        console.log(responseBody.length);
        console.log(responseBody);
    })
});