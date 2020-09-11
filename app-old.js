const http=require('http'); 

http.createServer((req,res)=>{
res.writeHead(200,{'content-Type':'application/json'});

let salida={
 nombre:'Camila',
 edad: 22,
 url: req.url   
}


res.write(JSON.stringify(salida));
res.end();
})
.listen(8080); //escuchando el puerto 80


console.log('Escuchando el puerto 8080')