const http=require('http');
http.createServer((req,res)=>{
    console.log(req);

    res.write('Hola Mundo');
    res.end()

})
.listen(8080);
console.log('Escuchando al puerto ',8080);