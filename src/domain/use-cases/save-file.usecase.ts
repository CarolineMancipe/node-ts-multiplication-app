//Crear el archivo

//Importación de fileSystem
import fs from "fs";



//Definicion del caso de uso
//Se define como quiero que funcione mi caso de uso
export interface SaveFileUseCase {
    //El método devuelve un boolean
    execute: ( options: Options ) => boolean;
}

export interface Options {
    fileContent : string;
    fileDestination?: string;
    fileName?   : string;
}

//Creando la clase, el cual es el caso de uso
export class SaveFile implements SaveFileUseCase {
    //Inyección de dependencia
    //1 podría ser el repositorio en donde se va a guardar la información
    constructor(
        /**
         * repository: StorageRepository
         */
    ){}

    
    execute( { 
        fileContent, 
        fileDestination, 
        fileName
    }: Options ) : boolean {
        
     try { 
        if( fileDestination ) fs.mkdirSync(fileDestination, { recursive: true })
        //Grabar en un archivo de salida
        fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`, fileContent);
        //console.log('File created!');
        return true;
    } catch(error){
        console.error(error);
        return false;
    }
    }
}