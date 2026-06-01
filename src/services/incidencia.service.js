import * as modelo from '../models/incidencia.model.js';

export const obtenerTodas = async () => await modelo.getAll();

export const obtenerPorId = async (id) => {
    const incidencia = await modelo.getById(id);
    if (!incidencia) throw { status: 404, message: "Incidencia no encontrada" };
    return incidencia;
};

export const crear = async (datos) => {
    // Generar la fecha actual automáticamente
    datos.fecha_reporte = new Date().toISOString().split('T')[0];
    const newId = await modelo.create(datos);
    return await modelo.getById(newId);
};

export const actualizar = async (id, datos) => {
    const existe = await modelo.getById(id);
    if (!existe) throw { status: 404, message: "Incidencia no encontrada" };
    await modelo.update(id, datos);
    return await modelo.getById(id);
};

export const eliminar = async (id) => {
    const existe = await modelo.getById(id);
    if (!existe) throw { status: 404, message: "Incidencia no encontrada" };
    await modelo.remove(id);
    return { id_eliminado: id };
};