// console.log(process.argv)


// const [ tsnode, node, ...args ] = process.argv;

// console.log(args)


import { yarg as argv } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";


//console.log(argv.b)

(async() => {
    await main() 
})();


//Main es el punto de entrada de cualquier aplicación
async function main() {
    //Se hace destructuración de los valores del yarg
    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = argv;
    ServerApp.run({ base, limit, showTable, fileName, fileDestination });
  
}