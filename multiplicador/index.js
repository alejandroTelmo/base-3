
const fs=require("fs")
const multiplicar=(base,limite)=>{
    //const base=3;
    console.log(`==============Tabla del ${base}==============`);
    for(let numero=1;numero<=limite;numero++){
        console.log(`${base} * ${numero} = ${base*numero}`);
    }
    
    console.log("Hasta aca sin guardar");
    console.log("Desde  aca  guardadando====================================");
    console.log(`==============Tabla del ${base}==============`);
    let resultado='';
    for(let numero=1;numero<=limite;numero++){
       resultado+=`${base} * ${numero} = ${base*numero}\n`;
    }
    console.log(resultado);
    fs.writeFileSync(`Tablas/tablas-del-${base}.txt`,resultado);
}


module.exports={
    multiplicar
};