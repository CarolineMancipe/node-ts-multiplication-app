import yargs, { options } from 'yargs';
import { hideBin } from 'yargs/helpers'

//hideBin Oculta los dos primeros elementos de process.argv  (la ruta de Node.js y la ruta del archivo que se ejecuta)
// para que Yargs procese solo los argumentos relevantes, es decir, aquellos que el usuario ha pasado explícitamente

export const yarg = yargs(hideBin(process.argv))
    .option('b', { //Funcion b y ¿Cómo quiero que funcione?
        alias: 'base', 
        type: 'number',
        demandOption: true, //Obliga a que lo proporcionen, si no lo proporcinan lanza un error
        describe: 'Multiplication table base'
    })
    .option('l', { //Limite
        alias: 'limit', 
        type: 'number',
        default: 10, //Valor por defecto
        describe: 'Multiplication table limit'
    })
    .option('s', { //Mostrar la tabla si la persona lo quiere o no
        alias: 'show', 
        type: 'boolean',
        default: false, //Valor por defecto
        describe: 'Show multiplication table'
    })
    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name',
    })
    .option('d',{
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination',
    })
    .check(( argv, options ) => {
        //console.log({ argv, options });
        if( argv.b < 1 ) throw 'Error: base must be greater than 0';

       
        return true;
    })
    .parseSync()


