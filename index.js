import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

//importar las rutas
import router from './routes';

//importar mongoose
import mongoose from 'mongoose';

//conexión a la bd en monngoDB
mongoose.Promise=global.Promise;
const dbURL='mongodb://localhost:27017/calificaciones';
mongoose.connect(dbURL, {useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log('Conectado al servidor de BD'))
.catch(err=>console.log(err));

//heredando de la clase express
const app=express();

//definición de puerto
app.set('port', process.env.PORT || 4000);

//midlewares de conexión HTTP
app.use(morgan("dev"));
app.use(cors());

//Validación de datos
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
//Definición de rutas
app.use('/api',router);

app.listen(app.get('port'),()=>{
    console.log('Servidor se ejecuta en el puerto' +" " +app.get('port'));
});