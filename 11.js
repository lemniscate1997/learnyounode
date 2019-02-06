var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    let stream = fs.createReadStream(process.argv[3]);
    let chunk="";
    stream.on("data", function(data){
        chunk+=data.toString();
    })

    stream.on('end', function(){
        res.end(chunk);
    })
});

server.listen(process.argv[2]);