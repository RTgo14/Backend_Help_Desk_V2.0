import * as incidenciaModel from '../models/incidencia.model.js';

export const obtenerTodasLasIncidencias = async () => {
    //llamada al modelo
    const incidencias = await incidenciaModel.getAllIncidencias();
    return incidencias;
};