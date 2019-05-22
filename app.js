 const http = require('http');
 const fs = require('fs');

 function rqListener(req,res) {


 }

  const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
if(url==='/'){
    res.write('<html>');
    res.write('<head><title>enter message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); 
}

if(url==='/message' && method === 'POST'){
    const body =[] ;
    req.on('data',()=>{

    });
    fs.writeFileSync('message.txt','DUMMY');
    res.statusCode= 302;
    res.setHeader('Location','/');
    return res.end();


}
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
res.write('<head><title>my First Page</title><head>');
res.write('<body><h1>hello from my node.js server</h1></body>');
    res.write('</html>');
    res.end();
    //process.exit();
 });
 server.listen(5000,()=>{
console.log('server is running on port no 5000')

 })