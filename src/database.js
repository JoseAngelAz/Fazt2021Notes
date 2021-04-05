const mongoose = require('mongoose');
/*traemos la variable de entorno de la raiz del proyecto
MONGODB_URI que contiene la cadena de conexion a la DB
 y la almacenamos en una const con el mismo nombre que 
 la varible de entorno
*/
//con ES6 llamamos a las variables de entorno para esta config
const {NOTES_APP_MONGODB_HOST,NOTES_APP_MONGODB_DATABASE} =
       process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/
      ${NOTES_APP_MONGODB_DATABASE}`;
/**
 * Mandamos la cadena de conexion y unas configuraciones
 * como mensajes de advertencia
 */
mongoose.connect(MONGODB_URI,{
    useUnifiedTopology:true,
    useNewUrlParser: true
})
//cuando se conecte no voy a usar esa cadena de conexion
//sino que solo mostrar por consola
.then(db => console.log('La base de datos esta conectada'))
//si existe un error que lo atrape y lo muestre en consola
.catch(err => console.log(err));