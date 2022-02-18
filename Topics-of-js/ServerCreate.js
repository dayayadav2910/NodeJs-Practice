const http = require('http');
const data = require('./data');


http.createServer((req,resp) =>{
    console.log("You ar in server");
    resp.writeHead(200,{'Content-Type':'application'});
    resp.write(JSON.stringify(data));
    resp.end()
}).listen(5000);
