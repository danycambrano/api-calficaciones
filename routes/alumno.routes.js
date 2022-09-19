import routerx from 'express-promise-router';
import alumnoController from '../controllers/alumno.controller';

const router=routerx();

router.post('/guardarAlumno',alumnoController.addAlumno);
router.get('/consultarAlumno/:carrera',alumnoController.consultarAlumnos);
router.get('/consultarUnAlumno/:id',alumnoController.consultarUnAlumno);
router.delete('/eliminarAlumno/:id', alumnoController.deleteAlumno);
router.put('/updateAlumno/:id',alumnoController.updateAlumno);

export default router;