import mongoose, {Schema} from "mongoose";

const carerra=new Schema({
    clave:String,
    nombre:String,
    filename:String,
    path:String,
    crearAc:{type:Date, default: Date.now}
});

const Carreras=mongoose.model('carreras',carerra);
export default Carreras;