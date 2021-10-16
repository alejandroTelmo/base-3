
const fs=require("fs")
const multiplicar=(base)=>{
    //const base=3;
    console.log(`==============Tabla del ${base}==============`);
    for(let juab=1;juab<=10;juab++){
        console.log(`${base} * ${juab} = ${base*juab}`);
    }
    
    console.log("Hasta aca sin guardar");
    console.log("Desde  aca  guardadando====================================");
    console.log(`==============Tabla del ${base}==============`);
    let resultado;
    for(let juab=1;juab<=10;juab++){
       resultado+=`${base} * ${juab} = ${base*juab}\n`;
    }
    console.log(resultado);
    fs.writeFileSync(`Tablas/tablas-del-${base}`,resultado);
}


module.exports={
    multiplicar
};