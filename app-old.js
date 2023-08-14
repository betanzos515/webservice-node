const http = require('http');

const PORT = 3000;

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-type':'application/text',
    })
    res.write('Hola Mundo');
    res.end();
});


server.listen(PORT);
console.log(`El servidor está corriendo en el puerto ${ PORT }`);
