import models from "../models";

export default{
    addAlumno:async(req, res, next)=>{
        try {
            const {matricula,nombre,edad,sexo,direccion}=req.body;

            const agregarAlumno=new models.Alumnos({
                matricula,nombre,edad,sexo,direccion
            });

            const guardarAlumno=await agregarAlumno.save();
            res.status(200).json(guardarAlumno);
            console.log(req.body);
        } catch (e) {
            res.status(500).send({
                message:"No se encuentra el servidor de BD"
            });
            next(e);
        }
    },
    
    consultarAlumnos:async(req,res,next)=>{
        try {
            const consultaAlumno=await models.Alumnos.find();
            res.json(consultaAlumno);
            console.log(consultaAlumno);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al conectar"
            });
            next(error);
        }
    },
    
    consultarUnAlumno:async(req,res,next)=>{
        try {
            const consultarOneAlumno=await models.Alumnos.findById(req.params.id);
            if(!consultarOneAlumno){
                res.status(404).send({
                    message:"El registro no existe"
                });
            }else{
                res.status(200).json(consultarOneAlumno);
            }
        } catch (error) {
            res.status(500).send({
                message:"Ocurrio un error al consultar"
            });
            next(error);
        }
    },
    deleteAlumno:async(req,res,next)=>{
        try {
            const eliminar=await models.Alumnos.findByIdAndDelete(req.params.id);
            res.status(200).json(eliminar);
        } catch (error) {
            res.status(500).send({
                message: "No se pudo eliminar el dato"
            });
            next(error);
        }
    },
    updateAlumno:async(req,res,next)=>{
        try {
            const {matricula,nombre,edad,sexo,direccion}=req.body;

            const updateUnAlumno={
                matricula,nombre,edad,sexo,direccion
            }

            const update=await models.Alumnos.findByIdAndUpdate(req.params.id, updateUnAlumno);
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