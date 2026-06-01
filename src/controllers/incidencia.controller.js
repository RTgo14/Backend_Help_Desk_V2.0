import * as servicio from '../services/incidencia.service.js';

/*controlador para obtener toda la lista de incidencias*/
export const getIncidencias = async (req, res) => {
    try {
        const data = await servicio.obtenerTodas();
        res.status(200).json({ success: true, message: "Lista de incidencias", data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/*controlador para buscar una sola incidencia con el ID*/
export const getIncidenciaById = async (req, res) => {
    try {
        const data = await servicio.obtenerPorId(req.params.id);
        res.status(200).json({ success: true, message: "Detalle de incidencia", data });
    } catch (error) {
        res.status(error.status || 500).json({ success: false, message: error.message });
    }
};

/*controlador para guardar una incidencia nueva en el sistema*/
export const createIncidencia = async (req, res) => {
    try {
        const data = await servicio.crear(req.body);
        res.status(201).json({ success: true, message: "Incidencia creada correctamente", data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/*controlador para modificar los datos de una incidencia*/
export const updateIncidencia = async (req, res) => {
    try {
        const data = await servicio.actualizar(req.params.id, req.body);
        res.status(200).json({ success: true, message: "Incidencia actualizada correctamente", data });
    } catch (error) {
        res.status(error.status || 500).json({ success: false, message: error.message });
    }
};

/*controlador para borrar una incidencia del sistema usando la ID*/
export const deleteIncidencia = async (req, res) => {
    try {
        await servicio.eliminar(req.params.id);
        res.status(200).json({ success: true, message: "Incidencia eliminada correctamente" });
    } catch (error) {
        res.status(error.status || 500).json({ success: false, message: error.message });
    }
};