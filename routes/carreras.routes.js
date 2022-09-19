import routerx from 'express-promise-router';
import carreraController from '../controllers/carrera.controller';
const router=routerx();

router.post('/guardarCarrera',carreraController.addCarrera);
router.get('/consultarCarrera',carreraController.consultarCarreras);
router.get('/consultarUnaCarrera/:id',carreraController.consultarUnaCarrera);
router.delete('/eliminarCarrera/:id', carreraController.deleteCarrera);
router.put('/updateCarrera/:id',carreraController.updateCarrera);

export default router;