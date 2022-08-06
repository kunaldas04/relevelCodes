const http = require("http");
http.createServer((req,res)=>{
    res.end("welcome to server");
}).listen(4500)