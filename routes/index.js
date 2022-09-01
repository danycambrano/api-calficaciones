import routerx from 'express-promise-router';
import alumnoRoutes from './alumno.routes';

const router=routerx();

router.use('/alumno',alumnoRoutes);

export default router;