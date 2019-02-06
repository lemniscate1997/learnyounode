var http = require('http');

for(let i=2;i<5;i++){
    http.get(process.argv[i], function(req, res){
        var responseBody = "";
        
        req.on('data', function(data){
            responseBody += data.toString();
        });

        req.on('end', function(){
            console.log(responseBody);
        })
    });
}
    