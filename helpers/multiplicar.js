const fs = require('fs');
const imprimirTabla = (base, salida) => {
    console.log("==================");
    console.log("   Tabla del ", base)
    console.log("==================");
    console.log(salida);
}

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    let salida = '';

    for(let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
    if (listar) imprimirTabla(base, salida)

    return `tabla-${base}.txt creado`;
}

module.exports = {
    crearArchivo
};