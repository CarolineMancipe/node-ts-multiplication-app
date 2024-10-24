//Crear la data del archivo

//Definicion de interfaces para especificar los tipos
//Reglas de negocio que los onjetos dentro de la clase deben cumplir
export interface CreateTableUseCase {
    //execute devuelve un string y se definie tipo de los parámetros o argumentos
    execute: ( options:CreateTableOptions ) => string;
}

//Definición de CreateTableOptions
//El ? indica que el elemento es opcional
export interface CreateTableOptions {
    base:number,
    limit?: number;
}


export class CreateTable implements CreateTableUseCase {
    //Primer método que se llama al crear una instancia de la clase
    constructor(
           /**
         *  DI - Dependecy Injection (Lo que queremos que haga)
         */
    ){};

    //Cada caso de usu tambien tendrá el método execute
    // Donde se ejecuta el caso de uso - el que al final va a crear la tabla
    //También llamado run
    //Crear la información que va a ser enviada despues a un archivo
    //limit = 10 porque el elemento es opcional
    //Parámetros de tipo CreateTableOptions Nos ayuda a que cualquier persona que implemente la clase sepa que tipado tienen los objetos de entrada
    execute({ base, limit = 10 } : CreateTableOptions ){
        let outputMessage = ''
        for (let i = 1; i <= limit; i++) {
            outputMessage += ` ${ base } x ${ i } = ${ base * i }\n`; 
        }

        return outputMessage;
    }
}

//El caso de uso lo utilizaremos en nuestro server-app