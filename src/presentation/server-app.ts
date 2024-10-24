import { SaveFile } from "../domain/use-cases/save-file.usecase";
import { CreateTable } from "../domain/use-cases/create-table.usecase";


//La interfaz son las reglas del objeto
interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string
}


//Clase para mantener extructurada la lógica del servidor
//Va a orquestar básicamente como va a funcionar nuestra aplicación de entrada
export class ServerApp {
   

   //Static: Para poder llamar el método sin inicializar la clase
   static run({ base, limit, showTable, fileName, fileDestination }: RunOptions){
        console.log('Server running...');
        
        // CreateTable es nuestro caso de uso - aqui se crea la instancia de la clase
        //Aquí se haría la inyección de dependencias pero como no hay ninguna el () se deja vacio
        //En execute se manda sus argumentos que son la base y el limite
        const table = new CreateTable()
            .execute( { base, limit });
        
        //Creación del archivo
        const wasCreated = new SaveFile()
            .execute({ fileContent: table, 
                       fileDestination: fileDestination,
                       fileName: fileName });

            ( wasCreated )
            ? console.log('File Created!')
            : console.error('File not created!');

        //Si quiere imprimir la tabla que la imprima
        if( showTable ) console.log(table);
       
    }

}