const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
if(listar){
    try{

    console.log('============');
    console.log(`Tabla del ${base}`.red);
    console.log('============');

    let salida = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n `;
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);   

} catch (err){
    throw err;
}
}else{
    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n `;
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    } return `Tabla-${base}.txt`;
    
}
module.exports = {
    crearArchivo:crearArchivo
}
