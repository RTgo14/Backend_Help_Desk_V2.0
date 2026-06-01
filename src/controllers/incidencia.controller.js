import * as incidenciaService from '../services/incidencia.service.js';

export const getIncidencias = async (req, res, next) => {
    try {
        const incidencias = await incidenciaService.obtenerTodasLasIncidencias();
        res.status(200).json({
            success: true,
            total: incidencias.length,
            data: incidencias
        });
    } catch (error) {
        next(error); //Pasa el error al middleware
    }
};