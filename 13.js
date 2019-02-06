var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
    var urlParts = url.parse(req.url, true);
    var urlParams = urlParts.query;
    var urlPathname = urlParts.pathname;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(urlPathname == "/api/parsetime"){
        let date = new Date(urlParams['iso']);
        
        let data = JSON.stringify({
            "hour":date.getHours(),
            "minute":date.getMinutes(),
            "second":date.getSeconds()
        });
        
        res.end(data);       
    }
    else{
        let date = new Date('1 Jan 1970 00:00:00 UTC');
        let date1 = new Date(urlParams['iso']);
        let data = JSON.stringify({
            "unixtime":Math.abs(date1-date)
        });
        res.end(data); 
    }
});

server.listen(process.argv[2]);