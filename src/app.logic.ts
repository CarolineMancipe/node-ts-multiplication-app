//FyleSystem es propio de Noce
import fs from 'fs';
import { yarg as argv } from "./config/plugins/yargs.plugin";

const { b:base, l:limit, s:showTable } = argv;

let outputMessage = '';
// let base = argv.b;
// let limit =  argv.l;
const headerMessage = `
===========================================
           Tabla del ${ base }
===========================================\n
`;

for (let i = 1; i <= limit; i++) {
    outputMessage += ` ${ base } x ${ i } = ${ base * i }\n`; 
}

outputMessage = headerMessage + outputMessage;

if ( showTable ) console.log(outputMessage);

//Crear el directorio
const outputPath = `outputs`;
fs.mkdirSync(outputPath, { recursive: true })
//Grabar en un archivo de salida
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');

