import db from '../config/db.js';

// GET ALL
export const getAll = async () => {
    const query = `
        SELECT i.*, e.nombre as estado_nombre 
        FROM incidencias i 
        JOIN estados_incidencia e ON i.estado_id = e.id 
        ORDER BY i.id DESC
    `;
    const [rows] = await db.query(query);
    return rows;
};

// GET BY ID
export const getById = async (id) => {
    const query = `
        SELECT i.*, e.nombre as estado_nombre 
        FROM incidencias i 
        JOIN estados_incidencia e ON i.estado_id = e.id 
        WHERE i.id = ?
    `;
    const [rows] = await db.query(query, [id]);
    return rows[0];
};

// CREATE (POST)
export const create = async (data) => {
    const { titulo, descripcion, prioridad, fecha_reporte, area, estado_id } = data;
    const query = `INSERT INTO incidencias (titulo, descripcion, prioridad, fecha_reporte, area, estado_id) VALUES (?, ?, ?, ?, ?, ?)`;
    const [result] = await db.query(query, [titulo, descripcion, prioridad, fecha_reporte, area, estado_id]);
    return result.insertId;
};

// UPDATE (PUT)
export const update = async (id, data) => {
    const { titulo, descripcion, prioridad, area, estado_id } = data;
    const query = `UPDATE incidencias SET titulo = ?, descripcion = ?, prioridad = ?, area = ?, estado_id = ? WHERE id = ?`;
    const [result] = await db.query(query, [titulo, descripcion, prioridad, area, estado_id, id]);
    return result.affectedRows;
};

// DELETE
export const remove = async (id) => {
    const query = `DELETE FROM incidencias WHERE id = ?`;
    const [result] = await db.query(query, [id]);
    return result.affectedRows;
};