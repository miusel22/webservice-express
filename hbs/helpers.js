//helpers
const hbs = require('hbs'); //importamos hbs

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();//mostrará la fecha en este caso el año en el que estamos

});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});

