/*Traemos Config de DOTENV
  si existe en archivo al inicio del proyecto o raiz llamado .env
  leera lo que tiene dentro y lo asignara en las variables
  de entorno.
 */
require('dotenv').config();
//para probarlo hacemos lo siguiente
/**
 * process.env es un obj que tiene acceso al sistema
 * y el env hace referencia a las variables, al entorno
 * y por ejemploaccedemos a testing
 */
console.log('La variable de entorno MONGODB_URI contiene:',
            process.env.MONGODB_URI);
/*El index es el encargado de arrancar la aplicacion
  Este seria el encargado de arrancar la db y el servidor
  y otras configuracines basicas
*/

//requerimos el archivo database para arrancar la DB
require('./database');

//importamos app que viene del server y siempre en una
//const llamada app
const app = require('./server');

//Con esto ya podemos ejecutarlo en el puerto que queramos.
//llamamos "port" desde el server que contiene la config
app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto:',app.get('port'));
})