const path = require('path');
//retorna un obj y se guarda en una const con nombre app
const express = require('express');
//handelbars
const handelbars = require('handlebars');
const exphbs = require('express-handlebars');
//morgan para ver peticiones
const morgan = require('morgan');
//multer
const multer = require('multer');




//INICIALIZACIONES
//app es su aplicacion o su servidor en si
const app = express();

/*Vamos a crear unas cuantas
  secciones de configuracion
  ya que express esta conformado por varias cosas
  por ej, Midlewares, funciones, inicializaciones
*/




//CONFIGURACIONES
/*Lo que quiero que haga express basado en algunos modulos,
  es decir, vamos a instalar mas modulos, tenemos que conf
  igurar esos modulos relacionados con express.
 */
//Establecemos una config para un puerto, le llamamos port
//process.env.PORT hace referencia a una variable del SO,
//a una variable de entorno, significa si nuestro entorno o
//sistema tiene una variable llamada PORT, que la use.
//sino pues que use otro puerto, el que decida en este parametro.
app.set('port',process.env.PORT||4001);

//establecemos donde esta la carpeta de las vistas ya que no
//esta el la raiz del proyecto para que la alcance node
//usamos el modulo path para unir las rutas
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
  defaultLayout:'main',
  layoutsDir: path.join( app.get('views'),'layouts'),
  partialsDir:path.join( app.get('views'),'partials'),
  extname:'.hbs',
  handlebars:handelbars
}));
app.set('view engine','.hbs');

//MIDLEWARES
/*Funciones que se van ejecutando a medida que van llegando
  peticiones.
  Si un Usuario pide algo a mi servidor y yo quiero hacer algo
  antes de que se procese lo que quiere el usuario, pues puedo
  hacerlo con un midleware o una funcion.
 */
//soportar json en formularios
app.use(express.urlencoded({extended:false}));
//morgan
app.use(morgan('dev'));

//config de MULTER, hay que pasarlo a multer
const storage = multer.diskStorage({
  destination:path.join(__dirname,'public/uploads'),
  filename: (req,file,cb)=>{
    cb(null, file.originalname);
  }
});

app.use(multer({
  storage,
  dest: path.join(__dirname,'public/uploads'),
  limits:{fileSize:2000000},
  fileFilter:(req,file,cb)=>{
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }cb("Error: Archivo debe ser una imagen");
  }
}).single('img'));
//VARIABLES GLOBALES
/*Hace referencia a las variables gloales, es decir, aqui
  podemos crear una variable que podemos acceder en todo
  nuestro proyecto
*/



//RUTAS
/*contendra las rutas o URL de la apicacion pero estas
  las vamos a importar ya que tendran su propio archivo.
*/
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/blog.routes'));


//ARCHIVOS ESTATICOS
/*Archivos estaticos que el navegador va a poder acceder
  directamente desde el servidor sin pedir autenticacion,
  osea libremente y tambien se tiene que configuarar.
 */
//static es para definir donde esta la carpeta static o publica
app.use(express.static(path.join(__dirname,'public')));



//como app lo usaremos en index lo exportamos desde aqui
module.exports = app;