const express = require('express')
const app = express()  //declara una variable que es exxpress para poderlo usar
 
const hbs = require('hbs'); //importamos hbs

require('./hbs/helpers');
// middelwer coldback que se va a ejecutar no importa cual se pida

const port=  process.env.PORT || 3000;





app.use(express.static( __dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales' );
app.set('view engine', 'hbs');



app.get('/', (req, res)=> { //solicitud get cuando el path sea un /
  
  
    //res.send('Hola mundo')
  
 //res.send(salida); //send detecta que es un objeto y lo pone como formato json  
res.render('home',{
nombre:'Camila' 

});

});
app.get('/about', (req, res)=> { //solicitud get cuando el path sea un /
  
  
    //res.send('Hola mundo')
  
 //res.send(salida); //send detecta que es un objeto y lo pone como formato json  
res.render('about',{

 //mostrará la fecha en este caso el año en el que estamos

});

});

 
app.listen(port, ()=>{

    console.log('Escuchando peticiones en el puerto 3000')
}

);