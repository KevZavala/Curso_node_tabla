const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla de la base requerida'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de la tabla'
    })
    .check( (argv, options) => {
        if (isNaN(argv.b)) throw 'base must be a number';
        if(isNaN(argv.h)) throw 'hasta must be a number'
        return true;
    })
    .argv;

module.exports = argv;