const { crearArchivo } = require('./helpers/multiplicar');
const color = require('colors');
const argv = require('./config/yargs');

    

const {base, listar, hasta} = argv;    
    
console.clear();
crearArchivo(base, listar, hasta)
    .then( (message) => {
        console.log(color.rainbow(message));
    })
    .catch( (err) => {
        console.log(color.red(err));
    });

