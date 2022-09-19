import models from "../models";

export default{
    addCarrera:async(req, res, next)=>{
        try {
            const {clave,nombre}=req.body;

            const agregarCarrera=new models.Carreras({
                clave,nombre
            });
            agregarCarrera.filename=req.file.filename;
            agregarCarrera.path='public/imagenes/'+req.file.filename;
            
            const guardarCarrera=await agregarCarrera.save();
            res.status(200).json(guardarCarrera);
            console.log(req.body);
        } catch (e) {
            res.status(500).send({
                message:"No se encuentra el servidor de BD"
            });
            next(e);
        }
    },
    
    consultarCarreras:async(req,res,next)=>{
        try {
            const consultaCarrera=await models.Carreras.find();
            res.json(consultaCarrera);
            console.log(consultaCarrera);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al conectar"
            });
            next(error);
        }
    },
    
    consultarUnaCarrera:async(req,res,next)=>{
        try {
            const consultarOneCarrera=await models.Carreras.findById(req.params.id);
            if(!consultarOneCarrera){
                res.status(404).send({
                    message:"El registro no existe"
                });
            }else{
                res.status(200).json(consultarOneCarrera);
            }
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(error);
        }
    },
    deleteCarrera:async(req,res,next)=>{
        try {
            const eliminar=await models.Carreras.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        } catch (error) {
            res.status(500).send({
                message: "No se pudo eliminar el dato"
            });
            next(error);
        }
    },
    updateCarrera:async(req,res,next)=>{
        try {
            const {clave,nombre}=req.body;

            const updatecarrera={
                clave,nombre
            }

            const update=await models.Carreras.findByIdAndUpdate(req.params.id, updatecarrera);
            res.json({
                message:"Datos actualizados correctamente" 
            });
            console.log(update);
        } catch (error) {
            res.status(500).send({
                message: "No se pudo actualizar la información"
            })
            next(error);
        }
    }
}