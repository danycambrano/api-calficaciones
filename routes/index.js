import routerx from 'express-promise-router';
import alumnoRoutes from './alumno.routes';
import carreraRoutes from './carreras.routes';
const router=routerx();

router.use('/alumno',alumnoRoutes);
router.use('/carrera', carreraRoutes);

export default router;