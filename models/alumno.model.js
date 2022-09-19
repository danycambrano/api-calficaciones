import mongoose, {Schema} from "mongoose";

const alumnos=new Schema({
    matricula:String,
    nombre:String,
    edad:Number,
    sexo:String,
    direccion:String,
    carrera:{type: Schema.Types.ObjectId, ref:'carreras'},
    filename:String,
    path:String,
    crearAc:{type:Date, default: Date.now}
});

const Alumnos=mongoose.model('alumnos',alumnos);
export default Alumnos;