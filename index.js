const argv=require("yargs")
.option('b',{
    alias:'base',
    type:'number',
    demandOption:true,
    describe:'Es la base de la tabla de multiplicar'
}
).option('l',{
    alias:'limite',
    type:'number',
    demandOption:false,//aca estoy diciendo que no va a ser requerido...es opcional
    default:10,
    describe:'Establece un limite a la ejecución del código.'
})
.version()//el valor que nos devuelve x consola lo sava del package.json
.help()
.check((argv,options)=>{
    if(isNaN(argv.b)){
        throw Error('El argumento tiene que ser un número.')
    }
    return true;
}).argv;

//const { argv } = require("yargs");
const {multiplicar}=require("./multiplicador/index");
const base=5;
multiplicar(argv.b,argv.l);
//console.log(argv);
