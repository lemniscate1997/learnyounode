var http = require('http');

var server = http.createServer(function(req, res){
    if(req.method == "POST"){
        let reqdata = "";

        req.on('data', function(data){
            reqdata += data.toString();
        })

        req.on('end', function(){
            res.end(reqdata.toUpperCase());
        })
    }
});

server.listen(process.argv[2]);