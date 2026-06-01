import { Router } from 'express';
import { getIncidencias } from '../controllers/incidencia.controller.js';

const router = Router();

//Endpoint GET /api/incidencias
router.get('/', getIncidencias);

export default router;